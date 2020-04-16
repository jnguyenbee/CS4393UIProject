<template>
  <div>
    <b-navbar type="light" variant="light">
      <div class="search">
        <b-nav-form>
          <b-row>
            <b-col>
              Search:
              <b-form-input
                style="width:500px"
                class="mr-sm-0"
                type="text"
                v-model="search"
                placeholder="Search by Keyword"
              ></b-form-input>
            </b-col>

            <b-col>
              Sort By:
              <b-form inline>
                <b-form-select
                  id="input-3"
                  v-model="sort"
                  :options="options"
                  required
                ></b-form-select>
              </b-form>
            </b-col>
          </b-row>
        </b-nav-form>
      </div>
    </b-navbar>

    <div class="products">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-3 col-md-4 col-sm-6 col-xs-12"
            v-for="product in filtered"
            :key="product._id"
          >
            <div v-if="sort == 'name'">
              <b-badge variant="warning">{{ product.name }}</b-badge>
            </div>
            <div v-if="sort == 'color'">
              <b-badge variant="info">{{ product.color }}</b-badge>
            </div>
            <div v-if="sort == 'size'">
              <b-badge variant="primary">{{ product.size }}</b-badge>
            </div>

            <div v-if="sort == 'cheap'">
              <b-badge variant="danger"> ${{ product.price }}</b-badge>
            </div>
            <div v-if="sort == 'notcheap'">
              <b-badge variant="danger"> ${{ product.price }}</b-badge>
            </div>

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
      sort: '',
      options: [
        {text: 'Default', value: null},
        {text: 'Name (A-Z)', value: 'name'},
        {text: 'Color (A-Z)', value: 'color'},
        {text: 'Price ($ - $$$)', value: 'cheap'},
        {text: 'Price ($$$ - $)', value: 'notcheap'},
        {text: 'Size (Small - Large)', value: 'size'},
      ],
      show: true,
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
      var prod = this.products.filter(function(product) {
        return (
          product.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0 ||
          product.color.toLowerCase().indexOf(self.search.toLowerCase()) >= 0 ||
          product.description
            .toLowerCase()
            .indexOf(self.search.toLowerCase()) >= 0
        );
      });

      function name(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }
      function color(a, b) {
        if (a.color < b.color) return -1;
        if (a.color > b.color) return 1;
        return 0;
      }

      function sized(a, b) {
        if (a.size > b.size) return -1;
        if (a.size < b.size) return 1;
        return 0;
      }

      if (this.sort == 'name') {
        return prod.sort(name);
      } else if (this.sort == 'color') {
        return prod.sort(color);
      } else if (this.sort == 'size') {
        return prod.sort(sized);
      } else if (this.sort == 'cheap') {
        return prod.sort(function(a, b) {
          return a.price - b.price;
        });
      } else if (this.sort == 'notcheap') {
        return prod.sort(function(a, b) {
          return b.price - a.price;
        });
      } else {
        return prod;
      }
    },
    searchProduct: function() {
      console.log(this.search);
      return this.products.filter((product) => {
        return product.name.toUpperCase().match(this.search.toUpperCase());
      });
    },
  },

  components: {
    'product-item': ProductItem,
  },
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
