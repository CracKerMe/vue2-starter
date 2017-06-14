<template>
  <div>
    <p>这是来自父级的--{{ dataFromPar }}</p>
  </div>
</template>
<style>
</style>
<script>
  export default {
    name: 'children',
    props: [
      'dataFromPar'
    ]
  }
</script>
