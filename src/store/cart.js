// Utilities
import { defineStore } from 'pinia'

export default defineStore('cart', {
  state: () => ({
    items: [],
  }),

  getters: {
    itemsCount(state) {
      return state.items.length
    }
  },

  actions: {
    addToCart(product) {
      this.items.push(product)
    }
  }
})
