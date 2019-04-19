import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import page from '@/components/page'
import son from '@/components/son'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/page',
      name: 'page',
      component: page,
      children:[
        {
          path: 'son',
          name: 'son',
          component: son
        }
      ]
    }
    // ,
    // linkActiveClass:''
  ]
})
