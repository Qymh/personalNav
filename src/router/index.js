import Vue from 'vue'
import Router from 'vue-router'
import Nav from '../page/Nav'

Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/',
      component:Nav
    }
  ]
})
