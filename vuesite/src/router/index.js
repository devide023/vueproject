import Vue from 'vue'
import Router from 'vue-router'
import systemlogin from '../components/Login/systemlogin.vue';
Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: systemlogin
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (localStorage.getItem('access_token')) {
      next()
    }
  } else {
    next()
  }
})
export default router
