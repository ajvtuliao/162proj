import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isAuthenticated: false,
        isAdmin: false
    },
    mutations: {
        authenticate (state) {
            state.isAuthenticated=true
        },
        logout (state) {
            state.isAuthenticated=false
        },
        isAdmin(state) {
            state.isAdmin = true
        },
        isUser(state) {
            state.isAdmin = false
        }
    }
});
export default store;
