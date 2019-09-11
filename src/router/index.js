import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login.vue'
import Signup from '@/components/Signup/Signup.vue'
import Chat from '@/components/Chat/Chat.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/chat/:id?',
      name: 'Chat',
      component: Chat
    }
  ],
  mode: 'history'
})
