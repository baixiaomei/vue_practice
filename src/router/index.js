import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import code from '@/components/code'
import code1 from '@/components/code1'
import drawback from '@/components/drawback'
import radio from '@/components/radio'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    }, {
      path: '/code',
      name: 'code',
      component: code
    }, {
      path: '/code1',
      name: 'code1',
      component: code1
    }, {
      path: '/index',
      name: 'index',
      component: index
    }, {
      path: '/drawback',
      name: 'drawback',
      component: drawback
    }, {
      path: '/radio',
      name: 'radio',
      component: radio
    }
  ]
})
