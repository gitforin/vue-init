'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  HOST_IP: '"http://119.84.39.35:8890"',
  CONTEXT_PATH: '""',
})
