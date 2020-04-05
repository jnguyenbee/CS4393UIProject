<template>
  <div>
    <b-form @submit="saveProduct">
      <b-card class="mt-3">
        <div class="row">
          <div class="col">
            <b-form-group id="input-group-0" label="Product Name:" label-for="input-0">
              <b-form-input
                id="input-0"
                type="user"
                v-model="product.name"
                required
                placeholder="Enter product name"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" label="Price:" label-for="input-1">
              <b-form-input
                id="input-1"
                type="number"
                v-model="product.price"
                required
                placeholder="Enter product price"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col">
            <b-form-group id="input-group-2" label="Image:" label-for="input-2">
              <b-form-file
                id="input-2"
                v-model="product.image"
                :state="Boolean(file)"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
              ></b-form-file>
            </b-form-group>

            <b-form-group id="input-group-3" label="Description:" label-for="input-3">
              <b-form-textarea
                id="input-3"
                v-model="product.description"
                placeholder="Describe the product"
                rows="8"
              ></b-form-textarea>
            </b-form-group>
          </div>
        </div>
        <div class="form-group new-button">
          <button class="button">
            <i class="fa fa-pencil"></i>
            <span v-if="isEditing">Update Product</span>
            <span v-else>Add Product</span>
          </button>
        </div>
      </b-card>
    </b-form>
  </div>
</template>

<script>
export default {
  props: ["product", "isEditing"],
  methods: {
    saveProduct() {
      alert(this.product.name);
      this.$emit("save-product", this.product);
      //console.log("submit hit");
    }
  }
};
</script>


<style scoped>
@import "../../../../client/static/app.css";
.card {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 100px; /* Added */
  max-width: 800px;
}
</style>
