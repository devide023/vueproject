import Vue from 'vue'
import Router from 'vue-router'
import systemlogin from '@/components/Login/systemlogin';
import mainlayout from '@/components/main/layout'
import userlist from '@/components/user/userlist'
import rolelist from '@/components/role/rolelist'
import menulist from '@/components/menu/menulist';
Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: systemlogin,
      meta:{
        requireAuth:true
      }
    },
    {
      path:'/main',
      name:'main',
      component:mainlayout,
      children:[
        {
          path:'usermgr',
          name:'usermgr',
          children:[{
            path:'index',
            name:'userindex',
            component:userlist,
            meta:{
              requireAuth:true
            }
          }]
        },
        {
          path:'rolemgr',
          name:'rolemgr',
          children:[{
            path:'index',
            name:'roleindex',
            component:rolelist,
            meta:{
              requireAuth:true
            }
          }]
        },
        {
          path:'menumgr',
          name:'menumgr',
          children:[{
            path:'index',
            name:'menuindex',
            component:menulist,
            meta:{
              requireAuth:true
            }
          }]
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
