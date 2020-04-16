<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 800px;max-height:100%">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            fluid
            style="height:100%; width:400px"
            v-bind:src="'http://localhost:3000/'+ product.productImage"
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
                {{product.description}}
              </b-card>
            </b-card-text>
            <div class="product-details__price-cart">
              <product-button :product="product"></product-button>
            </div>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>


<script>
import ProductButton from "./ProductButton";
//import ProductBackButton from "./ProductBackButton";
//import ProductReviewButton from "./ProductReviewButton";
export default {
  props: ["product"],
  components: {
    "product-button": ProductButton
    //"product-back": ProductBackButton
    //  "product-review-side-button": ProductReviewButton
  }
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