<template>
  <Nicolas />
  <Florent />
</template>

<script>
import Nicolas from './components/Nicolas.vue'
import Florent from './components/Florent.vue'

export default {
  name: 'App',
  components: {
    Nicolas,
    Florent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
