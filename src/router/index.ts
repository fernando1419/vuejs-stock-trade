import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../components/portfolio/Portfolio.vue'
import Stocks from '../components/stocks/Stocks.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/portfolio', name: 'portfolio', component: Portfolio },
  { path: '/stocks', name: 'stocks', component: Stocks }  
]

const router = new VueRouter({
  mode: 'history', // removes the '#' from the url.
  base: process.env.BASE_URL,
  routes
})

export default router // exports the router instance as a constant.
