
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
  export default {
    name: 'hi',
    data () {
      return {
        msg: 'Hi, I am Hi1!'
      }
    },
    beforeRouteEnter:(to,from,next)=>{
      console.log("准备进入路由模板");
      next();
    },
    beforeRouteLeave: (to, from, next) => {
      console.log("准备离开路由模板");
      next();
    }
  }
</script>
<style scoped>

</style>
