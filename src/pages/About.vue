<template>
  <div>
    <p>来自 子组件的 --- {{ total }}</p>
    <ButtonCli v-on:increment="incrementTotal"></ButtonCli>
  </div>
</template>
<style>
</style>
<script>
  import ButtonCli from '../components/ButtonCli.vue'
  export default {
    name: 'about',
    data () {
      return {
        total: 0
      }
    },
    methods: {
      incrementTotal: function () {
        this.total += 1
      }
    },
    components: {
      ButtonCli
    }
  }
</script>
