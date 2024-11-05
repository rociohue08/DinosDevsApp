<template>
  <div class="container">
    <h1>¡DinosDevs te da la bienvenida!</h1>
    <p>
      DinosDevs es una página interactiva diseñada especialmente para niños, donde la fascinante era de los dinosaurios cobra vida. Aquí, los pequeños exploradores pueden sumergirse en un mundo lleno de información emocionante sobre estos majestuosos reptiles prehistóricos.
    </p>
    <h2>¿Listo para la aventura?</h2>
<<<<<<< HEAD

    <div class="button-container">
      <!-- Mostrar botones de Login y Logout -->
      <button v-if="!isAuthenticated" @click="login">Iniciar sesión</button>
      <button v-if="isAuthenticated" @click="logout">Cerrar sesión</button>
      <button v-if="!isAuthenticated" @click="register">Registrarse</button>
    </div>

    <!-- Formularios en la misma página -->
    <LoginForm v-if="showLogin" @close="showLogin = false" />
    <RegisterForm v-if="showRegister" @close="showRegister = false" />
=======
    <div class="button-container">
      <button v-if="!isAuthenticated" @click="login">Iniciar sesión</button>
      <button v-if="isAuthenticated" @click="logoutHandler">Cerrar sesión</button>
    </div>
>>>>>>> 76a4494177e8c86dceca107c080705cf4c606608
  </div>
</template>

<script>
<<<<<<< HEAD
import { ref } from 'vue'; // Importar ref para reactividad
import LoginForm from '../components/LoginForm.vue';
import RegisterForm from '../components/RegisterForm.vue';
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  name: 'DinoHome',
  components: {
    LoginForm,
    RegisterForm,
  },
  setup() {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
    const showLogin = ref(false); // Usando ref para reactividad
    const showRegister = ref(false); // Usando ref para reactividad

    const login = () => {
      loginWithRedirect(); // Redirigir al usuario a Auth0 para iniciar sesión
      showLogin.value = false; // Cerrar el formulario de Login si se inicia sesión
    };

    const register = () => {
      // Redirigir al usuario a la página de registro de Auth0
      window.location.href = `https://dev-p2a38yay4uw13qpa.us.auth0.com/signup`;
    };

    return {
      showLogin,
      showRegister,
      login,
      logout,
      isAuthenticated,
      register,
=======
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
>>>>>>> 76a4494177e8c86dceca107c080705cf4c606608
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
<<<<<<< HEAD
  background-color: #28a745; /* Verde moderno */
=======
  background-color: #28a745;
>>>>>>> 76a4494177e8c86dceca107c080705cf4c606608
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
<<<<<<< HEAD
  background-color: #218838; /* Verde más oscuro al pasar el ratón */
=======
  background-color: #218838;
>>>>>>> 76a4494177e8c86dceca107c080705cf4c606608
}
</style>
