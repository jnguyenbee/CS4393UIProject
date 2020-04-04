<template>
  <div>
    <NavBar />
    <p>This is the home page</p>
  </div>
</template>

<script>
import NavBar from '../components/NavigationBar';
export default {
  name: 'Home',
  components: {
    NavBar: NavBar,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
