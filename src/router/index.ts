import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SelectCruiseView from '@/views/SelectCruiseView.vue'
import OurCruisesView from '@/views/OurCruisesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/planning',
      name: 'planning',
      component: SelectCruiseView,
    },
    {
      path: '/nuestros-cruceros',
      name: 'our-cruises',
      component: OurCruisesView,
    },
  ],
})

export default router
