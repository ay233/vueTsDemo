<template>
  <div id="app">
    <hea-component msg="Welcome to Your Vue.js + TS App"/>
    <router-view />
  </div>
</template>

<script>
import heaComponent from './components/headCP.vue'
export default {
  name: 'app',
  components: {
    heaComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
