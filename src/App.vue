<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">首页</router-link> |
      <router-link to="/hi">Hi页面</router-link> |
      <router-link to="/hi/hi1">-Hi页面1</router-link> |
      <router-link to="/hi/hi2">-Hi页面2</router-link>
      <router-link to="/goHome">goHome</router-link>
      <router-link to="/count">goCount</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <router-view style="float: left;height: 300px;width: 30%;background-color: gray" name="left"></router-view>
    <router-view style="float: right;height: 300px;width: 30%;background-color: #e4393c" name="right"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
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
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity 1s;
  }
.fade-leave{
  opacity: 1;
}
.fade-eave-active{
  opacity: 0;
  transition: opacity 1s;
}
</style>
