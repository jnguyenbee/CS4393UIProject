<template>
  <div class="product-details">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-4 col-md-4 col-sm-6 col-xs-12 product-details__image"
        >
          <img class="img-responsive" :src="product.image" alt="" />
        </div>
        <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12 product-details__info">
          <div class="product-details__description">
            <small>{{
              product.manufacturer && product.manufacturer.name
            }}</small>
            <h3>{{ product.name }}</h3>
            <p>
              {{ product.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
};
</script>

<style>
.product-details {
  border-bottom: 2px solid #f5f5f5;
  padding: 30px 0;
}

.product-details__description {
  padding-top: 30px;
}

.product-details__description small {
  color: #808080;
}

.product-details__description h3 {
  margin: 5px 0 30px 0;
}

.product-details__price-cart {
  display: flex;
  padding-top: 30px;
}

.product-details__price-cart p {
  flex-grow: 2;
  font-size: 20px;
  font-weight: bold;
}
</style>
