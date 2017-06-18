#!/usr/local/bin/node

let AWS = require('aws-sdk')
AWS.config.credentials = new AWS.SharedIniFileCredentials({profile: 'waa'})

let s3 = new AWS.S3()
let cloudfront = new AWS.CloudFront()
let client = require('s3').createClient({ s3Client: new AWS.S3() })
let yesno = require('yesno')

let config = {
  cloudfront: {
    staging: 'E3V9YZZ4WARWYS'
  }
}

let revision = require('child_process')
  .execSync('git rev-parse HEAD')
  .toString().trim()

let bucket = 'weareapartments-' + revision
let domain = bucket + '.s3-website-us-east-1.amazonaws.com'

yesno.ask('Switch staging env to commit ' + revision + ' ? [yes/no]', true, (ok) => {

  if (ok) {
    createBucket(bucket, () => {
      uploadToBucket(bucket, () => {
        makeBucketWebsite(bucket, () => {
          updateCloudFrontOrigin(config.cloudfront.staging, domain, () => {
            console.log('all done')
          })
        })
      })
    })
  } else {
    console.log('aborting')
  }

}, ['Yes'], ['No'])

let updateCloudFrontOrigin = (id, domain, complete) => {
  cloudfront.getDistributionConfig({Id: id}, (error, data) => {
    if (error) {
      console.log('Error', error)
    } else {
      let updateParams = data
      updateParams.Id = id
      updateParams.IfMatch = updateParams.ETag
      delete updateParams.ETag
      updateParams.Origins.Items[0].DomainName = domain
      cloudfront.updateDistribution(updateParams, (terror, tdata) => {
        if (terror) {
          console.log('Error', terror)
        } else {
          complete()
        }
      })
    }
  })
}

let makeBucketWebsite = (bucket, complete) => {

  s3.putBucketWebsite({
    Bucket: bucket,
    WebsiteConfiguration: {
      IndexDocument: {
        Suffix: 'index.html',
      },
      ErrorDocument: {
        Key: 'error/index.html'
      }
    },
  }, (error, data) => {
    if (error) {
      console.log('s3.putBucketWebsite() Error', error)
    } else {
      console.log('Success', data)
      complete()
    }
  })
}

let createBucket = (bucket, complete) => {
  s3.createBucket({Bucket: bucket}, (error, data) => {
    if (error) {
      console.log('s3:.createbucket() Error', error)
    } else {
      console.log('Success', data)
      complete()
    }
  })
}

let uploadToBucket = (bucket, complete) => {

  let params = {
    localDir: "./dist/",
    deleteRemoved: true,
    s3Params: {
      Bucket: bucket,
      ACL: 'public-read',
    }
  }

  let uploader = client.uploadDir(params)
  uploader.on('error', (error) => {
    console.log('unable to sync:', error.stack)
  })

  const bar = require('progressbar').create().step('s3 upload')

  uploader.on('progress', () => {
    bar.setTotal(uploader.progressTotal)
    bar.setTick(uploader.progressAmount)
  })

  uploader.on('end', () => {
    complete()
  })

}

/*
aws3.listBuckets((error, data) => {
  if (error) {
    console.log('Error', error)
  } else {
    console.log('Bucket List', data.Buckets)
  }
})

*/
