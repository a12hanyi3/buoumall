import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import TodayLook from'@/components/todaylook'
import Shop from '@/components/shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/todaylook',
    	component: TodayLook
    },
    {
    	path: '/shop',
    	component: Shop
    }

  ]
})
