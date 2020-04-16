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
          <b-button
            pill
            variant="outline-success"
            class="my-5 my-sm-0"
            type="submit"
            >Search</b-button
          >
        </b-nav-form>
      </div>
    </b-navbar>
    <div class="text-center">
      <div class="container">
        <b-button pill v-b-toggle.collapse-1 variant="primary" size="sm"
          >Filter Options</b-button
        >
        <div class="row">
          <b-collapse id="collapse-1" class="mt-2">
            <b-form inline>
              <b-form-group
                id="input-group-3"
                label="Size:"
                label-for="input-3"
              >
                <b-form-select
                  id="input-3"
                  v-model="form.food"
                  :options="foods"
                  required
                ></b-form-select>
              </b-form-group>
            </b-form>
          </b-collapse>
        </div>
      </div>
    </div>
    <div class="products">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-3 col-md-4 col-sm-6 col-xs-12"
            v-for="product in filtered"
            :key="product._id"
          >
            <p>color: {{ product.color }}</p>
            <p>description: {{ product.description }}</p>
            <product-item :product="product"></product-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
export default {
  name: 'product-list',
  data() {
    return {
      search: '',
      form: {
        food: null
      },
      foods: [
        {text: 'Select One', value: null},
        'x-small',
        'small',
        'medium',
        'large',
        'x-large'
      ],
      show: true
    };
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
    },
    searchProduct: function() {
      console.log(this.search);
      return this.products.filter(product => {
        return product.name.toUpperCase().match(this.search.toUpperCase());
      });
    }
  },

  components: {
    'product-item': ProductItem
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
