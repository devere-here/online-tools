<template>
  <div id="app">
    <h1>Online Tools</h1>
    <button v-on:click="isMinifierVisible = !isMinifierVisible">Image Minifier</button>
    <ImageMinifier v-if="isMinifierVisible" />
  </div>
</template>

<script>
import ImageMinifier from './components/ImageMinifier.vue'

export default {
  name: 'app',
  components: {
    ImageMinifier
  },
  data: () => ({
    isMinifierVisible: false
  })
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
