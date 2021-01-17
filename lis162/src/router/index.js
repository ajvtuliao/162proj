import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../components/LoginBar.vue'),
    children: [
      {
        path: 'login',
        name: '',
        component: () => import('../views/Login.vue'),
      }
    ]

  },
]

// const routes = [
//   {
//     path: '/',
//     name: 'Login',
//     component: Login
//   }
// ]
const router = new VueRouter({
  routes
});

export default router
