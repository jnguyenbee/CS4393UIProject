<template>
  <div v-if="cart.length > 0">
    <div class="title">
      <h1>
        <i class="fa fa-shopping-cart"></i> Your Cart
      </h1>
      <b-button v-b-modal.modal-1>Launch demo modal</b-button>

      <b-modal id="modal-1" hide-footer title="Purchasing Order">
        <addressForm />
        <template v-for="product in cart">
          <p :key="product.id">{{product.name}} {{product.price}}</p>
        </template>
        <b-button class="mt-3" variant="outline-danger" block>Cancel</b-button>
        <b-button class="mt-2" variant="outline-warning" block>Continue</b-button>
      </b-modal>
    </div>
    <template v-for="product in cart">
      <product-details :product="product" :key="product.id"></product-details>
    </template>
  </div>
  <div v-else class="title">
    <h1>
      <i class="fa fa-shopping-cart"></i> Your Cart is Empty
    </h1>
  </div>
</template>

<script>
import ProductDetails from "../components/product/ProductDetailsCart";
import AddressForm from "../components/user/AddressForm";
export default {
  data() {
    return {
      cart: this.$store.state.cart
    };
  },
  components: {
    productDetails: ProductDetails,
    addressForm: AddressForm
  }
};
</script>
