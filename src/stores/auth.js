import { defineStore } from 'pinia';
import { useAuth0 } from "@auth0/auth0-vue";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null,
  }),
  actions: {
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
