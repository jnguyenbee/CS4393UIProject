<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand router-link to="/">Rainbow Mangos Company</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item router-link to="/contact">Contact Us</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Sign-in</em>
            </template>
            <b-dropdown-item router-link to="/signin">User</b-dropdown-item>
            <b-dropdown-item router-link to="/admin">Admin</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button variant="outline-warning" size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
          <b-nav-item router-link to="/cart">
            <i class="fa fa-shopping-cart"></i>
            Cart ({{
            cartItemsCount
            }})
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "nav",
  data() {
    return {
      cartItems: this.$store.state.cart
    };
  },
  computed: {
    cartItemsCount() {
      return this.cartItems.length;
    },
    showLoader() {
      return this.$store.state.showLoader;
    }
  }
};
</script>

<style scoped></style>
