let cfg = {
  aws: {
    profile: 'default'
  },
  bucket: {
    prefix: null
  },
  coudfront: {
    staging: null,
    production: null,
  }
}

const ora = require('ora')
const spinner = ora('Loading aeonian').start()
const AWS = require('aws-sdk')

const Progress = require('ascii-progress')

var s3 = null
var cloudfront = null
var client = null

var revision = require('child_process')
  .execSync('git rev-parse HEAD')
  .toString().trim()

var bucket = null
var domain = null
var environment = null

exports.config = (cfg) => {

  spinner.succeed()
  this.next('Loading Configuration')

  this.cfg = cfg

  if (this.cfg.bucket.prefix === null) {
    this.error('You need to specify a bucket prefix; bucket: { prefix: \'myproj-\' }')
  }
  if (this.cfg.cloudfront.staging === null) {
    this.error('You need to specify a CloudFront Id for staging; cloudfront { staging: \'E3EOPOZJSPE\' }')
  }
  if (this.cfg.cloudfront.production === null) {
    this.error('You need to specify a CloudFront Id for production; cloudfront { staging: \'E3EOPOZJSPE\' }')
  }

  bucket = this.cfg.bucket.prefix + revision
  domain = bucket + '.s3-website-us-east-1.amazonaws.com'

  AWS.config.credentials = new AWS.SharedIniFileCredentials({profile: this.cfg.aws.profile})
  s3 = new AWS.S3()
  cloudfront = new AWS.CloudFront()
  client = require('s3').createClient({ s3Client: new AWS.S3() })

  this.succeed()

  return this

}

exports.error = (message) => {
  spinner.fail(message)
  process.exit()
}

exports.succeed = () => {
  spinner.succeed()
}
exports.info = () => {
  spinner.info()
}
exports.next = (next) => {
  spinner.text = next
  spinner.start()
}

exports.deploy = (environment) => {

  if (['staging', 'production'].indexOf(environment) === -1) {
    this.error('Invalid environment passed: ' + environment)
    return false
  }

  this.listBuckets((buckets) => {
    if (buckets.indexOf(bucket) !== -1) {
      this.next('Bucket exists, removing')
      this.info()
      this.destroyBucket(bucket, () => {
        this.process(bucket, domain, environment)
      })
    } else {
      this.process(bucket, domain, environment)
    }
  })

}

exports.process = (bucket, domain, environment) => {
  this.createBucket(bucket, () => {
    this.uploadToBucket(bucket, () => {
      this.makeBucketWebsite(bucket, () => {
        this.updateCloudFrontOrigin(this.cfg.cloudfront[environment], domain, environment, () => {
          this.next('All operations complete')
          this.succeed()
          process.exit()
        })
      })
    })
  })
}

exports.listBuckets = (complete) => {
  s3.listBuckets({}, (error, data) => {
    var buckets = []
    if (error) {
      this.error('s3.listBuckets() Error: ' + error)
    }
    for (let key in data.Buckets) {
      buckets.push(data.Buckets[key].Name)
    }
    complete(buckets)
  })
}

exports.destroyBucket = (bucket, complete) => {
  this.emptyBucket(bucket, () => {
    this.deleteBucket(bucket, () => {
      complete()
    })
  })
}

exports.emptyBucket = (bucket, complete) => {
  this.next('Emptying bucket: ' + bucket)
  var deleter = client.deleteDir({Bucket: bucket})
  deleter.on('end', () => {
    this.succeed()
    complete()
  })
}

exports.deleteBucket = (bucket, complete) => {
  this.next('Deleting bucket: ' + bucket)
  s3.deleteBucket({Bucket: bucket}, (error, data) => {
    if (error) {
      this.error('s3.deleteBucket() Error:' + error)
    } else {
      this.succeed()
      complete()
    }
  })
}

exports.createBucket = (bucket, complete) => {
  this.next('Creating bucket: ' + bucket)
  s3.createBucket({Bucket: bucket}, (error, data) => {
    if (error) {
      this.error('s3.createbucket() Error:' + error)
    } else {
      this.succeed()
      complete()
    }
  })
}

exports.uploadToBucket = (bucket, complete) => {
  this.next('00.00% Uploading to bucket: ' + bucket)
  let params = {
    localDir: this.cfg.bucket.localDir,
    deleteRemoved: true,
    s3Params: {
      Bucket: bucket,
      ACL: 'public-read',
    }
  }

  let uploader = client.uploadDir(params)
  uploader.on('error', (error) => {
    this.error('unable to sync:', error.stack)
  })

  uploader.on('progress', () => {
    if (!isNaN(uploader.progressAmount / uploader.progressTotal)) {
      let done = (uploader.progressAmount / uploader.progressTotal * 100).toFixed(2)
      spinner.text = done + '% Uploading to bucket: ' + bucket
    }
  })

  uploader.on('end', () => {
    complete()
  })

}

exports.makeBucketWebsite = (bucket, complete) => {
  this.next('Making bucket a website: ' + bucket)

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
      this.error('s3.putBucketWebsite() Error: ' + error)
    } else {
      this.succeed()
      complete()
    }
  })
}

exports.updateCloudFrontOrigin = (id, domain, environment, complete) => {

  this.next('Getting ' + environment + ' CloudFront Config with id: ' + id)
  cloudfront.getDistributionConfig({Id: id}, (error, data) => {
    if (error) {
      this.error('cf.getDistributionConfig Error ' +  error)
    } else {

      this.succeed()
      let updateParams = data
      updateParams.Id = id
      updateParams.IfMatch = updateParams.ETag
      delete updateParams.ETag
      updateParams.Origins.Items[0].DomainName = domain

      let previous = updateParams.Origins.Items[0].DomainName.replace('.s3-website-us-east-1.amazonaws.com', '')
      domain = domain.replace('s3-website-us-east-1.amazonaws.com', '')

      cloudfront.updateDistribution(updateParams, (terror, tdata) => {
        this.next('Updating ' + environment + ' CloudFront Origin with domain: ' + domain)
        if (terror) {
          this.error('cf.updateDistribution Error' +  terror)
        } else {
          this.succeed()
          if (domain !== previous) {
            this.next('Destroying previous bucket: ' + previous)
            this.bucketDestroy(previous, () => {
              this.succeed()
            })
          } else {
            this.next('Previous bucket was the same, leaving it alone')
            this.succeed()
            complete()
          }
        }
      })
    }
  })
}

