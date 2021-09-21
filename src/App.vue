<template>
<div>
  <Nicolas />
  <Sacha />

</div>
</template>

<script>
import Nicolas from './components/Nicolas.vue'
import Sacha from './components/Sacha.vue'

export default {
  name: 'App',
  components: {
    Nicolas,
    Sacha
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
