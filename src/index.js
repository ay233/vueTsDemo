import color from 'components/color';  //引入组件
import Vue from "vue";
const colorSelect = {
	// 详情查看https://cn.vuejs.org/v2/guide/plugins.html
  install (Vue, options) {
    Vue.component('ay-color', color);//全局组件
  }
}

export default colorSelect; //导出