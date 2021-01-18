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
            state.isAuthenticated=!state.isAuthenticated
        },
        checkIfAdmin(state) {
            state.isAdmin = !state.isAdmin
        }
    }
});
export default store;
