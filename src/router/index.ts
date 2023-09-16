import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/LandingPage/HomeView.vue'
import AboutView from '@/views/LandingPage/AboutView.vue'
import PortfolioView from '@/views/LandingPage/PortfolioView.vue'
import ContactView from '@/views/LandingPage/ContactView.vue'
import DashboardView from '@/views/AdminPage/DashboardView.vue'
import UserView from '@/views/AdminPage/UserView.vue'
import SpecialtiesView from '@/views/AdminPage/SpecialtiesView.vue'

export const paths = {
  dashboard: {
    url: '/dashboard',
    name: 'Dashboard',
  },
  user: {
    url: '/user',
    name: 'User',
  },
  specialties: {
    url: '/specialties',
    name: 'Specialties',
  },
};


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'Home' },
      children: [
        {
          path: '/home',
          name: 'Home',
          component: HomeView
        },
        {
          path: '/about',
          name: 'About',
          component: AboutView
        },
        {
          path: '/portfolio',
          name: 'Portfolio',
          component: PortfolioView
        },
        {
          path: '/contact',
          name: 'Contact',
          component: ContactView
        }
      ],
    },
    {
      path: paths.dashboard.url,
      redirect: { name: paths.dashboard.name },
      children: [
        {
          path: paths.dashboard.url,
          name: paths.dashboard.name,
          component: DashboardView,
          meta: { requiresAuth: true },
        },
        {
          path: paths.user.url,
          name: paths.user.name,
          component: UserView,
          meta: { requiresAuth: true },
        },
        {
          path: paths.specialties.url,
          name: paths.specialties.name,
          component: SpecialtiesView,
          meta: { requiresAuth: true },
        },
      ],
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated) {
      next();
    } else {
      next('/home');
    }
  } else {
    next();
  }
});

export default router
