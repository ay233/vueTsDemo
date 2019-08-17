<template>
    <div class="color">
        <div class="colorItem" v-show='show'>
            <div class="cc" :style='{background: item}' v-for='item in colorArr' @click='setColor(item)'></div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
    @Prop({ default: ()=>['red','yellow','pink','white','black','orange'] }) colorArr!:[]
    @Prop({default:false}) show!: boolean
    actcolor:string='';
    setColor(item:string){
        this.actcolor=item;
    }
    @Watch('actcolor')
    onChildChanged(val: string, oldVal: string) {
        this.$emit('getColor',{val, oldVal});
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.color{
    .colorItem{
        .cc{
            width: 30px;
            height: 30px;
            float: left;
            margin-right: 10px;
            border-radius: 5px;
            cursor: pointer;
            border: 1px solid gray;
        }
        .cc:hover{
            opacity: .8;
        }
    }
}
</style>