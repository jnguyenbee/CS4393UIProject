<template>
  <div>
    <b-form @submit="saveProduct" enctype="multipart/form-data">
      <b-card class="mt-3">
        <div class="row">
          <div class="col">
            <b-form-group
              id="input-group-0"
              label="Product Name:"
              label-for="input-0"
            >
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

            <div class="row">
              <div class="col">
                <b-form-group
                  id="input-group-2"
                  label="Color:"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-3"
                    type="text"
                    v-model="product.color"
                    required
                    placeholder="Enter product color"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col">
                <b-form-group
                  id="input-group-3"
                  label="Size:"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-3"
                    type="text"
                    v-model="product.size"
                    required
                    placeholder="Size"
                  ></b-form-input>
                </b-form-group>
              </div>

              <div class="col">
                <b-form-group
                  id="input-group-4"
                  label="Quanity:"
                  label-for="input-4"
                >
                  <b-form-input
                    id="input-4"
                    type="number"
                    v-model="product.quantity"
                    required
                    placeholder="Quantity"
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
          </div>
          <div class="col">
            <b-form-group id="input-group-5" label="Image:" label-for="input-5">
              <b-form-file
                type="file"
                ref="file"
                id="input-5"
                v-model="product.productImage"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
                @change="onSelect"
              ></b-form-file>
            </b-form-group>

            <b-form-group
              id="input-group-6"
              label="Description:"
              label-for="input-6"
            >
              <b-form-textarea
                id="input-6"
                v-model="product.description"
                placeholder="Describe the product"
                rows="8"
              ></b-form-textarea>
            </b-form-group>
          </div>
        </div>
        <div class="form-group new-button">
          <button class="button">
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
  props: ['product', 'isEditing'],
  created() {},
  methods: {
    onSelect() {
      const file = this.$refs.file.files[0];
      this.file = file;
    },
    saveProduct() {
      const formData = new FormData();
      if (this.isEditing == true) {
        formData.append('_id', this.product.id);
      }

      formData.append('name', this.product.name);
      formData.append('price', this.product.price);
      formData.append('size', this.product.size);
      formData.append('color', this.product.color);
      formData.append('quanity', this.product.quantity);
      formData.append('description', this.product.description);
      formData.append('productImage', this.product.productImage);

      this.$emit('save-product', formData);
      //console.log("submit hit");
    },
  },
};
</script>

<style scoped>
@import '../../../../client/static/app.css';
.card {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 100px; /* Added */
  max-width: 800px;
  background: rgb(248, 243, 243);
}
</style>
