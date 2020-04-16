<template>
  <div>
    <b-card
      no-body
      class="overflow-hidden"
      style="max-width: 800px;max-height:100%"
    >
      <b-breadcrumb>
        <b-breadcrumb-item href="http://localhost:8080/?#/Home/">
          <b-badge variant="dark">RAINBOW MANGOS COMPANY</b-badge>
        </b-breadcrumb-item>
        <b-breadcrumb-item active>
          <b-badge variant="warning">{{ product.name }}</b-badge>
        </b-breadcrumb-item>
        <a
          class="button"
          href="http://localhost:8080/?#/Home/"
          style="background:  #17a2b8;color:#fff; border: 1px solid  #17a2b8;border-radius: 20px;
    padding: 10px 15px;position: absolute; right: 10px;padding: 0px 15px"
        >
          <i class="fa fa-socks"></i> Back to Socks
        </a>
      </b-breadcrumb>
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            fluid
            style="height:100%; width:400px"
            v-bind:src="'http://localhost:3000/' + product.productImage"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="product.name">
            <b-card-text>
              <p>Price: ${{ product.price }}</p>
              <p>Size: {{ product.size }}</p>
              <p>Color: {{ product.color }}</p>
              <b-card>
                <h5>Description</h5>
                {{ product.description }}
              </b-card>
            </b-card-text>
            <div class="product-details__price-cart">
              <product-button :product="product"></product-button>
            </div>
          </b-card-body>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.accordion-2 variant="info">
              <b>WRITE A REVIEW</b>
            </b-button>
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-form @submit="saveReview">
              <div class="row">
                <div class="col">
                  <div class="col">
                    <b-form-group
                      id="input-group-0"
                      label="Username:"
                      label-for="input-2"
                    >
                      <b-form-input
                        id="input-0"
                        type="text"
                        v-model="review.username"
                        required
                        placeholder="Enter username"
                      ></b-form-input>
                    </b-form-group>
                  </div>
                </div>
                <div class="col">
                  <div class="col">
                    <b-form-group
                      id="input-group-0"
                      label="Rating:"
                      label-for="input-2"
                    >
                      <b-form-select
                        id="input-2"
                        required
                        :options="options"
                        size="sm"
                        class="mt-3"
                        v-model="review.rating"
                      ></b-form-select>
                    </b-form-group>
                  </div>
                </div>
              </div>

              <div class="col">
                <b-form-group
                  id="input-group-6"
                  label="Description:"
                  label-for="input-6"
                >
                  <b-form-textarea
                    id="input-6"
                    v-model="review.description"
                    placeholder="How was it?"
                    rows="4"
                  ></b-form-textarea>
                </b-form-group>
                <div class="text-center">
                  <b-button
                    type="submit"
                    variant="outline-danger"
                    style="float: right;margin-bottom:10px"
                    >Submit</b-button
                  >
                </div>
              </div>
            </b-form>
          </b-collapse>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" variant="dark" v-b-toggle.accordion-1>
              <b>CUSTOMER REVIEWS</b>
            </b-button>
          </b-card-header>
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <product-review-list :product="product"></product-review-list>
          </b-collapse>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import ProductButton from './ProductButton';
import ProductListReview from './ProductReviewList';
export default {
  data() {
    return {
      review: {
        username: '',
        iption: '',
        rating: '',
        productId: this.product._id,
      },
      options: [
        {value: null, text: 'Please select an option'},
        {value: '1', text: '1'},
        {value: '2', text: '2'},
        {value: '3', text: '3'},
        {value: '4', text: '4'},
        {value: '5', text: '5'},
      ],
    };
  },
  props: ['product'],
  components: {
    'product-button': ProductButton,
    'product-review-list': ProductListReview,
  },
  methods: {
    saveReview() {
      this.$store.dispatch('addReview', this.review);
    },
  },
};
</script>

<style>
.card {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-top: 50px;
  margin-bottom: 10px; /* Added */
  max-width: 500px;
  background: rgb(248, 243, 243);
}

.product-details__price-cart {
  display: flex;
  padding-top: 30px;
}

.product-details__price-cart p {
  flex-grow: 2;
  font-size: 20px;
  font-weight: bold;
}
</style>
>
