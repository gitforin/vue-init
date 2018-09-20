import Qs from 'qs'
import Vue from 'vue'
import axios from 'axios'
import router from '@/router'
import merge from 'lodash/merge'
const http = axios.create({
  baseURL: 'http://119.84.39.35:8890',
  method: 'GET',
  transformRequest: [
    function(data) {
      return Qs.stringify(data); //x-www-form-urlencoded请求，需将data解析成URL QUERY SEARCH形式
      //return JSON.stringify(data); //json请求，需将data解析成JSON字符串形式
    }
  ],

  transformResponse: [
    function(data) {
      //解决IE浏览器9-11返回数据为string的异常情况
      if (typeof data === 'string') {
        return JSON.parse(data)
      } else {
        return data
      }
    }
  ],

  headers: {
    'Accept': 'application/json,text/html',
    //'Content-Type': 'application/json;charset=UTF-8'
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'x-agent-with': 'weixin'
  },

  params: {},
  paramsSerializer: function(params) {
    return Qs.stringify(params)
  },

  timeout: 30000, //30秒
  withCredentials: false, // default
  responseType: 'json', // default

  onUploadProgress: function(progressEvent) {

  },

  onDownloadProgress: function(progressEvent) {

  },

  maxContentLength: 100000,
  validateStatus: function(status) {
    return status >= 200 && status < 300;
  },
  maxRedirects: 5
});
http.interceptors.request.use(config => {
  //config.headers['token'] = Vue.cookie.get('token') // 请求头带上token
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * 响应拦截
 */
http.interceptors.response.use(response => {
  return response.data
}, error => {
  console.log(error)
  return Promise.reject(error)
})

/**
 * 请求地址处理
 * @param {*} url 接口地址
 */
http.adornUrl = (url) => {
  // 非生产环境 && 开启代理, 接口前缀统一使用[/proxyApi/]前缀做代理拦截!
  return (process.env.NODE_ENV !== 'production' && process.env.OPEN_PROXY ? '/proxyApi/' : window.SITE_CONFIG.baseUrl) + url
}

/**
 * get请求参数处理
 * @param {*} params 参数对象
 * @param {*} openDefultParams 是否开启默认参数?
 */
http.adornParams = (params = {}, openDefultParams = true) => {
  var defaults = {
    '_t': new Date().getTime()
  }
  return openDefultParams ? merge(defaults, params) : params
}

/**
 * post请求数据处理
 * @param {*} data 数据对象
 * @param {*} openDefultdata 是否开启默认数据?
 * @param {*} contentType 数据格式
 *  json: 'application/json; charset=utf-8'
 *  form: 'application/x-www-form-urlencoded; charset=utf-8'
 */
http.adornData = (data = {}, openDefultdata = true, contentType = 'form') => {
  var defaults = {
    '_t': new Date().getTime()
  }
  data = openDefultdata ? merge(defaults, data) : data
  return contentType === 'json' ? JSON.stringify(data) : qs.stringify(data)
}
export default http
