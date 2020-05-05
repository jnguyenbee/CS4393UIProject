<template>
  <div>
    <div class="title">
      <h1>
        <i></i>
        Thank you for your purchase!
      </h1>
      <hr />
      <div class="text-center">
        <b-button
          href="https://www.linkedin.com/in/katherine-powell-0b192812a/"
          variant="outline-primary"
          >Katherine Powell
        </b-button>
        <b-button
          href="https://www.linkedin.com/in/kolleen-salinda-05585b127/"
          variant="outline-secondary"
          >Kolleen Salinda</b-button
        >
        <b-button
          href="https://www.linkedin.com/in/jnguyenbee/"
          variant="outline-success"
          >Jennifer Nguyen</b-button
        >
        <b-button
          href="https://www.linkedin.com/in/joe-garcia-547223123/"
          variant="outline-danger"
          >Joe Garcia</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
};
</script>

<style scoped></style>
