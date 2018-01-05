import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import TodayLook from'@/components/todayLook'
import Shop from '@/components/shop'
import Designer from '@/components/designer'
import Special from '@/components/special'
import Product from '@/components/product'
import Design from '@/components/design'
import Look from '@/components/look'
import Login from '@/components/login'


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
    },
    {
      path: '/design',
      component: Design
    },
    {
      path: '/designer/:id',
      componet: Designer,
    },
    {
      path: '/product/:id',
      component: Product,
    },
    {
      path: '/special/:id',
      component: Special,
    },
    {
      path: 'look/:id',
      component: Look,
    },
    {
      path: 'login',
      component: Login,
    },
    {
      path: '*',
      redirect: '/',
    },

  ]
})
