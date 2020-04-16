<template>
  <product-form @save-product="updateProduct" :product="product" :isEditing="true"></product-form>
</template>
<script>
import ProductFrom from "../../components/product/ProductForm.vue";
export default {
  data() {
    //      const productById = this.$store.getters.productById(this.$route.params['id'])
    return {
      // product: {},
      // model: this.$store.getters.productById(this.$route.params['id']),
    };
  },
  computed: {
    product() {
      const productById = this.$store.getters.productById(
        this.$route.params["id"]
      );
     // alert(this.$route.params["id"]);
      return Object.assign({}, productById);
    }
  },
  methods: {
    updateProduct(product) {
      console.log(product);
      this.$store.dispatch("updateProduct", this.product);
    }
  },

  components: {
    "product-form": ProductFrom
  }
};
</script>
