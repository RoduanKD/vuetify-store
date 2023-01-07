<template>
  <v-app-bar color="primary">
    <v-app-bar-title>
      <v-icon icon="mdi-heart" />
      Like Card Store
    </v-app-bar-title>
    <v-btn
      variant="text"
      to="/"
      exact
      stacked
    >
      Home
    </v-btn>
    <v-btn
      variant="text"
      to="/products"
      stacked
    >
      Explore Products
    </v-btn>
    <v-btn
      v-if="isLoggedIn"
      variant="text"
      to="/profile"
      stacked
    >
      {{ user.firstName }}
    </v-btn>
    <v-btn
      v-if="isLoggedIn"
      variant="text"
      stacked
      to="/"
      @click="logout"
    >
      Logout
    </v-btn>
    <v-btn
      v-else
      variant="text"
      to="/login"
      stacked
    >
      Login
    </v-btn>
    <v-btn
      variant="text"
      to="/cart"
      stacked
    >
      <v-badge
        :content="itemsCount"
        floating
        color="error"
      >
        <v-icon>mdi-cart</v-icon>
      </v-badge>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import cart from '@/store/cart';
import user from '@/store/user';

export default {
  computed: {
    ...mapState(cart, ['itemsCount']),
    ...mapState(user, ['isLoggedIn', 'user']),
  },
  methods: {
    ...mapActions(user, ['logout'])
  }
}
</script>
