<template>
  <HeroSection>
    My Shopping Cart
  </HeroSection>
  <section>
    <v-container>
      <v-row>
        <v-col
          v-for="(item, i) in items"
          :key="item.id"
          cols="12"
          lg="4"
          xl="3"
        >
          <v-card
            max-width="344"
          >
            <v-img
              :src="item.image"
              height="200px"
              cover
            />
            <v-card-title>
              {{ item.title }}
            </v-card-title>
            <v-card-subtitle>
              {{ item.price }}$ - {{ item.category }}
            </v-card-subtitle>
            <v-card-actions>
              <v-btn
                color="error"
                variant="text"
                @click="removeFromCart(i)"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import cart from '@/store/cart'
import HeroSection from '@/components/HeroSection.vue';

export default {
  components: { HeroSection },
    computed: {
        ...mapState(cart, ["items", "itemsCount"])
    },
    methods: {
        ...mapActions(cart, ["removeFromCart"])
    },
}
</script>

<style>

</style>
