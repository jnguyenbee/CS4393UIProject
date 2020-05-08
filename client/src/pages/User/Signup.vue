<template>
  <div>
    <b-form @submit="saveUser">
      <b-card class="mt-3">
        <h1>Sign-Up</h1>
        <b-form-group id="input-group-0" label="Your Name:" label-for="input-2">
          <div class="row">
            <div class="col">
              <b-form-input
                id="input-0"
                type="text"
                v-model="user.firstName"
                required
                placeholder="Enter first name"
              ></b-form-input>
            </div>
            <div class="col">
              <b-form-input
                id="input-0"
                required
                type="text"
                v-model="user.lastName"
                placeholder="Enter last name"
              ></b-form-input>
            </div>
          </div>
        </b-form-group>
        <b-form-group id="input-group-5" label="Email:" label-for="input-5">
          <b-form-input
            id="input-5"
            type="text"
            v-model="user.email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="Username:" label-for="input-1">
          <b-form-input
            id="input-1"
            type="text"
            v-model="user.userName"
            required
            placeholder="Enter username"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
          <b-form-input
            id="input-2"
            type="password"
            v-model="user.password"
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

<script>
export default {
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        email: '',
      },
    };
  },
  methods: {
    saveUser() {
      //  alert(this.user.firstName);
      this.$store.dispatch('addUser', this.user);
      this.$router.push('/signin');
    },
  },
};
</script>
<style scoped>
@import '../../../../client/static/app.css';
.card {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
  max-width: 500px;
  background: rgb(248, 243, 243);
}
</style>
