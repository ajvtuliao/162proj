import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import LoginBar from '../components/LoginBar.vue'
import Home from '../views/Home.vue'
import UserBar from '../components/UserBar.vue'
import Admin from '../views/Admin.vue'
import AdminBar from '../components/AdminBar.vue'
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
  },
  {
    path: '/user',
    component: Home,
    children: [
      {
        path: '',
        component: UserBar
      }
    ]
  },
  {
    path: '/admin',
    component: Admin,
    children: [
      {
        path: '',
        component: AdminBar
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
});
export default router
