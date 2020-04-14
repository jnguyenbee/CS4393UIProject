<template>
  <div>
    <div class="search-bar">
      <b-form-input
        type="text"
        v-model="search"
        placeholder="Search by Name"
      ></b-form-input>
    </div>
    <div class="products">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-3 col-md-4 col-sm-6 col-xs-12"
            v-for="product in searchProduct"
            :key="product.id"
          >
            <p>{{ product.name }}</p>
            <product-item :product="product"></product-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
export default {
  name: 'product-list',
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch('allProducts');
    }
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    },
    searchProduct: function() {
      console.log(this.search);
      return this.products.filter(product => {
        return product.name.match(this.search);
      });
    }
  },
  data() {
    return {search: ''};
  },
  components: {
    'product-item': ProductItem
  }
};
</script>

<style>
.products {
  background: #ffffff;
  padding: 30px 0;
}
</style>
