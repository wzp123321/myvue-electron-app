import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// 引入公共样式
import '@/assets/css/common.css'
// 引入iconfont
import '@/assets/css/iconfont.css'
// 引入element-ui
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
