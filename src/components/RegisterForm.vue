<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  import { useUserStore } from '../stores/user';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    setup() {
      const userStore = useUserStore();
      const register = () => {
        userStore.register({ email: this.email, password: this.password });
      };
      return { register };
    },
  };
  </script>
  