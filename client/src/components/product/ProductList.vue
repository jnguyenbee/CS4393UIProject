<template>
  <div>
    <h1>Product List</h1>
    <div class="products">
      <div class="container">
        <ul>
          <li v-for="product in products" :key="product.name">
            {{ product.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {id: 1, name: 'iPhone7'},
        {id: 2, name: 'iPhone6'},
      ],
    };
  },
};
</script>

<style scoped>
@import 'product-item.css';

.products {
  background: #f7f8fb;
  padding: 30px 0;
}
</style>
