import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
  actions: {
    login(credentials) {
      // Lógica de autenticación (simulada aquí)
      this.user = { email: credentials.email };
      console.log('Usuario logueado:', this.user);
    },
    register(credentials) {
      // Lógica de registro (simulada aquí)
      this.user = { email: credentials.email };
      console.log('Usuario registrado:', this.user);
    },
    logout() {
      this.user = null;
      console.log('Usuario deslogueado');
    },
  },
});
