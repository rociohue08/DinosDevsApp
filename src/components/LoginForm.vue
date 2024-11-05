<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
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
      const login = () => {
        userStore.login({ email: this.email, password: this.password });
      };
      return { login };
    },
  };
  </script>
  