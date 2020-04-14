<template>
  <div>
    <p>NEED TO GET ID AND SEND TO TEMPLE VIA PRODUVT VIEW; SEE PRODUCT LIST, PRODUCT ITEMS FOR ASSISTANCE</p>
    <p>NEED TO PASS IN REVIEW NOT PRODUCT</p>
    <p>
      <product-review product="product"></product-review>
    </p>
  </div>
</template>

<style scoped></style>

<script>
import ProductReview from "./ProductReview";
export default {
  props: ["product"],
  components: {
    "product-review": ProductReview
    //"product-back": ProductBackButton
    //  "product-review-side-button": ProductReviewButton
  }
};
</script>
