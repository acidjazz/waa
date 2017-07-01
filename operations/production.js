let aeconfig = require('./aeconfig.js')
let ae = require('aeonian').config(aeconfig)
ae.deploy('production')
