<script lang="ts">
import Hi from './Hi.vue'
import Welcome from './Welcome'
import ExternalComp from './ExternalComp.vue'

export default {
  name: 'App',
  components: {
    Hi,
    Welcome,
    ExternalComp,
  },
}
</script>

<template>
  <div class="container">
    <div>
      <Hi />
      <Welcome />
      <ExternalComp />
      <!--  -->
      <!--  -->
      <!--  -->
      <p>Vite so awesome 🔥 .</p>
      <a href="https://github.com/laihaojie/vite-plugin-vue-inspector">Give me a star if it helps you 💗 .</a>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.container
  width: 100vw
  height: 100vh
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  display: flex
  align-items: center
  justify-content: center
p
  font-size: 18px
  color: #35495d
  cursor: pointer
</style>
