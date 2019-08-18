import color from './components/color'; //引入组件
const ayColor = {
    install(Vue, options) {
        Vue.component('ay-color', color); 
    }
};
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(ayColor);
}
export default ayColor; 