<template>
    <div class="color">
        <div class="colorItem" v-show='show'>
            <div class="cc" :style='{background: item}' v-for='item in colorArr' @click='setColor(item)'></div>
        </div>
    </div>
</template>
<script>
import heaComponent from './components/headCP.vue'
export default {
    name: 'app',
    data() {
        return {
            actcolor: ''
        }
    },
    methods: {
        onChildChanged(val, oldVal) {
            this.$emit('getColor', { val, oldVal });
        }
    },
    props: ['colorArr', 'show'],
    components: {
        heaComponent
    },
    watch: {
        'actcolor'(val, oldVal) {
            this.onChildChanged(val, oldVal);
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.color {
    .colorItem {
        .cc {
            width: 30px;
            height: 30px;
            float: left;
            margin: 10px 10px;
            border-radius: 5px;
            cursor: pointer;
            border: 1px solid gray;
        }

        .cc:hover {
            opacity: .8;
        }
    }
}
</style>