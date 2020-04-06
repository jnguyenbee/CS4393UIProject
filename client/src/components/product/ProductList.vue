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
    <b-sidebar id="product.id" title="Sidebar" right shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <b-img
          src="https://picsum.photos/500/500/?image=54"
          fluid
          thumbnail
        ></b-img>
      </div>
    </b-sidebar>
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
  },
  data() {
    return {};
  },
  components: {
    'product-item': ProductItem,
  },
};
</script>

<style>
.products {
  background: #ffffff;
  padding: 30px 0;
}
</style>
