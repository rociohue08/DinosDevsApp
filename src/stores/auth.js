import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null,
  }),
  actions: {
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
