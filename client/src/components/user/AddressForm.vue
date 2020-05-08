<template>
  <b-form>
    <h6>shipping address</h6>
    <b-container>
      <b-form-group id="input-group-1" label="address :" label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          required
          placeholder="Enter adresss"
        ></b-form-input>
      </b-form-group>

      <b-row>
        <b-col>
          <b-form-group id="input-group-2" label="city :" label-for="input-2">
            <b-form-input
              id="input-2"
              type="text"
              required
              placeholder="Enter city"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
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
    <b-card>
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group
          id="input-group-1"
          label="Card Number"
          label-for="input-1"
          description="We'll never share your credit information anyone else."
        >
          <b-form-input
            id="input-1"
            required
            placeholder="####-####-####-####"
            v-cardformat:formatCardNumber
          ></b-form-input>
        </b-form-group>
        <b-row>
          <b-col>
            <b-form-group
              id="input-group-1"
              label="Card Expiration"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                required
                placeholder="##/####"
                v-cardformat:formatCardExpiry
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              id="input-group-1"
              label="Card CVS"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                required
                placeholder="####"
                v-cardformat:formatCardCVC
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </b-form>
    </b-card>
  </b-form>
</template>
