<template>
    <div>
        <h1>这里是son组件</h1>
        <button @click="goback">返回父组件</button>
        <router-link to="/">111</router-link>
        <router-link :to="{ name: 'HelloWorld', query: { id: '123' }}">HelloWorld</router-link>
    </div>
</template>

<script>
export default {
    methods:{
        goback(){
            this.$router.push({name:'page'})
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
