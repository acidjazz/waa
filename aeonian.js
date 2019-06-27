#!/usr/bin/env node
/*
 * aeonian.js - configuration and deployment
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */
require('aeonian').config({
  bucket: {
    localDir: './dist/',
    prefix: 'waa-',
    region: 'us-east-1',
  },
  environments: {
    staging: 'E3V9YZZ4WARWYS',
    production: 'E2V8N3K27D7G8H',
  }
}).deploy(process.argv[2])
