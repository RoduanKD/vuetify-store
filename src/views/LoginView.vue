<template>
  <HeroSection>
    My Shopping Cart
  </HeroSection>
  <section>
    <v-container>
      <v-row
        justify="center"
        align="center"
      >
        <v-col
          cols="12"
          lg="4"
        >
          <v-card>
            <v-card-title>Login</v-card-title>
            <v-form @submit.prevent="submit">
              <v-card-text>
                <v-text-field v-model="username" />
                <v-text-field
                  v-model="password"
                  type="password"
                />
                <v-btn
                  type="submit"
                  color="info"
                >
                  Login
                </v-btn>
              </v-card-text>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import user from '@/store/user.js'
import { mapActions } from 'pinia';

export default {
  components: { HeroSection },

  data: () => ({
    username: 'kminchelle',
    password: '0lelplR',
  }),
  methods: {
    ...mapActions(user, ['login']),
    submit() {
      this.login(this.username, this.password)
    }
  }
}
</script>
