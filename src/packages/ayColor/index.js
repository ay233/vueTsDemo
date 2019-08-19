// 导入组件，组件必须声明 name
import ayColor from 'components/color.vue';

// 为组件添加 install 方法，用于按需引入
ayColor.install = function (Vue,options) {
    Vue.component(ayColor.name, ayColor)
}

export default ayColor