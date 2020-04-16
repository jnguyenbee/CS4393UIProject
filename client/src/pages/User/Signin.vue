<template>
  <div>
    <div v-for="v in users" :key="v.id">
      <p>username : {{v.userName}} password: {{ v.password}}</p>
    </div>
    <b-form @submit="checkUser" action="http://localhost:8080/?#/Home/">
      <b-card class="mt-3">
        <h1>Sign-In</h1>
        <b-form-group id="input-group-1" label="Username :" label-for="input-1">
          <b-form-input
            id="input-1"
            type="user"
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
        <br />Forgot Password?
      </b-card>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        userName: "",
        password: ""
      }
    };
  },
  
  created() {
    this.$store.dispatch("allUsers");
  },

  computed: {
    users() {
      return this.$store.getters.allUsers;
    }
  },
  methods: {

    checkUser() {
//      alert(" inside check user ");

      /*
      const productById = this.$store.getters.productById(
        this.$route.params["id"]
        //this.$route.params["userName"]
      );
      //alert(this.$route.params["userName"]);
      return Object.assign({}, productById);*/
    }
  }
};
</script>
<style scoped>
@import "../../../../client/static/app.css";
.card {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
  max-width: 500px;
  background: rgb(248, 243, 243);
}
</style>
