<template>
  <div class="container">
    <h1>¡DinosDevs te da la bienvenida!</h1>
    <p>
      DinosDevs es una página interactiva diseñada especialmente para niños, donde la fascinante era de los dinosaurios cobra vida. Aquí, los pequeños exploradores pueden sumergirse en un mundo lleno de información emocionante sobre estos majestuosos reptiles prehistóricos.
    </p>
    <h2>¿Listo para la aventura?</h2>

    <div class="button-container">
      <!-- mostrar los formularios de login y registro -->
      <button @click="showLogin = true">Login</button>
      <button @click="showRegister = true">Register</button>

      <!-- Formularios en la misma página -->
      <LoginForm v-if="showLogin" @close="showLogin = false" />
      <RegisterForm v-if="showRegister" @close="showRegister = false" />
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';
import RegisterForm from '../components/RegisterForm.vue';

export default {
  name: 'DinoHome',
  components: {
    LoginForm,
    RegisterForm,
  },
  data() {
    return {
      showLogin: false,
      showRegister: false,
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

h1 {
  color: green;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 60px;
}

h2 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

p {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  width: 700px;
  text-align: center;
}

/* Estilos de los botones */
.button-container {
  display: flex;
  gap: 1rem;
  padding: 30px;
  background: rgb(41, 39, 39);
  border-radius: 15px;
}

button {
  background-color: #4CAF50; /* Color verde moderno */
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

/* Efecto hover */
button:hover {
  background-color: #45A049; /* Verde más oscuro al pasar el ratón */
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  transform: scale(1.05); /* Aumenta ligeramente el tamaño */
}

/* Efecto active */
button:active {
  background-color: #388E3C; /* Verde aún más oscuro al hacer clic */
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.4);
  transform: scale(0.98); /* Reduce ligeramente el tamaño */
}
</style>
