<<<<<<< HEAD
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
=======
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
>>>>>>> 76a4494177e8c86dceca107c080705cf4c606608
