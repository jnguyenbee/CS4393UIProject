<template>
  <product-form @save-product="addProduct" :product="product"></product-form>
</template>
<script>
import ProductFrom from '../../components/product/ProductForm.vue';
export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    addProduct(product) {
      this.$store.dispatch('addProduct', product);
    },
  },
  components: {
    'product-form': ProductFrom,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
