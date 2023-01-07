<template>
  <section>
    <v-container>
      <v-row>
        <v-col
          v-for="product in products"
          :key="product.id"
          cols="12"
          sm="6"
          md="6"
          lg="4"
          xl="3"
        >
          <ProductCard v-bind="product" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  components: { ProductCard },
  data() {
    return {
      products: []
    };
  },
  created() {
    this.loadProducts();
  },
  methods: {
    loadProducts() {
      this.axios.get('https://fakestoreapi.com/products')
        .then(response => this.products = response.data)
    }
  }
}
</script>

<style>

</style>
