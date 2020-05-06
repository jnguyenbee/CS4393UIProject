<template>
  <div>
    <div v-for="review in reviews" :key="review.id">
      <b-card no-body class="overflow-hidden" border-variant="light">
        <b-row no-gutters>
          <b-col md="8">
            <h1>
              <b-badge variant="info" style="width:100%">
                {{
                review.username
                }}
              </b-badge>
            </h1>
            <h5>{{ review.description }}</h5>
          </b-col>
          <h1>
            <b-badge variant="warning" style="width:100%; height:50%">Rated: {{ review.rating }}</b-badge>
          </h1>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<style scoped></style>

<script>
//import ProductReview from './ProductReview';
export default {
  data() {
    //const reviews = this.$store.getters.reviewById(this.$route.params['id']);
    return {
      items: {}
      // product: {},
      //reviews: this.$store.getters.reviewById(this.$route.params['id'])
      // model: this.$store.getters.productById(this.$route.params['id']),
      //reviews: this.$store.dispatch("reviewById", this.product._id)
    };
  },
  props: ["product"],
  components: {
    //  'product-review': ProductReview
  },
  computed: {
    reviews() {
      var items = [];
      this.$store.dispatch("reviewById", this.product._id);
      items = this.$store.state.review;
      return items;
    }
  },
  mounted() {
    this.$store.getters.allReviews;
  }
};
</script>
