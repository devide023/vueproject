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
  baseURL: 'http://192.168.0.207:9000/',
  transformRequest: [function (data) {
    return Qs.stringify(data);
  }],
  headers: {
    'Content-Type':'application/x-www-form-urlencoded'
  }
})
var ticket = localStorage.getItem("ticket");
axiosinstance.interceptors.request.use(config => {
  if (ticket) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = ticket;
  }
  return config
}, error => {
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
