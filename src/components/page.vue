<template>
    <div>
        <div @click="goHome">返回首页</div>
        <h1>这里是子组件</h1>
        <button @click="incre">+1000不改变原有data值</button>
        <router-link :to="{name:'son'}">加载son组件</router-link>
        <router-view></router-view>
    </div>    
</template>

<script>
export default {
    methods:{
        incre(){
            this.$store.getters.increment
        },
        goHome(){
            this.$router.push({name:'HelloWorld'})
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
