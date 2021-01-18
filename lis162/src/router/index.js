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

// CS LIB 

// const routes = [
//   {
//     path: '',
//     name: 'Login',
//     component: () => import('../views/Login.vue'),

//   },

//   {
//     path: '/book/:id',
//     name: 'Book',
//     component: () => import('../views/Book.vue'),
//     props: true,
//   },

//   {
//     path: '/account-management',
//     name: 'invalid',
//     component: () => import('../views/Invalid.vue'),
//     meta: {
//       auth: true
//     },
//     beforeEnter: async (to, from, next) => {
//       firebase.auth()?.currentUser?.getIdTokenResult()
//         .then((tokenResult) => {
//           if (tokenResult.claims.valid == true) {
//             return next({
//               path: '/user/home'
//             });
//           } else {
//             return next();
//           }
//         })
//     },
//   },
//   {
//     path: '/results',
//     component: () => import('../components/Results.vue'),
//     name: 'Results',
//     meta: {
//       auth: true
//     },
//     children:
//       [
//         {
//           path: 'search',
//           name: 'Search',
//           component: () => import('../views/Search.vue')
//         },
        
//       ],
//   },
//   {
//     path: '/user',
//     component: () => import('../components/Navbar.vue'),
//     name: 'Navigation',
//     meta: {
//       auth: true
//     },
//     children:
//       [
//         {
//           path: 'home',
//           name: 'Home',
//           component: () => import('../views/Home.vue'),
//         },
//         {
//           path: 'shelf',
//           name: 'Shelf',
//           component: () => import('../views/Shelf.vue')
//         },
//         {
//           path: 'shelf-item/:id',
//           name: 'Shelf-item',
//           component: () => import('../views/ShelfItem.vue')
//         },
//         {
//           path: 'profile',
//           name: 'Profile',
//           component: () => import('../views/Profile.vue')
//         },
//         {
//           path: 'syllabi/:slug',
//           name: 'Syllabi',
//           component: () => import('../views/Syllabi.vue')
//         },
//         {
//           path: 'subject/:slug',
//           name: 'Subject',
//           component: () => import('../views/Subject.vue')
//         },
//       ],
//   },
//   {
//     path: '/admin',
//     component: () => import('../components/Admin.vue'),
//     name: 'Admin',
//     children:
//       [
//         {
//           path: 'dashboard',
//           name: 'AdminDashboard',
//           component: () => import('../views/AdminDashboard.vue'),
//           meta: { admin: true },
//         },
//         {
//           path: 'edit',
//           name: 'Edit',
//           component: () => import('../views/Edit.vue')
//         },
//         {
//           path: 'books',
//           name: 'ManageBooks',
//           component: () => import('../views/ManageBooks.vue')
//         },
//         {
//           path: 'edit-book/:id',
//           name: 'EditBook',
//           component: () => import('../views/EditBook.vue'),
//           props: true,
//         },
//         {
//           path: 'users',
//           name: 'ManageUsers',
//           component: () => import('../views/ManageUsers.vue')
//         },
//         {
//           path: 'notifications',
//           name: 'Notifications',
//           component: () => import('../views/Notifications.vue')
//         }
//       ],
//     // meta: {
//     //   auth: true
//     // },
//     // beforeEnter: async (to, from, next) => {
//     //     let claims = firebase.auth()?.currentUser?.getIdTokenResult();

//     //       if (claims?.admin) {
//     //           return next();   
//     //       }else {
//     //           return next({
//     //               path: '/user/home'
//     //           });
//     //       } 

//     // }
//   }
// ]
// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// });


// router.beforeEach((to, from, next) => {
//   firebase.auth().onAuthStateChanged(userAuth => {
//     if (userAuth) {
//       next();

//     } else {
//       if (to.matched.some(record => record.meta.auth)) {
//         next({
//           path: '/',
//         })
//       } else {
//         next()
//       }
//     }

//   })

//   next()

// })

// export default router