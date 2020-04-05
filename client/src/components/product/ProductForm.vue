<template>
  <div>
    <b-form>
      <b-card class="mt-3">
        <b-form-group id="input-group-1" label="Product Name:" label-for="input-1">
          <b-form-input id="input-1" type="user" required placeholder="Enter product name"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-1" label="Price:" label-for="input-1">
          <b-form-input id="input-1" type="number" required placeholder="Enter product price"></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="Image:" label-for="input-1">
          <b-form-file
            v-model="file"
            :state="Boolean(file)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
          ></b-form-file>
        </b-form-group>

        <b-form-group id="input-group-1" label="Description:" label-for="input-1">
          <b-form-textarea id="textarea-rows" placeholder="Tall textarea" rows="8"></b-form-textarea>
        </b-form-group>

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
  props: ["model"]
};
</script>
<style scoped>
@import "../../../../client/static/app.css";
.card {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
  max-width: 500px;
}
</style>
