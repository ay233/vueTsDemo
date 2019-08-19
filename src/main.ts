import "./registerServiceWorker";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './plugins/element.js';
//通配css
import "normalize.css/normalize.css";
import '@/plugins/zepto.js';
// import axios from './utils/http.js';
import echarts from 'echarts';
import '@/permission';// permission control
// Vue.prototype.axios = axios;
Vue.prototype.$echarts = echarts;
const env = process.env;
//后台静态资源地址
Vue.prototype.imgbaseUrl = env.VUE_APP_imgServer;
//后台上传接口服务地址
Vue.prototype.uploadbaseUrl = env.VUE_APP_server;
//开发不显示提示
Vue.config.productionTip = false;
// 引入组件并注册

import ayColor from './packages/index.js'
// import ayColor from 'ay-color'
console.log(ayColor,'我是组件')
Vue.use(ayColor)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
