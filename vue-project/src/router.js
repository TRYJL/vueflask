import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginPage from './components/LoginPage.vue'
import RegisterPage from './components/RegisterPage.vue'
import HomePage from './components/HomePage.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/home', component: HomePage }
  ]
})
