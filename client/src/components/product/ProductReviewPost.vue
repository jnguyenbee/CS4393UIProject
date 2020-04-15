<template>
  <div>
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-button block href="#" v-b-toggle.accordion-2 variant="info"
        >Want to Leave a Review? Click Here</b-button
      >
    </b-card-header>
    <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
      <b-form>
        <b-card-body>
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
                  disabled
                  v-model="product.name"
                  required
                  placeholder="Product Name"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col">
              <b-form-group
                id="input-group-0"
                label="UserName:"
                label-for="input-0"
              >
                <b-form-input
                  id="input-0"
                  type="user"
                  disabled
                  required
                  placeholder="UserName"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col">
              Ratiing?
            </div>
          </div>
          <b-form-group
            id="input-group-6"
            label="Description:"
            label-for="input-6"
          >
            <b-form-textarea
              id="input-6"
              placeholder="How was it?"
              rows="4"
            ></b-form-textarea>
          </b-form-group>
        </b-card-body>
      </b-form>
    </b-collapse>
  </div>
</template>

<style scoped></style>

<script>
export default {
  data() {},
  props: ['product'],
  components: {}
};
</script>
