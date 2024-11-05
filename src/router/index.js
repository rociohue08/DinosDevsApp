<<<<<<< HEAD
// router.js
import { createRouter, createWebHistory } from 'vue-router'
import DinoHome from '@/views/DinoHome.vue'
import DinoMenu from '@/views/DinoMenu.vue'
import DinoJuegos from '@/views/DinoJuegos.vue'
import DinoInformacion from '@/views/DinoInformacion.vue'
import RealidadAumentada from '@/views/RealidadAumentada.vue'
=======
import { createRouter, createWebHistory } from 'vue-router';
import DinoHome from '@/views/DinoHome.vue';
import DinoMenu from '@/views/DinoMenu.vue';
import DinoJuegos from '@/views/DinoJuegos.vue';
import DinoInformacion from '@/views/DinoInformacion.vue';
import RealidadAumentada from '@/views/RealidadAumentada.vue';
import { useAuthStore } from '../stores/auth';
>>>>>>> 76a4494177e8c86dceca107c080705cf4c606608

const routes = [
  { path: '/', component: DinoHome },
  { path: '/menu', component: DinoMenu },
<<<<<<< HEAD
  { path: '/juegos', component: DinoJuegos },
  { path: '/informacion', component: DinoInformacion },
  { path: '/realidad-aumentada', component: RealidadAumentada },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
=======
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
>>>>>>> 76a4494177e8c86dceca107c080705cf4c606608
