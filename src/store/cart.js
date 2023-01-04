// Utilities
import { defineStore } from 'pinia'

export default defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cart')),
  }),

  getters: {
    itemsCount(state) {
      return state.items.length
    }
  },

  actions: {
    addToCart(product) {
      this.items.push(product)
      localStorage.setItem('cart', JSON.stringify(this.items))
    },

    removeFromCart(index) {
      this.items.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(this.items))
    }
  }
})
