import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Main',
  component: require('@/views/main').default,
  children: [
    {
      path:'/',
      redirect: '/music'
    },
    {
      path: '/music',
      component: require('@/pages/music/index').default,
      children:[
        {
          path: '/music/list',
          component: require('@/pages/music/list/index').default,
        },
        {
          path: '/music/mv',
          component: require('@/pages/music/mv/index').default,
        },
        {
          path: '/music/radio',
          component: require('@/pages/music/radio/index').default,
        },
        {
          path: '/music/singer',
          component: require('@/pages/music/singer/index').default,
        },
        {
          path:'/music',
          redirect: '/music/list'
        }
      ]
    },
    {
      path: '/personal',
      component: require('@/pages/personal/index').default,
      children:[
        {
          path: '/personal/love',
          component: require('@/pages/personal/love/index').default,
        },
        {
          path: '/personal/download',
          component: require('@/pages/personal/download/index').default,
        },
        {
          path: '/personal/history',
          component: require('@/pages/personal/history/index').default,
        },
        {
          path: '/personal/try',
          component: require('@/pages/personal/try/index').default,
        },
        {
          path:'/personal',
          redirect: '/personal/love'
        }
      ]
    },
    {
      path: '/search:key',
      component: require('@/pages/searchpage/index').default,
    }
  ]
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
