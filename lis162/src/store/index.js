import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
    key: 'my-app',
    storage: window.sessionStorage
})


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
    },
    plugins: [vuexPersist.plugin]
});
export default store;
