<template>
  <div id="app">
    <List msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import List from './components/List.vue'

export default {
  name: 'App',
  components: {
    List
  }
}
</script>

<style lang="scss">
#app {
  font-family: Spartan, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $cyan;
  margin-top: 60px;
  background-color: $lightGrayishCyan;
  height: 100vh;
}
</style>
