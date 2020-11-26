import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Room from '../components/Room.vue'
import Result from '../components/Result.vue'
import singleResult from '../components/singleResult.vue'


Vue.use(Router)



export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/room',
      name: 'Room',
      component: Room
    },
    {
      path:'/result',
      name: 'Result',
      component: Result
    },
    {
      path:'/singleresult',
      name: 'singleResult',
      component: singleResult
    }

  ]
})

