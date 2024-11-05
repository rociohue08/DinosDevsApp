<<<<<<< HEAD
import { defineStore } from 'pinia'
=======
import { defineStore } from 'pinia';
import { useAuth0 } from "@auth0/auth0-vue";
>>>>>>> 76a4494177e8c86dceca107c080705cf4c606608

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null,
  }),
  actions: {
<<<<<<< HEAD
    login(username) {
      this.isAuthenticated = true
      this.user = username // Puedes almacenar más información del usuario si lo deseas
    },
    logout() {
      this.isAuthenticated = false
      this.user = null
    },
  },
})
=======
    async login() {
      const { loginWithRedirect } = useAuth0(); // Obtén el contexto de Auth0 directamente
      try {
        await loginWithRedirect();
      } catch (error) {
        console.error("Error durante el login:", error);
      }
    },
    async logout() {
      const { logout } = useAuth0(); // Obtén el contexto de Auth0 directamente
      logout({ returnTo: window.location.origin });
      this.isAuthenticated = false;
      this.user = null;
    },
    async checkAuth() {
      const { isAuthenticated, user } = useAuth0(); // Obtén el contexto de Auth0 directamente
      try {
        this.isAuthenticated = await isAuthenticated; // Asigna directamente el valor
        this.user = user || null; // Asigna el usuario, si existe
      } catch (error) {
        console.error("Error al verificar la autenticación:", error);
      }
    },
  },
});
>>>>>>> 76a4494177e8c86dceca107c080705cf4c606608
