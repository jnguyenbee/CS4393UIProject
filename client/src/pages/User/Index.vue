<template>
  <div>
    <div>
      <p>This is the index for User page</p>
    </div>
    <sign-in></sign-in>
  </div>
</template>

<script>
import Signin from './Signin';
export default {
  name: 'Index',
  components: {
    'sign-in': Signin,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
