import Vue from 'vue'
import VueRouter from 'vue-router'
import sectionTemp from './components/section.vue'
import articleTemp from './components/article.vue'
import categoriesTemp from './components/categories.vue'

Vue.use(VueRouter)

 var router = new VueRouter ({
  routes: [{
      path: '/article/:id',
      component: articleTemp
    },{
      path: '/categories',
      component: categoriesTemp
    },{
      path: '/',
      component: sectionTemp,
    }]
})

export default router