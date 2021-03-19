import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
    state:{
        user:{
            email: null,
            password: null,
            token: null
            
        },

    },
    getters:{
        isValidUser: state =>{
            return (state.user.token) ? true: false
        },
        getAccountInfo: state => {
            return state.user.email
        },
        getToken: state => {
            return state.user.token
        }

    },
    mutations:{
        loginUser(state, {email, password, token}){
            state.user.token = token
            state.user.email = email
            state.user.password = password
        },
        logoutUser(state,{token}){
            state.user.token = token
        }

    }
})