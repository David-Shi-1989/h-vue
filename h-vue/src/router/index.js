import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sidebar from '@/demo/menu/siderbar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/menu/side-bar',
      name: 'menu_sidebar',
      component: Sidebar
    }
  ]
})
