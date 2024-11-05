import { createRouter, createWebHistory } from 'vue-router';
import DinoHome from '@/views/DinoHome.vue';
import DinoMenu from '@/views/DinoMenu.vue';
import DinoJuegos from '@/views/DinoJuegos.vue';
import DinoInformacion from '@/views/DinoInformacion.vue';
import RealidadAumentada from '@/views/RealidadAumentada.vue';
import { useAuthStore } from '../stores/auth';

const routes = [
  { path: '/', component: DinoHome },
  { path: '/menu', component: DinoMenu },
  { path: '/juegos', component: DinoJuegos, meta: { requiresAuth: true } },
  { path: '/informacion', component: DinoInformacion },
  { path: '/realidad-aumentada', component: RealidadAumentada, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  await authStore.checkAuth(); // Verificar autenticación antes de cada navegación

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export default router;
