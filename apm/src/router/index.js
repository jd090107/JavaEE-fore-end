import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'
import New from '../components/New'
import Result from "../components/Result"
import Logup from "../views/Logup"
import User from "../views/User"
import ModifyPassword from "../components/ModofyPassword"
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/logup',
      name:'Logup',
      component:Logup
    },
    {
      path:'/user',
      name:'User',
      component:User
    },
    {
      path:'/modifyPassword',
      name:'ModifyPassword',
      component:ModifyPassword
    },
    {
      path:'/home',
      name:'Home',
      redirect:'/home/new',
      component:Home,
      children:[
        {
          path:'new',
          name:'New',
          component:New
        },
        {
          path:'result',
          name:'Result',
          component:Result
        }
      ]
    }
  ]
})
