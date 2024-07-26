import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/NenDev/HomeView.vue'
import AboutView from '@/views/NenDev/AboutView.vue'
import EducationView from '@/views/NenDev/EducationView.vue'
import ProjectsView from '@/views/NenDev/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/education',
      name: 'education',
      component: EducationView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
  ]
})

export default router
