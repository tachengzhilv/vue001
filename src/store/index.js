import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        data: 999
    },
    mutations:{
        add(state){
            console.log(state.data++)
        },
        minus(state){
            console.log(state.data--)
        }
    },
    getters:{
        increment(state){
            console.log(state.data+1000)
        }
    }
})