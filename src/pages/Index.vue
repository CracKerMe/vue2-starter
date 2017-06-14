<template>
  <div>
    <img src="../assets/logo.png">
    <input type="button" @click="fetchData" :value="btnVal">
    <ul>
      <li v-for="(item,index) in ListArr">
        {{index}}--{{item.name}}
      </li>
      <p v-if="loading">Loading</p>
    </ul>
  </div>
</template>
<style scoped>
  div{
    max-height: 800px;
    overflow-y: auto;
    background-image: url('../assets/banner.jpg');
  }
  img{
    display: block;
    margin: 0 auto; 
  }
  input{
    display: block;
    margin: 0 auto;
    padding: 8px 12px;
    background: #fff;
    border: 1px solid rgba(255,255,255,.4);
    outline-style: none;
    transition: all ease 0.4s;
    background: transparent;
    color: #fff;
  }
  input:hover{
    border-radius: 35px;
  }
  li{
    width: 100%;
    height: 30px;
    line-height: 30px;
    color: #fff;
    text-align: center;
  }
</style>
<script>
  import axios from 'axios'
  export default {
    name: 'index',
    data () {
      return {
        btnVal: '点击加载',
        ListArr: [],
        loading: false
      }
    },
    created () {
      this.loadingList()
    },
    methods: {
      loadingList: function () {
        var self = this
        this.loading = true
        return axios.get('https://api.github.com/search/code?q=addClass+in:file+language:js+repo:jquery/jquery', {
          params: {}
        })
        .then(function (response) {
          self.loading = false
          self.ListArr = response.data.items
        })
      },
      fetchData: function () {
        var self = this
        this.loading = true
        return axios.get('https://api.github.com/search/code?q=addClass+in:file+language:js+repo:jquery/jquery', {
          params: {}
        })
        .then(function (response) {
          self.loading = false
          self.ListArr = self.ListArr.concat(response.data.items)
        })
        .catch(function (error) {
          console.log(error)
        })
      }
    }
  }
</script>
