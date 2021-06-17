/* eslint-disable prettier/prettier */
import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/views/Home'
import About from '@/views/exAbout'
import exError404 from "@/views/exError404"

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: "home",
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '*',
      name: "exError404",
      component: exError404,
    }

  ]
})