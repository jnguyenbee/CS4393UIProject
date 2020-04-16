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
          >Add More Socks</a
        >
        <button
          v-b-modal.modal-1
          type="button"
          class="btn btn-outline-secondary"
        >
          Order Now
        </button>
      </div>
    </div>

    <b-modal la id="modal-1" hide-footer title="Purchasing Order">
      <h1>Your items:</h1>

      <template v-for="product in cart">
        <b-form v-bind:key="product.id">
          <b-row>
            <b-col>
              <h4>
                <b-badge variant="info" style="width:100%">{{
                  product.name
                }}</b-badge>
              </h4>
            </b-col>
            <b-col>
              <b-input-group size="sm" prepend="$" style="margin-bottom:0px">
                <b-form-input
                  disabled
                  :value="product.price"
                  class="text-right"
                ></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>
        </b-form>
      </template>
      <hr />

      <b-form>
        <b-row>
          <b-col> <h3>Total:</h3> </b-col>
          <b-col>
            <b-input-group prepend="$">
              <b-form-input
                disabled
                :value="total"
                class="text-right"
              ></b-form-input>
            </b-input-group>
          </b-col>
        </b-row>
      </b-form>
      <hr />
      <addressForm />
      <b-button pill class="mt-3" variant="outline-danger" block
        >Cancel</b-button
      >
      <b-button
        pill
        class="mt-2"
        variant="outline-warning"
        block
        href="http://localhost:8080/?#/Buy"
        >Continue</b-button
      >
    </b-modal>

    <template v-for="product in cart">
      <product-details :product="product" :key="product.id"></product-details>
    </template>
    <!--<div class="container">
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
    </div> -->
  </div>
  <div v-else class="title">
    <h1><i class="fa fa-shopping-cart"></i> Your Cart is Empty</h1>
    <div class="text-center">
      <a
        pill
        type="button"
        class="btn btn-outline-primary"
        href="
    http://localhost:8080/?#/Home/"
        >Add Socks</a
      >
    </div>
  </div>
</template>

<style scoped></style>

<script>
import ProductDetails from '../components/product/ProductDetailsCart';
import AddressForm from '../components/user/AddressForm';
export default {
  data() {
    return {
      cart: this.$store.state.cart,
    };
  },
  components: {
    productDetails: ProductDetails,
    addressForm: AddressForm,
  },
  computed: {
    total: function() {
      return this.$store.state.cart.reduce(function(sum, cart) {
        sum += cart.price;
        return sum;
      }, 0);
    },
  },
};
</script>
