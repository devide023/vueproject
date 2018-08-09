import Vue from 'vue'
import Router from 'vue-router'
import systemlogin from '@/components/Login/systemlogin';
import mainlayout from '@/components/main/layout'
Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: systemlogin
    },
    {
      path:'/main',
      name:'main',
      component:mainlayout,
      children:[
        {
          path:'usermgr',
          name:'usermgr',
          component:() => import('@/components/user/userlist'),
          meta:{
            requireAuth:true
          }
        },
        {
          path:'rolemgr',
          name:'rolemgr',
          component:()=>import('@/components/role/rolelist'),
          meta:{
            requireAuth:true
          }
        }
      ]
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
