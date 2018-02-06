<template>
  <div>
    <h2>{{msg}}</h2>
    <hr/>
    <h3>{{count}}</h3>
    <p>
      <button @click="addAction(5)">+</button>
      <button @click="reduceAction">-</button>
    </p>
  </div>
</template>
<script>
  import store from '../vuex/store'
  import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
  export default{
    data(){
      return{
        msg:'Hello Vuex',

      }
    },
    computed:{
      ...mapState(["count"])
      //...mapGetters(["count"])
    },
    methods:{
      ...mapMutations(['add','reduce']),
      ...mapActions(['addAction','reduceAction'])
    },
    store

  }
</script>
