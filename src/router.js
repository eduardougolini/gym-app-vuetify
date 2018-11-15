import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import DefaultMenu from './views/DefaultMenu.vue'
import RegisterUser from './views/RegisterUser.vue'
import AddMeal from './views/AddMeal.vue'
import RoutineInfo from './views/RoutineInfo.vue'
import GraphicsView from  './views/GraphicsView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/default-menu',
      name: 'default-menu',
      component: DefaultMenu
    },
    {
      path: '/register-user',
      name: 'register-user',
      component: RegisterUser
    },
    {
      path: '/add-meal',
      name: 'add-meal',
      component: AddMeal
    },
    {
      path: '/routine-info',
      name: 'routine-info',
      component: RoutineInfo
    },
    {
      path: '/graphics-view',
      name: 'graphics-view',
      component: GraphicsView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})