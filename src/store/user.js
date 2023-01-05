// Utilities
import { defineStore } from 'pinia'

export default defineStore('user', {
  persist: true,

  state: () => ({
    user: {},
  }),

  getters: {
    isLoggedIn(state) {
      return !!state.user.token
    }
  },

  actions: {
    login(username, password) {
      fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password,
          // expiresInMins: 60, // optional
        })
      })
        .then(res => res.json())
        .then(user => this.user = user);
    },
    logout() {
      this.user = {}
    }
  }
})
