// Composables
import user from '@/store/user'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import(/* webpackChunkName: "products" */ '@/views/ProductsView.vue'),
        meta: {
          guard: 'auth'
        }
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "cart" */ '@/views/CartView.vue'),
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/LoginView.vue'),
        meta: {
          guard: 'public'
        },
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "profile" */ '@/views/ProfileView.vue'),
        meta: {
          guard: 'auth'
        }
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(function (to, from, next) {
  const store = user()

  if (to.meta.guard === 'auth' && !store.isLoggedIn) {
    next('/login')
  }
  else if (to.meta.guard === 'public' && store.isLoggedIn) {
    next('/profile')
  }
  else
    next()
})

export default router
