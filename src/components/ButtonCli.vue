<template>
  <div>
    <button @click="increment">{{ counter }}</button>
  </div>
</template>
<style>
</style>
<script>
  export default {
    name: 'buttonCli',
    data () {
      return {
        counter: 0
      }
    },
    methods: {
      increment: function () {
        this.counter += 1
        this.$emit('increment')
      }
    }
  }
</script>
