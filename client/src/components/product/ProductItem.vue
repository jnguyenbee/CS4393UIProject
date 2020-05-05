<template>
  <div class="product">
    <router-link :to="'/details/' + product._id" class="product-link">
      <div class="product__image">
        <img
          class="img-responsive"
          v-bind:src="'http://localhost:3000/' + product.productImage"
          alt="product.name"
        />
      </div>
      <div class="product__description">
        <div class="product__info">
          <h6>{{ product.name }}</h6>
        </div>

        <div class="product__price-cart">${{ product.price }}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'product-item',
  props: ['product'],
  data() {
    return {};
  },
};
</script>

<style scoped>
@import 'product-item.css';

.product {
  background: rgb(248, 243, 243);
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;
}

.product .product__description,
.product .product__action {
  transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) transform;
}

.product:hover .product__description {
  transform: translateY(-40px);
}

.product:hover .product__action {
  transform: none;
}

.product-link {
  display: block;
  color: #3d3d3d;
}

.product-link:hover {
  color: #3d3d3d;
  text-decoration: none;
}

.product {
  width: 100%;
}

.product__image img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 225px;
}

.product__description {
  width: 100%;
  display: flex;
  padding: 20px 20px 15px;
  background: #fff;
}

.product__info {
  flex: 2;
}

.product__description small {
  color: #808080;
}

.product__description h4 {
  margin: 3px 0 5px 0;
}

.product__price-cart {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 10px;
  font-weight: bold;
  color: #51d2b7;
}

.product__price-cart p {
  flex-grow: 2;
  font-size: 20px;
  font-weight: bold;
}

.product__action {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: translateY(100%);
}
.product__action button {
  border-radius: 0;
  width: 100%;
  display: block;
}
</style>
