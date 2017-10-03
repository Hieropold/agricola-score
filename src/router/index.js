import Vue from 'vue'
import Router from 'vue-router'
import Score from '@/components/Score'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Score',
      component: Score
    }
  ]
})
