import Vue from 'vue'
import Router from 'vue-router'
import Nav from '../page/Nav'

Vue.use(Router,{
  history:true
})

export default new Router({
  history:true,
  routes:[
    {
      path:'/',
      component:Nav
    }
  ]
})
