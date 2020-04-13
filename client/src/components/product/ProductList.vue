<template>
  <div>
    <div class="products">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-3 col-md-4 col-sm-6 col-xs-12"
            v-for="product in products"
            :key="product.id"
          >
            <product-item :product="product"></product-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  name: "product-list",
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch("allProducts");
    }
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    }
  },
  data() {
    return {};
  },
  components: {
    "product-item": ProductItem
  }
};
</script>

<style>
.products {
  background: #ffffff;
  padding: 30px 0;
}
</style>
