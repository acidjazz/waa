let ae = require('./aeonian.js').config({
  aws: {
    profile: 'waa'
  },
  bucket: {
    localDir: './dist/',
    prefix: 'waa-'
  },
  cloudfront: {
    staging: 'E3V9YZZ4WARWYS',
    production: 'E2V8N3K27D7G8H',
  }
})
ae.deploy('staging')
