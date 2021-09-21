<template>
  <Layout>
    <v-container>
      <div class="text-h2 mt-15 mb-8 secondary--text">Contact Us</div>
      <p class="text-body-1">
        Send a message with the form below or send an email to
        cryospherecommunity@gmail.com
      </p>

      <v-form
        ref="form"
        v-model="valid"
        method="POST"
        lazy-validation
        name="contact"
        netlify
      >
        <v-text-field
          v-model="name"
          :counter="30"
          :rules="nameRules"
          label="Name"
          required
          autocomplete
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
          autocomplete
        ></v-text-field>

        <v-textarea v-model="message" :rules="messageRules" label="Message" required></v-textarea>
        <v-btn type="submit" :disabled="!valid" color="success" @click="validate" required>
          Submit
        </v-btn>
      </v-form>
    </v-container>
  </Layout>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: process.env.NODE_ENV ? "Jessica Mejia" : "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 30) || "Name must be less than 10 characters",
      (v) => (v && v.length > 2) || "Name must be greater than 2 characters",
    ],
    email: process.env.NODE_ENV ? "jzmejia990@gmail.com" : "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    messageRules: [(v) => !!v || "Name is required",],
    message: process.env.NODE_ENV ? "Test Message" : "",
  }),
  metaInfo: {
    title: "About us",
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>