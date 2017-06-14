<template>
  <div>
    <p>{{ counter }}</p>
    <input type="button" @click="increment" :value="msg">
    <hr>
    <Children :dataFromPar="counter"></Children>
  </div>
</template>
<style>
</style>
<script>
  import Children from '../components/Children.vue'
  export default {
    name: 'News',
    data () {
      return {
        counter: 0,
        msg: 'Click Me'
      }
    },
    methods: {
      increment: function () {
        this.counter += 1
      }
    },
    components: {
      Children
    }
  }
</script>
