import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import App from './App.vue'
import './lib/css/main.css'
import './lib/css/font.css'
import router from './router'
import './lib/css/animate.css'


Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    indexRow: 10,
    indexURL: "/book/index/",
    htmlBookURL: "/book/htmlbook/",
    mdBookURL: "/book/mdbook/",
    excerpt: "/book/excerpt/",
    tagIndexURL: "/book/index/tags_index.json",
    categoriesIndexURL: "/book/index/categories_index.json",
    tagsURL: "/book/tags.json",
    categoriesURL: "/book/categories.json",
    infoURL: "/book/info.json"
  },
  mutations: {}
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
