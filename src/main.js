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
// 注册自定义loading插件
import myLoading from '@/plugins/loading/index'

Vue.config.productionTip = false
Vue.use(myLoading)

const {
  remote
} = require('electron');
const {
  Menu
} = remote;
const createContextMenu = () => {
  const contextTemplate = [{
    label: 'Cut',
    role: 'cut'
  },
  {
    label: 'Copy',
    role: 'copy'
  }
  ];
  const contextMenu = Menu.buildFromTemplate(contextTemplate);
  return contextMenu;
}

window.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  const contextMenu = createContextMenu();
  contextMenu.popup({
    window: remote.getCurrentWindow()
  });
}, false);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
