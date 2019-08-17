<template>
    <div class="hello">
        <router-link to="/"> 组件测试</router-link>
        <router-link to="/about">about</router-link>
        <router-link to="/color">color</router-link>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
    @Prop() private msg!: string
    @Prop() propC!: string
    msg1 :string= 'data数据'
    child :string = '111'
    someValue: any = [1111,222];
    mounted() {
        this.greet(this.msg);
    }
    // 方法
    greet(a: string): void {
        console.log('greeting: ' + a)
    }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
a {
    color: #42b983;
    padding-right: 20px;
}
</style>