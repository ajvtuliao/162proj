import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from "./store";
import axios from "axios"

axios.defaults.withCredentials = true;
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.path !== '/' && store.state.isAuthenticated===false) next('/')
  else if (to.path === '/' && store.state.isAuthenticated===true) {
    if (store.state.isAdmin) next('/admin')
    else next('/user')
  }
  else next()
})


new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
