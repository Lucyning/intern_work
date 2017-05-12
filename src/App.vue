<template>
  <div id="app">
    <Navtab></Navtab>
    <router-view></router-view>
  </div>
</template>

<script>
import Navtab from './components/left-tag.vue'

export default {
  components: {
      Navtab
    },
}
</script>

<style>
@import './css/reset.css';
body {
  overflow: hidden;
  height: 100%;
}

#app {
  height: 100%;
  overflow: hidden;
}
</style>
