#!/usr/local/bin/node

let AWS = require('aws-sdk')
AWS.config.credentials = new AWS.SharedIniFileCredentials({profile: 'waa'})

let aws3 = new AWS.S3()
let s3 = require('s3')
let client = s3.createClient({ s3Client: new AWS.S3() })
let yesno = require('yesno')

let revision = require('child_process')
  .execSync('git rev-parse HEAD')
  .toString().trim()

let bucket = 'weareapartments-' + revision

yesno.ask('Switch staging env to commit ' + revision + ' ? [yes/no]', true, (ok) => {
  if (ok) {

    console.log('OK')

    createBucket(bucket, () => {
      uploadToBucket(bucket, () => {
        console.log('all done')
      })
    })

  } else {
    console.log('aborting')
  }
}, ['Yes'], ['No'])

let createBucket = (bucket, ccomplete) => {
  aws3.createBucket({Bucket: bucket}, (error, data) => {
    if (error) {
      console.log('s3:.createbucket() Error', error)
    } else {
      console.log('Success', data)
      ccomplete()
    }
  })
}

let uploadToBucket = (bucket, ucomplete) => {

  let params = {
    localDir: "./dist/",
    deleteRemoved: true,
    s3Params: {
      Bucket: bucket,
      GrantRead: "uri=http://acs.amazonaws.com/groups/global/AllUsers",
    }
  }

  let uploader = client.uploadDir(params)
  uploader.on('error', (error) => {
    console.log('unable to sync:', error.stack)
  })

  const bar = require('progressbar').create().step('s3 bucket upload progress')

  uploader.on('progress', () => {
    bar.setTotal(uploader.progressTotal)
    bar.setTick(uploader.progressAmount)
  })

  uploader.on('end', () => {
    console.log(ucomplete())
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

