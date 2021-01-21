import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

// const proceed = {
//   install(){
//     alert('Hello')
//   }
// }
// Vue.use(proceed)
// Vue.use执行install方法
Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state:{
    count:0,
    num:100,
    buyNum:0
  },
  mutations:{
    increment(state){
      state.count++
    },
    reduce(state){
      state.num--;
    },
    doubleReduce(state){
      state.num-=2
    },
    buy(state,n){
      if(n>100){
        n=100;
      }
      if(n<0){
        n=0;
      }
      state.num-=n;
    }
  },
  actions:{
    increment2(action){
      setTimeout(() => {
        action.commit('increment')
      },1000)
    },
    doubleReduce2(action){
      setTimeout(() => {
        action.commit('doubleReduce')
      },1000)
    }
  },
  getters:{
    doubleCount(state){
      return state.count*2;
    },
    sale(state){
      return 100-state.num;
    }
  }
})

new Vue({
  // ES6property对象的简写
  store,
  render: h => h(App),
}).$mount('#app')
