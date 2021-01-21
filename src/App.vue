<template>
  <div id="app">
    <span>小米9</span>
    数量：{{num}}
    已售：{{$store.getters.sale}}
    <br>
    <button :disabled="!num" @click="$store.commit('reduce')">购买1个</button>
    <button :disabled="!num" @click="$store.commit('doubleReduce')">购买2个</button>
    <button :disabled="!num" @click="$store.dispatch('doubleReduce2')">网络卡，但还是要买，买双倍！</button>
    <p>
      <input type="text" v-model="$store.state.buyNum">
      <button :disabled="!num" @click="$store.commit('buy',$store.state.buyNum)">买</button>
    </p>
    <hr>
    <p>{{count}}</p>
    <p>{{$store.getters.doubleCount}}</p>
    <p>
      <button @click="$store.commit('increment')">加一</button>
      <button @click="$store.dispatch('increment2')">延时加一</button>
    </p>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed:{
    count(){
      return this.$store.state.count
    },
    num(){
      return this.$store.state.num
    }
  }
}
</script>

<style>
</style>
