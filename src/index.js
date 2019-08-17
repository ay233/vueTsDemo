import color from './components/color';  //引入组件
const ayColor = {
	// 详情查看https://cn.vuejs.org/v2/guide/plugins.html
  install (Vue, options) {
    Vue.component('ay-color', color);//全局组件
  }
}
export default ayColor; //导出
