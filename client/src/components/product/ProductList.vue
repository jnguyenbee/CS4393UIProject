<template>
  <div>
    <div class="products">
      <div class="container">
        <div v-for="product in products" :key="product.id">
          <product-item :product="product"></product-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  name: "product-list",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "iPhone7",
          price: "4"
        },
        {
          id: 2,
          name: "iPhone6",
          price: "5"
        }
      ]
    };
  },
  components: {
    "product-item": ProductItem
  }
};
</script>

<style>
.products {
  background: #f7f8fb;
  padding: 30px 0;
}
</style>
