<template>
  <div>
    <b-navbar type="light" variant="light">
      <div class="search">
        <b-nav-form>
          <b-form-input
            style="width:500px"
            class="mr-sm-0"
            type="text"
            v-model="search"
            placeholder="Search by Keyword"
          ></b-form-input>
          <b-button pill variant="outline-success" class="my-5 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </div>
    </b-navbar>

    <div class="products">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-3 col-md-4 col-sm-6 col-xs-12"
            v-for="product in filtered"
            :key="product.id"
          >
            <p>color: {{product.color}}</p>
            <p>description: {{product.description}}</p>
            <product-item :product="product"></product-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  name: "product-list",
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch("allProducts");
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
    },
    searchProduct: function() {
      console.log(this.search);
      return this.products.filter(product => {
        return product.name.toUpperCase().match(this.search.toUpperCase());
      });
    }
  },
  data() {
    return { search: "" };
  },
  components: {
    "product-item": ProductItem
  }
};
</script>

<style>
.products {
  background: #ffffff;
  padding: 30px 0;
}
.search {
  margin: 0 auto; /* Added */
  float: none; /* Added */
}
</style>
