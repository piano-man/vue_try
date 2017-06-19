import Vue from 'vue'
import vuerouter from 'vue-router'
import App from './App.vue'
import Message from './Message.vue'
import Users from './Users.vue'
import Home from './Home.vue'
Vue.use(vuerouter)
Vue.component('app-message',Message)
const routes = [
  {path:'/users/:teamId',component: Users},
  {path:'/home',component: Home}
]

const router = new vuerouter({
  routes

})
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
