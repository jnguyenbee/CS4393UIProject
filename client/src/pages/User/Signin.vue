<template>
  <div>
    <b-form>
      <b-card class="mt-3">
        <h1>Sign-In</h1>
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
        <div class="text-center">
          <b-button type="submit" variant="primary">Login</b-button>
        </div>
      </b-card>
      <b-card>
        Not a member? <router-link v-bind:to="'/signup'">Sign up</router-link>
        <br />
        Forgot Password?
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
