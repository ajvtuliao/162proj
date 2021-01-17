import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue'),

  },
  {
    path: '/user',
    component: () => import('../components/Navbar.vue'),
    name: 'Navigation',
    meta: {
      auth: true
    },
    children:
      [
        {
          path: 'home',
          name: 'Home',
          component: () => import('../views/Home.vue'),
        },
      ],
  },
  {
    path: '/admin',
    component: () => import('../components/Navbar.vue'),
    name: 'Admin',
    children:
      [
        {
          path: 'admin',
          name: 'Admin',
          component: () => import('../views/Admin.vue'),
          meta: { admin: true },
        },
      ],
    // meta: {
    //   auth: true
    // },
    // beforeEnter: async (to, from, next) => {
    //     let claims = firebase.auth()?.currentUser?.getIdTokenResult();

    //       if (claims?.admin) {
    //           return next();   
    //       }else {
    //           return next({
    //               path: '/user/home'
    //           });
    //       } 

    // }
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
