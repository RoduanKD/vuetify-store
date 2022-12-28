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
      fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(products => this.products = products);
    }
  }
}
</script>

<style>

</style>
