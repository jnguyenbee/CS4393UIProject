<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3500"
      controls
      indicators
      background="#FFF"
      style="text-shadow: 3px 5px 5px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="Your Order Has Been Recieved"
        text="Your socks will be delivery to you in 3- 5 business day!"
      >
        <template v-slot:img>
          <img
            class="rounded mx-auto d-block w-50"
            width="100%"
            height="700px"
            src="http://localhost:5000/uploads/bagged.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="rounded mx-auto d-block w-50"
            width="50%"
            height="700px"
            src="http://localhost:5000/uploads/thanks.png"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
    <hr />
    <div class="text-center">
      <b-button
        href="https://www.linkedin.com/in/katherine-powell-0b192812a/"
        variant="outline-primary"
      >Katherine Powell</b-button>
      <b-button
        href="https://www.linkedin.com/in/kolleen-salinda-05585b127/"
        variant="outline-secondary"
      >Kolleen Salinda</b-button>
      <b-button
        href="https://www.linkedin.com/in/jnguyenbee/"
        variant="outline-success"
      >Jennifer Nguyen</b-button>
      <b-button
        href="https://www.linkedin.com/in/joe-garcia-547223123/"
        variant="outline-danger"
      >Joe Garcia</b-button>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  },
  mounted() {
    if (localStorage.getItem("reloaded")) {
      // The page was just reloaded. Clear the value from local storage
      // so that it will reload the next time this page is visited.
      localStorage.removeItem("reloaded");
    } else {
      // Set a flag so that we know not to reload the page twice.
      localStorage.setItem("reloaded", "1");
      location.reload();
    }
  }
};
</script>

<style scoped>
</style>
