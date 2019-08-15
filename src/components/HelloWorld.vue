<template>
    <div class="hello">
        <h1>传值数据：{{ msg }}</h1>
        <h2>{{msg1+someValue}}</h2>
        <h3>{{computedMsg}}</h3>
        <el-input v-model="child" placeholder="请输入内容"></el-input>
        <router-link to="/">Home</router-link>
        <router-link to="/about">about</router-link>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
    @Prop() private msg!: string
    @Prop() propC !: string 
    msg1 = 'data数据'
    child = '111'
    someValue: any = "this is a string";
    mounted() {
        this.greet();
        this.$message({
            message: 'app 启动成功',
            type: 'success'
        })
    }
    get computedMsg():string {
        return '我是计算属性！！';
    }
    // 方法
    greet() {
        console.log('greeting: ' + this.msg)
    }
    @Watch('child')
    onChildChanged(val: string, oldVal: string) {
        console.log(val, oldVal, '监听数据变化')
    }
    @Watch('$route')  
    onChildChanged1(val: string, oldVal: string) {
        console.log(val, oldVal, '监听数据变化')
    }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
    padding-right: 20px;
}
</style>