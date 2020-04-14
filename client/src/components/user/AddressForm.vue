<template>
  <b-form>
    <h6>shipping address</h6>
    <b-form-group id="input-group-1" label="Username :" label-for="input-1">
      <b-form-input
        id="input-1"
        type="user"
        required
        placeholder="Enter username"
      ></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-2" label="Password:" label-for="input-2">
      <b-form-input
        id="input-2"
        type="password"
        required
        placeholder="Enter password"
      ></b-form-input>
    </b-form-group>

    <h6>payment</h6>
    <VueCardPayment
      :settings="{
        labels: {
          cardNumber: 'Card number',
          month: 'Month',
          year: 'Year',
          cardHolder: 'Cardholder name'
        },
        placeholders: {
          cardNumber: '0000 0000 0000 0000',
          month: '00',
          year: '00',
          cardHolder: 'JOHN DOE',
          cvv: '000'
        },

        showBank: true,
        showPaymentSystem: true
      }"
    ></VueCardPayment>
  </b-form>
</template>

<script></script>
<style scoped>
@import '../../../../client/static/app.css';
</style>
