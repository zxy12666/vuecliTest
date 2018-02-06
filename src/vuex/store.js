import Vue from 'vue';
import  Vuex from 'vuex';
Vue.use(Vuex);

const state={
  count:1
};
const mutations={
  add(state,n){
    state.count+=n;
  },
  reduce(state){
    state.count--
  }
};

const getters={
  count:(state)=>state.count+=100
}

const actions={
  addAction({commit},n){
    commit('add',n)
    setTimeout(()=>{commit('reduce')},5000)
    console.log('我比reduce先执行')
  },
  reduceAction({commit}){
    commit('reduce')
  }
};

export default new Vuex.Store({
    state,mutations,getters,actions
})
