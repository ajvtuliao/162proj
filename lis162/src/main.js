import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from "./store";
import axios from "axios"

axios.defaults.withCredentials = true;
Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   if (to.path !== '/login' && store.state.isAdmin===false) next({ path: '/user' })
//   else if (to.path !== '/login' && store.state.isAdmin===true) next({ name: '/admin' })
//   else next()
// })


new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
