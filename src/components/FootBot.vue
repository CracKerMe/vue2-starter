<template>
  <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/news">News</router-link>
    </li>
    <li>
      <router-link to="/about">About</router-link>
    </li>
  </ul>
</template>
<style scoped>
  ul{
    width: 100%;
    height: 60px;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 2;
    background: #ddd;
  }
  li{
    width: 33.33%;
    height: 60px;
    float: left;
    line-height: 60px;
    text-align: center;
  }
  a{
    text-decoration: none;
    color: #333;
  }
</style>
<script>
  export default {}
</script>
