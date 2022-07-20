import { createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue';
import Auth from '@/views/Auth.vue';
import store from '../store';
//import Help from '@/views/Help.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/help',
    name: 'Help',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Help.vue'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    meta: {
      layout: 'auth',
      auth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const requireAuth = to.meta.auth;
  if(requireAuth && store.getters['authModule/isAuthenticated']){
    next();
  } else if(requireAuth && !store.getters['authModule/isAuthenticated']){
    next('/auth?message=auth')
  } else {
    next()
  }
})


export default router
