<template>
  <div>
    <h1>Product List</h1>
    <div class="products">
      <div class="container">
        <ul>
          <li v-for="product in products" :key="product.id">
            {{ product.name }} <br />
            {{ product.created_at }}
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
        {id: 1, name: 'iPhone7', created_at: '01-20-20'},
        {id: 2, name: 'iPhone6', created_at: '10-30-20'},
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
