<template>
  <div id="app">
    <div class="top-design"></div>
    <List />
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
  color: $darkGrayishCyan;
  height: 100%;
  background-color: $lightGrayishCyan;
}

.top-design {
  width: 100%;
  background: url(../public/images/bg-header-mobile.svg) no-repeat top center;
  background-size: cover;
  height: 10rem;
  background-color: $desaturatedDarkCyan;
  margin-bottom: 3rem;

  @include respond(tab-port) {
    background: url(../public/images/bg-header-desktop.svg) no-repeat top center;
    background-color: $desaturatedDarkCyan;
  }
}
</style>
