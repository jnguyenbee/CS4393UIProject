<template>
<div class="container">
<div id="contactJumbo">
  <div class = "jumbotron">
    <h1 class="display-1">Contact Us</h1>
      <div><small>Phone: 1-800-867-5309</small></div>
      <div><small>Email: support@RainbowMangos.com</small></div>
  </div>
</div>
  <h2 class="display-4">Frequently Asked Questions</h2>
  <div> 
    <p></p>
    <b-dropdown
      text="Why the name Rainbow Mangos?"
      block
      variant="outline-info"
      class="m-2"
      menu-class="w-100"
    >
      <b-dropdown-text>
        The name of our company is a tribute to our roots. 
        It all started with a little girl who loved to tie dye socks for all of her friends.
        The name Rainbow was already taken so we added her favorite fruit to the name!
      </b-dropdown-text>
    </b-dropdown>

    <b-dropdown
      text="How do I make a return?"
      block
      variant="outline-info"
      class="m-2"
      menu-class="w-100"
    >
      <b-dropdown-text>
        Call the customer service number 1-800-687-5309 and we will get that return all sorted out!
      </b-dropdown-text>
    </b-dropdown>

    <b-dropdown
      text="Are these socks vegan and cruelty free?"
      block
      variant="outline-info"
      class="m-2"
      menu-class="w-100"
    >
      <b-dropdown-text>
        Absolutely! They are even bio-degradable! We also donate a portion of our proceeds to helping the environment.
      </b-dropdown-text>
    </b-dropdown>

    <b-dropdown
      text="Can I get a discount?"
      block
      variant="outline-info"
      class="m-2"
      menu-class="w-100"
    >
      <b-dropdown-text>
        We currently don't have any discounts yet as we are still an up and coming company. Our top priority is making
        providing quality products and living wages for our employees.
      </b-dropdown-text>
    </b-dropdown>
  </div>
  <p></p>
  <h2 class="display-4">Send us a message:</h2>
  <div>
    <b-form >
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Message:" label-for="input-3">
        <b-form-textarea
          id="textarea"
          v-model="form.text"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-button-group>
        <b-button @click="onSubmit" type="submit" variant="primary">Send</b-button>
        <b-button @click="onReset" type="reset" variant="danger">Clear</b-button>
      </b-button-group>
    </b-form>
  </div>
</div>

</template>

<script>
export default {
  show: false,
  name: 'Contact',
  data() {
      return {
        form: {
          email: '',
          name: '',
          text: ''
        },
      }
    },
    methods: {
      onSubmit() {
        alert("Message Sent. We will get back to you within 3 business days.");
      },
      onReset() {
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.text = ''
        this.show = false;
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #contactJumbo .jumbotron{
    text-align: center;
    padding: 1px;
    background-color:rgb(240, 241, 245);
  }
</style>