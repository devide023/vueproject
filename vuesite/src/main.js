// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import Mtils from 'mtils'
import Qs from 'qs';
Vue.use(ElementUI)
let loadingstatus
let axiosinstance = axios.create({
  baseURL: 'http://127.0.0.1:9000/api/',
  transformRequest: [function (data) {
    return Qs.stringify(data)
  }],
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})
axios.interceptors.request.use((config) => {
  console.log('请求开始')
  console.log(config)
  loadingstatus = ElementUI.Loading.service({
    fullscreen: true,
    lock: true,
    text: '数据加载中',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'})
  config.headers['staffid'] = 0
  config.headers['timestamp'] = new Date().getTime()
  config.headers['nonce'] = Mtils.security.random(6)
  config.headers['signature'] = Mtils.security.hex_md5('123456')
  if (config.method === 'post') {
    config.data = {
      ...config.data
    }
  } else if (config.method === 'get') {
    config.params = {
      ...config.params
    }
  }
  console.log('请求结束')
  return config
}, (error) => {
  loadingstatus.close()
  return Promise.reject(error)
})
// 返回状态判断
axios.interceptors.response.use((res) => {
  loadingstatus.close()
  return res
}, (error) => {
  loadingstatus.close()
  return Promise.reject(error)
})
Vue.prototype.$axios = axiosinstance
/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
