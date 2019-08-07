import Vue from 'vue'
import VueRouter from 'vue-router'
import sectionTemp from './components/section.vue'
import articleTemp from './components/article.vue'

Vue.use(VueRouter)

 var router = new VueRouter ({
  routes: [{
      path: '/',
      component: sectionTemp,
    },{
      path: '/article/:id',
      component: articleTemp
    }]
})

export default router