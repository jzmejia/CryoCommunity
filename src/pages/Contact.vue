<template>
  <Layout>
    <v-container fill-height justify-center>
      <v-card flat class="mx-auto">
        <v-card-title class="text-h2">Contact Us</v-card-title>
        <v-card-subtitle>
          Send us a message using this form below or an email to
          <g-link
            class="text-decoration-none"
            href="mail:cryospherecommunity@gmail.com"
            >cryospherecommunity@gmail.com</g-link
          >
        </v-card-subtitle>
        <v-card-text>
          <v-form
            ref="form"
            v-model="valid"
            data-netlify="true"
            data-netlify-recaptcha="true"
            data-netlify-honeypot="bot-field"
            @submit.prevent="handleSubmit"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label> Don’t fill this out: <input name="bot-field" /> </label>
            </p>
            <v-text-field
              outlined
              v-model="formData.name"
              name="name"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              outlined
              v-model="formData.email"
              name="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-textarea
              outlined
              rows="8"
              v-model="formData.message"
              name="message"
              :rules="messageRules"
              label="Message"
              required
            ></v-textarea>
            <v-btn type="submit" :disabled="!valid" color="success">
              Submit
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </Layout>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    valid: true,
    formData: {},
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      //(v) => (v && v.length <= 30) || "Name must be less than 10 characters",
      (v) => (v && v.length > 2) || "Name must be greater than 2 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "Email is required",
      (v) => /.+@.+\..+/.test(v) || "Email must be valid",
    ],
    message: "",
    messageRules: [(v) => !!v || "Message is required"],
  }),
  metaInfo: {
    title: "About us",
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit() {
      if (!this.$refs.form.validate()) return;

      const config = {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      };
      const data = new URLSearchParams();
      data.append("form-name", "contact");
      data.append("name", this.formData.name);
      data.append("email", this.formData.email);
      data.append("message", this.formData.message);

      axios
        .post(
          "/",
          data,
          config
        )
        .then(() => this.$router.push("/success"))
        .catch((error) => {
          console.log(error.toJSON());
        });
    },
  },
};
</script>