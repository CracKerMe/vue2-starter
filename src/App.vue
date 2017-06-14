<template>
  <div id="app">
    <router-view></router-view>
    <FootBot></FootBot>
  </div>
</template>

<script>
import FootBot from './components/FootBot.vue'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    FootBot
  }
}
</script>

<style>

</style>
