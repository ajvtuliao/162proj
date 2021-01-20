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
        isAdmin: false,
        member_skill_id: 1,
        member_id: 1,
        user_id: 1
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
        },
        add_member_skill_id(state) {
            state.member_skill_id+=1;
        },
        add_member_id(state) {
            state.member_id+=1;
        },
        add_user_id(state) {
            state.user_id+=1;
        }

    },
    plugins: [vuexPersist.plugin]
});
export default store;
