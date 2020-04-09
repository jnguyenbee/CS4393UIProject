<template>
  <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Edit</th>
          <th>Name</th>
          <th>Price</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>
            <router-link :to="'/admin/edit/' + product._id"
              ><i class="fa fa-edit"></i
            ></router-link>
          </td>

          <td>{{ product.name }}</td>
          <td>${{ product.price }}</td>
          <td>
            <a @click="deleteProduct(product._id)"
              ><i class="fa fa-trash"></i
            ></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div> </template
>>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    },
  },
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch('allProducts');
    }
  },
  methods: {
    deleteProduct(id) {
      console.log(id);
      this.$store.dispatch('removeProduct', id);
    },
  },
};
</script>
