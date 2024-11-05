
<script>
import AuthForm from '@/components/AuthForm.vue'

export default {
  components: { AuthForm },
  methods: {
    handleLogin() {
      this.$router.push('/menu')
    },
    handleRegister() {
      this.$router.push('/menu')
    },
  },
}
</script>

<template>
  <div>
    <h2>Juegos de Dinosaurios</h2>
    <!-- Juegos interactivos aquí -->
  </div>

  <div class="formContainer">
      <AuthForm @login="handleLogin" @register="handleRegister" />
  </div>


</template>
<style scoped>
.formContainer {
  background-color: rgb(12, 44, 2);
  width: 300px;
  height: 100px;
  display: flex; /* Para centrar el contenido del formulario */
  flex-direction: column; /* Para apilar los elementos verticalmente */
  justify-content: center; /* Centrar el contenido verticalmente */
  align-items: center; /* Centrar el contenido horizontalmente */
  padding:10px; /* Añadir algo de padding */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra para el formulario */
  border-radius: 20px;

}

</style>
