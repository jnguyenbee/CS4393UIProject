<template>
  <div>
    <div class="title">
        <h1>
          <i></i>
          Purchase Order
        </h1>
    </div>
    <b-card style="max-width: 800px;">
        <h5>Order</h5>
        <table style="width:100%">
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
          </tr>
        </table>
        <div align="right"> 
          <p>Shipping: $5.00<br>
            Tax: $1.50<br>
            Total: ${{total}}</p>
        </div>
        <h5>Shipping Address</h5>
          <p>{{}} Lastname<br>
            Address<br>
            City, State Zip</p>
        <h5>Payment Method</h5>
          <p>Firstname Lastname<br>
            Credit Card: **** **** **** 1111</p>
        <b-button pill 
            id="buyButton"
            href="http://localhost:8080/?#/Thanks/"
            variant="outline-warning"
            block>Buy Now
        </b-button>
    </b-card>
  </div>
</template>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>

<script>
export default {
  data() {
    return {
      cart: this.$store.state.cart,
    };
  },
  computed: {
    total: function() {
      return this.$store.state.cart.reduce(function(sum, cart) {
        sum += cart.price + 6.5;
        return sum;
      }, 0);
    },
  },
};
</script>
