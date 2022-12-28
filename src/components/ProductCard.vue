<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>{{ description }}</v-card-text>
    <v-card-actions>
      <v-btn
        color="primary"
        @click="addToCart({id, title, price, image, category})"
      >
        <v-icon>mdi-cart</v-icon> Add to cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'pinia'
import CartStore from '@/store/cart.js'

export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    rating: {
      type: Object,
      required: true
    },
  },

  methods: {
    ...mapActions(CartStore, ['addToCart'])
  }
}
</script>

<style>

</style>
