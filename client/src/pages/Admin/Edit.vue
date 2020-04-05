<template>
  <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Manufacturer</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{product.name}}</td>
          <td>${{product.price}}</td>
          <td>
            <router-link :to="'/admin/edit/'+product._id">
              <i class="fa fa-pencil-square-o"></i>
            </router-link>
          </td>
          <td>
            <a @click="deleteProduct(product._id)">
              <i class="fa fa-trash"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Edit"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
