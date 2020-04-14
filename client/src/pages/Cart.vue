<template>
  <div v-if="cart.length > 0">
    <div class="title">
      <h1>
        <i class="fa fa-shopping-cart"></i>
        Your Cart
      </h1>
      <div class="text-center">
        <a
          type="button"
          class="btn btn-outline-primary"
          href="
    http://localhost:8080/?#/Home/"
        >Add more Sock</a>
        <button v-b-modal.modal-1 type="button" class="btn btn-outline-secondary">Order Now</button>
      </div>
    </div>

    <b-modal la id="modal-1" hide-footer title="Purchasing Order">
      <h1>Need to do calculation</h1>
      <template v-for="product in cart">
        <p :key="product.id">{{ product.name }} {{ product.price }}</p>
      </template>
      <addressForm />

      <b-button pill class="mt-3" variant="outline-danger" block>Cancel</b-button>
      <b-button
        pill
        class="mt-2"
        variant="outline-warning"
        block
        href="http://localhost:8080/?#/Buy"
      >Continue</b-button>
    </b-modal>

    <template v-for="product in cart">
      <product-details :product="product" :key="product.id"></product-details>
    </template>
  </div>
  <div v-else class="title">
    <h1>
      <i class="fa fa-shopping-cart"></i> Your Cart is Empty
    </h1>
    <div class="text-center">
      <a
        pill
        type="button"
        class="btn btn-outline-primary"
        href="
    http://localhost:8080/?#/Home/"
      >Added Sock</a>
    </div>
  </div>
</template>

<style scoped></style>

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
