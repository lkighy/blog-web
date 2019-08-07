import Vue from 'vue'
import App from './App.vue'
import './lib/css/main.css'
import './lib/css/font.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
