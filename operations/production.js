let aeconfig = require('./aeconfig.js')
let ae = require('./aeonian.js').config(aeconfig)
ae.deploy('production')
