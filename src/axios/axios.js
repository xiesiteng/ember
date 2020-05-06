import axios from "axios";
// import store from "../store";
// import qs from 'qs'
import router from '../router'
import Vue from 'vue'


let config = {
  timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}

if (process.env.NODE_ENV == 'development') {
  // dev开发环境
  config.baseURL = 'api'
} else if (process.env.NODE_ENV == 'production') {
  // build生产环境
  config.baseURL = 'http://wework.scember.com'
}


const _axios = axios.create(config)

// _axios.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded"
// _axios.defaults.headers.post['Content-Type'] = "application/json; charset=utf-8"
_axios.defaults.headers.common['token'] = localStorage.getItem('token')


_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (localStorage.getItem('token')) {
      config.headers.common['token'] = localStorage.getItem('token')
    }
    if (config.method == 'post') {
      // 可做字符串化传参数据
      // config.data = qs.stringify(config.data)
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)


let self = Vue.prototype

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    if (response.data.code == 0) {
      // 接口状态正常
      return Promise.resolve(response);
    } else if (response.data.code == -100) {
      self.$toast('登录已过期，请重新登录')
      localStorage.removeItem('token')
      router.replace(
        {
          path: '/wxLogin',
          query: { redirect: router.currentRoute.fullPath } // 登录成功后跳入浏览的当前页面
        }
      )

    } else if (response.data.code == 100) {
      // 接口状态异常
      self.$toast(response.data.msg)
      return Promise.resolve(response);
    } else{
      return Promise.reject(response);
    }
  },
  function (err) {
    self.$toast(err.msg)
    return Promise.reject(err)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    _axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    _axios.post(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}


export default _axios
