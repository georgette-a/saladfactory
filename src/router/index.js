import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'/dashboard',
        component:() => import(/*webpack chunk name: dashhome */ '../components/DashHome')
      },
      {
        path:'/dashmenu',
        component:() => import(/*webpack chunk name: dashmenu*/ '../components/DashMenu'),
        children:[
          {
            path:'/dashmenu/breakfastmenu',
            component:() => import(/*webpack chunk name: dashmenu*/ '../components/BreakfastMenu'),
          },
          {
            path:'/dashmenu/saladmenu',
            component:() => import(/*webpack chunk name: dashmenu*/ '../components/BreakfastMenu'),
          },
          {
            path:'/dashmenu/dessertmenu',
            component:() => import(/*webpack chunk name: dashmenu*/ '../components/BreakfastMenu'),
          }
          

        ],
      },
    ]
    
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
