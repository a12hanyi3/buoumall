import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import TodayLook from'@/components/todayLook'
import Shop from '@/components/shop'
import Designer from '@/components/designer'
import Special from '@/components/special'
import Product from '@/components/product'
// import Look from '@/components/look'

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
    // {
    //   path: 'look/:id',
    //   componet: Look,
    // },
    {
      path: '*',
      redirect: '/',
    },

  ]
})
