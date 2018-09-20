'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  HOST_IP: '"http://119.84.39.35:8890"',
  CONTEXT_PATH: '""',
  OPEN_PROXY: false // 是否开启代理, 重置后需重启vue-cli
})
