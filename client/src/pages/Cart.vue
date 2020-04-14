<template>
  <div v-if="cart.length > 0">
    <div class="title">
      <h1><i class="fa fa-shopping-cart"></i> Your Cart</h1>
    </div>
    <template v-for="product in cart">
      <product-details :product="product" :key="product.id"></product-details>
    </template>
    <div class="container">
        <b-row>
          <b-col></b-col>
          <b-col></b-col>
          <b-col>Total: 
          </b-col>          
        </b-row>  

        <b-row>
          <b-col></b-col>
          <b-col></b-col>
          <b-col>
            <b-button variant="primary" router-link to="/checkout">Checkout</b-button>  
          </b-col>          
        </b-row>
    </div>
  </div>
  <div v-else class="title">
    <h1><i class="fa fa-shopping-cart"></i> Your Cart is Empty</h1>
  </div>
</template>

<script>
import ProductDetails from '../components/product/ProductDetails';
export default {
  data() {
    return {
      cart: this.$store.state.cart,
    };
  },
  components: {
    productDetails: ProductDetails,
  },
};
</script>
