<template>
  <div>
    <b-form>
      <b-card class="mt-3">
        <b-form-text @submit.stop.prevent>
          <label for="feedback-user">User Id</label>
          <b-input
            v-model="userId"
            :state="validation"
            id="feedback-user"
          ></b-input>
          <b-form-invalid-feedback :state="validation">
            Your user ID must be 5-12 characters long.
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validation">
            Looks Good.
          </b-form-valid-feedback>

          <label for="text-password">Password</label>
          <b-input
            type="password"
            id="text-password"
            aria-describedby="password-help-block"
          ></b-input>
          <b-form-text id="password-help-block">
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </b-form-text>
        </b-form-text>
      </b-card>
    </b-form>
  </div>
</template>

<script></script>
<style scoped>
@import '../../../../client/static/app.css';
</style>
