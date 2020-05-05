<template>
  <div>
    <b-form @submit="checkUser">
      <b-card class="mt-3">
        <h1>Admin Sign-In</h1>
        <b-form-group id="input-group-1" label="Username :" label-for="input-1">
          <b-form-input
            id="input-1"
            type="string"
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
          <b-button type="submit" variant="primary">Login</b-button>
        </div>
      </b-card>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        userName: '',
        password: '',
      },
    };
  },

  methods: {
    checkUser() {
      var userName = this.user.userName;
      var password = this.user.password;

      var uNm = 'Joe';
      var pw = 'stinks';

      if (uNm === userName && pw === password) {
        this.$router.push('Admin');
      } else {
        alert('You are not the admin');
      }
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
