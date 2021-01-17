import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import LoginBar from '../components/LoginBar.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Login,
    children: [
      {
        path: '',
        component: LoginBar
      }
    ]
  }
]

const router = new VueRouter({
  routes
});
export default router
