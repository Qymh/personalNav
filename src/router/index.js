import Vue from 'vue'
import Router from 'vue-router'
import Nav from '../page/Nav.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes:[
    {
      path:'/',
      component:Nav
    }
  ]
})
