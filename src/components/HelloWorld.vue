<template>
  <div class="hello">
    <div>
      <h1>{{ msg }}</h1>
      <button @click="getInfo">get请求</button>
      <button @click="postInfo">post请求</button>  
      <button @click="add">+1</button>
      <button @click="minus">-1</button>
    </div>
    <router-link :to="{name:'page'}">子组件page</router-link>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    // this.postInfo()
  },
  methods:{
    getInfo(){
      this.$http.get('https://api.wulv5.com/music/personalized').then(res=>{
        console.log('get请求')
        console.log(res.body)
      })
    },
    postInfo(){
      this.$http.post('https://api.wulv5.com/music/personalized',{},{emulateJSON:true}).then(res=>{
        console.log('post请求')
        console.log(res.body)
      })
    },
    add(){
      this.$store.commit('add')
    },
    minus(){
      this.$store.commit('minus')
    }
  }
}
</script>

<style scoped lang="scss">
div{
  h1{
    color:red;
    font-size: 34px;
  }
}
</style>
