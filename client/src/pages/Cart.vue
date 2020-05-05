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
          @click="() => $router.push('/Home')"
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
      <table class="table is-striped">
        <thead>
          <tr>
            <td>Product Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in cart" v-bind:key="product.id">
            <td>{{ product.name }}</td>
            <td>${{ product.price }}</td>
          </tr>
          <tr>
            <td><b>Total:</b></td>

            <td>
              <b>${{ total }}</b>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />

      <b-form @submit="checkForm" actions="/thanks">
        <b-card header="shipping address">
          <b-form-group
            id="input-group-1"
            label="address :"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              type="text"
              v-model="address"
              required
              placeholder="Enter adresss"
            ></b-form-input>
          </b-form-group>

          <b-row>
            <b-col>
              <b-form-group
                id="input-group-2"
                label="city :"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  type="text"
                  v-model="city"
                  required
                  placeholder="Enter city"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                id="input-group-2"
                label="state :"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  type="text"
                  v-model="state"
                  required
                  placeholder="Enter state"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                id="input-group-2"
                label="zip code :"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  type="number"
                  v-model="zip"
                  required
                  placeholder="Enter zip code"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <template v-slot:footer> </template>
        </b-card>

        <b-card header="payment">
          <b-form-group
            id="input-group-1"
            label="Card Number"
            label-for="input-1"
            description="We'll never share your credit information anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="card"
              required
              placeholder="####-####-####-####"
              v-cardformat:formatCardNumber
            ></b-form-input>
          </b-form-group>
          <b-row>
            <b-col>
              <b-form-group
                id="input-group-1"
                label="Card Expiration"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="exp"
                  required
                  placeholder="##/####"
                  v-cardformat:formatCardExpiry
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                id="input-group-1"
                label="Card CVS"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="cvs"
                  required
                  placeholder="####"
                  v-cardformat:formatCardCVC
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>

          <template v-slot:footer> </template
        ></b-card>

        <div>
          <b-button
            pill
            type="submit"
            class="mt-2"
            variant="outline-warning"
            block
            >Continue</b-button
          >
        </div>
      </b-form>
    </b-modal>

    <template v-for="product in cart">
      <product-details :product="product" :key="product.id"></product-details>
    </template>
  </div>
  <div v-else class="title">
    <h1><i class="fa fa-shopping-cart"></i> Your Cart is Empty</h1>
    <div class="text-center">
      <a
        pill
        type="button"
        class="btn btn-outline-primary"
        @click="() => $router.push('/Home')"
        >Add Socks</a
      >
    </div>
  </div>
</template>

<style scoped></style>

<script>
import ProductDetails from '../components/product/ProductDetailsCart';
//import AddressForm from "../components/user/AddressForm";
export default {
  data() {
    return {
      errors: [],
      address: null,
      city: null,
      state: null,
      zip: null,
      card: null,
      exp: null,
      cvs: null,
      counter: 0,
      cart: this.$store.state.cart,
    };
  },
  components: {
    productDetails: ProductDetails,
    //    addressForm: AddressForm
  },
  methods: {
    onAddressSubmit(evt) {
      evt.preventDefault();
      this.counter = 1;
      alert('Address Saved');
    },

    onCardSubmit(evt) {
      evt.preventDefault();
      this.counter = 2;
      alert('Card Saved');
    },
    checkForm: function(e) {
      if (
        this.address &&
        this.city &&
        this.state &&
        this.zip &&
        this.card &&
        this.exp &&
        this.cvs
      ) {
        // this.$router.go()
        this.$store.cart = {};
        this.$router.push('/thanks');
      }

      this.errors = [];

      if (!this.address) {
        this.errors.push('address required.');
      }
      if (!this.city) {
        this.errors.push('city required.');
      }
      if (!this.state) {
        this.errors.push('state required.');
      }
      if (!this.zip) {
        this.errors.push('zip required.');
      }
      if (!this.card) {
        this.errors.push('acard required.');
      }
      if (!this.exp) {
        this.errors.push('exp required.');
      }
      if (!this.cvs) {
        this.errors.push('cvs required.');
      }

      e.preventDefault();
    },
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
