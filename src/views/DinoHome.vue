<template>
  <div class="container">
    <h1>¡DinosDevs te da la bienvenida!</h1>
    <p>
      DinosDevs es una página interactiva diseñada especialmente para niños, donde la fascinante era de los dinosaurios cobra vida. Aquí, los pequeños exploradores pueden sumergirse en un mundo lleno de información emocionante sobre estos majestuosos reptiles prehistóricos.
    </p>
    <h2>¿Listo para la aventura?</h2>
    <div class="button-container">
      <button v-if="!isAuthenticated" @click="login">Iniciar sesión</button>
      <button v-if="isAuthenticated" @click="logoutHandler">Cerrar sesión</button>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useAuthStore } from '../stores/auth'; // Asegúrate de que la ruta sea correcta
import { useAuth0 } from '@auth0/auth0-vue';

export default {
  setup() {
    const authStore = useAuthStore();
    const { loginWithRedirect, logout } = useAuth0(); // Obtén los métodos de Auth0

    const login = () => {
      loginWithRedirect({
        appState: {
          targetUrl: '/Dinojuegos',
        },
      });
    };

    const logoutHandler = () => {
      logout({ returnTo: window.location.origin }); // Redirigir después de cerrar sesión
      authStore.logout(); // Actualizar estado en la tienda
    };
    const isAuthenticated = computed(() => authStore.isAuthenticated);

    onMounted(() => {
      authStore.checkAuth(); // Asegúrate de que este método esté bien definido en tu store
    });

    return {
      login,
      logoutHandler,
      isAuthenticated,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button-container {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #218838;
}
</style>
