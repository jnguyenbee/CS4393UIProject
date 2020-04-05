<template>
  <div>
    <b-form>
      <b-card class="mt-3"
        ><h1>Sign-Up</h1>
        <b-form-group id="input-group-0" label="Your Name:" label-for="input-2">
          <div class="row">
            <div class="col">
              <b-form-input
                id="input-0"
                required
                placeholder="Enter first name"
              ></b-form-input>
            </div>
            <div class="col">
              <b-form-input
                id="input-0"
                required
                placeholder="Enter last name"
              ></b-form-input>
            </div>
          </div>
        </b-form-group>

        <b-form-group id="input-group-1" label="Username:" label-for="input-1">
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
        <div class="text-center">
          <b-button type="submit" variant="primary">Sign Up</b-button>
        </div>
      </b-card>
      <b-card>
        Already have an account?
        <router-link v-bind:to="'/signin'">Sign-in</router-link>
      </b-card>
    </b-form>
  </div>
</template>

<script></script>
<style scoped>
@import '../../../../client/static/app.css';
.card {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
  max-width: 500px;
}
</style>
