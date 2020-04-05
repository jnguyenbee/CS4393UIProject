<template>
  <product-form :model="model"></product-form>
</template>
<script>
import ProductFrom from "../../components/product/ProductForm.vue";
export default {
  data() {
    return {
      model: {}
    };
  },
  components: {
    "product-form": ProductFrom
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
