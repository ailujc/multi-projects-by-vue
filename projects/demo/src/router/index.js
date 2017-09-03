import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

const Hello = () => import(/* webpackChunkName: "hello" */ '@/components/Hello')
const Hi = () => import(/* webpackChunkName: "hi" */ '@/components/Hi')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/hi',
      name: 'Hi',
      component: Hi
    }
  ]
})
