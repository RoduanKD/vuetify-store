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
    <v-btn
      variant="text"
      stacked
      @click="toggleTheme"
    >
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>
    <v-btn
      variant="text"
      stacked
      @click="toggleLocale"
    >
      <v-icon>{{ $i18n.locale === 'en' ? 'mdi-abjad-arabic' : 'mdi-alpha-e' }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { useTheme } from 'vuetify'
import { mapActions, mapState } from 'pinia'
import cart from '@/store/cart';
import user from '@/store/user';

export default {
  setup() {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  },

  computed: {
    ...mapState(cart, ['itemsCount']),
    ...mapState(user, ['isLoggedIn', 'user']),
  },
  methods: {
    ...mapActions(user, ['logout']),

    toggleLocale() {
      this.$i18n.locale = this.$i18n.locale === 'ar' ? 'en' : 'ar'
      this.$vuetify.locale.current = this.$vuetify.locale.current === 'ar' ? 'en' : 'ar'
    }
  }
}
</script>
