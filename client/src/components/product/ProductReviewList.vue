<template>
  <div>
    <p>
      NEED TO GET ID AND SEND TO TEMPLE VIA PRODUVT VIEW; SEE PRODUCT LIST,
      PRODUCT ITEMS FOR ASSISTANCE
    </p>
    <p>NEED TO PASS IN REVIEW NOT PRODUCT</p>
    <p>
      <product-review product="product"></product-review>
    </p>
  </div>
</template>

<style scoped></style>

<script>
import ProductReview from './ProductReview';
export default {
  props: ['product'],
  components: {
    'product-review': ProductReview
    //"product-back": ProductBackButton
    //  "product-review-side-button": ProductReviewButton
  },
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch('allProducts');
    }
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    },
    filtered: function() {
      var self = this;
      return this.products.filter(function(product) {
        return (
          product.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0 ||
          product.color.toLowerCase().indexOf(self.search.toLowerCase()) >= 0 ||
          product.description
            .toLowerCase()
            .indexOf(self.search.toLowerCase()) >= 0
        );
      });
    }
  }
};
</script>
