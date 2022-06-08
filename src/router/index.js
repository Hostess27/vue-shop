import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: routes.name,
      component: () => import('@vue/page/MainPage.vue'),
      props: true,
    },
  ],
})
export default router
