<template>
  <b-form
    ><h6>shipping address</h6>
    <b-container>
      <b-form-group id="input-group-1" label="address :" label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          required
          placeholder="Enter adresss"
        ></b-form-input>
      </b-form-group>

      <b-row
        ><b-col>
          <b-form-group id="input-group-2" label="city :" label-for="input-2">
            <b-form-input
              id="input-2"
              type="text"
              required
              placeholder="Enter city"
            ></b-form-input>
          </b-form-group> </b-col
        ><b-col>
          <b-form-group id="input-group-2" label="state :" label-for="input-2">
            <b-form-input
              id="input-2"
              type="text"
              required
              placeholder="Enter state"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="input-group-2"
            label="zip code :"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              type="text"
              required
              placeholder="Enter zip code"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
    </b-container>

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
