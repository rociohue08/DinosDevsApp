<template>
  <div class="container">
    <h1>¡DinosDevs te da la bienvenida!</h1>
    <p>
      DinosDevs es una página interactiva diseñada especialmente para niños, donde la fascinante era de los dinosaurios cobra vida. Aquí, los pequeños exploradores pueden sumergirse en un mundo lleno de información emocionante sobre estos majestuosos reptiles prehistóricos.
    </p>
    <h2>¿Listo para la aventura?</h2>

    <div class="button-container">
      <!-- Mostrar botones de Login y Logout -->
      <button v-if="!isAuthenticated" @click="login">Iniciar sesión</button>
      <button v-if="isAuthenticated" @click="logout">Cerrar sesión</button>
      <button v-if="!isAuthenticated" @click="register">Registrarse</button>
    </div>

    <!-- Formularios en la misma página -->
    <LoginForm v-if="showLogin" @close="showLogin = false" />
    <RegisterForm v-if="showRegister" @close="showRegister = false" />
  </div>
</template>

<script>
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
  background-color: #28a745; /* Verde moderno */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #218838; /* Verde más oscuro al pasar el ratón */
}
</style>
