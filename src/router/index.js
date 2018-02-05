import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/HelloWorld'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      components:{
        default: Hello,
        left:resolve => require(['../components/Left'], resolve),
        right:resolve => require(['../components/Right'], resolve)
      }
    },{
      path: '/count',
      component:resolve => require(['../components/Count'], resolve),
    },{
      path: '/zxy',
      name: 'Hello',
      components:{
        default: Hello,
        left:resolve => require(['../components/Right'], resolve),
        right:resolve => require(['../components/Left'], resolve)
      }
    },{
      path:'/hi',
      component:resolve => require(['../components/Hi'], resolve),
      children:[
        {path:'/',component:resolve => require(['../components/Hi'], resolve)},
        {path:'hi1',component: resolve => require(['../components/Hi1'], resolve)},
        {path:'hi2', component: resolve => require(['../components/Hi2'], resolve)},
      ]
    },{
      path:'/goHome',
      redirect:'/'
    }
  ]
})
