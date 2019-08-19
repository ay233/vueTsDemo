<template>
    <div class="home">
        <h1>ay-color组件测试！！</h1>
        <button @click='selColor'>点击选择颜色</button>
        <ay-color :colorArr=colorArr :show=show @getColor=getc></ay-color>
        <div class="showC" :style='{background: background}'></div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

interface Card {
    val: string;
    oldVal: string;
}

@Component
export default class Home extends Vue {
    colorArr :string[]= ['red', 'black', 'pink','yellow','#191970','#00008B','#00FFFF','#556B2F','#FFDAB9','#BC8F8F','#C0C0C0']
    show :boolean = true
    background :string= 'red';
    selColor() {
        this.show = !this.show;
    }
    getc(e: Card) {
        console.log(e, 'ooo');
        this.background = e.val;
    }
}
</script>
<style scoped lang="less">
.showC {
    height: 400px;
    border-radius: 2em 1em 4em / 0.5em 3em;
}
</style>