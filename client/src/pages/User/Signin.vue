<template>
  <div>
    <b-form @submit="checkUser">
      <b-card class="mt-3">
        <h1>Sign-In</h1>
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
      <b-card>
        Not a member?
        <router-link v-bind:to="'/'">Sign up</router-link>
      </b-card>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      truth: '',
      user: {
        userName: '',
        password: '',
      },
    };
  },
  mounted() {
    if (localStorage.getItem('reloaded')) {
      // The page was just reloaded. Clear the value from local storage
      // so that it will reload the next time this page is visited.
      localStorage.removeItem('reloaded');
    } else {
      // Set a flag so that we know not to reload the page twice.
      localStorage.setItem('reloaded', '1');
      location.reload();
    }
  },
  created() {
    this.$store.dispatch('allUsers');
  },

  computed: {
    users() {
      return this.$store.getters.allUsers;
    },
  },
  methods: {
    checkUser() {
      var userName = this.user.userName;
      var password = this.user.password;
      //      alert(" inside check user ");
      var i = 0;
      for (i = 0; i < this.users.length; i++) {
        var uNm = this.users[i].userName;
        var pw = this.users[i].password;

        if (uNm === userName && pw === password) {
          this.$router.push('Home');
          break;
        }
      }
      if (i === this.users.length) {
        alert('Invalid user account');
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
