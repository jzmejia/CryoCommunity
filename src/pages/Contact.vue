<template>
  <Layout>
    <v-container>
      <v-row>
        <!-- <v-col cols="12">
          <div class="text-lg-h2 text-h3 secondary--text">Contact Us</div>
        </v-col> -->
        <v-col cols="12" lg="4">
          <div class="text-lg-h2 text-h3 secondary--text">Contact Us</div>
          <div class="text-subtitle-1 text--disabled">
            Send us a message using this form or an email to
            <br />
            <g-link
              class="text-decoration-none"
              href="mail:cryospherecommunity@gmail.com"
              >cryospherecommunity@gmail.com</g-link
            >
          </div>
        </v-col>
        <v-col cols="12" lg="6" offset-lg="2">
          <v-form
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            @submit.prevent="handleSubmit"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>Don’t fill this out: <input name="bot-field" /> </label>
            </p>
            <v-text-field
              outlined
              v-model="formData.name"
              name="name"
              :rules="nameRules"
              label="Name"
              required
              autocomplete="off"
            ></v-text-field>

            <v-text-field
              outlined
              v-model="formData.email"
              name="email"
              :rules="emailRules"
              label="E-mail"
              required
              autocomplete="off"
            ></v-text-field>

            <v-textarea
              outlined
              rows="6"
              v-model="formData.message"
              name="message"
              :rules="messageRules"
              label="Message"
              required
            ></v-textarea>
            <v-btn
              type="submit"
              :loading="loading"
              color="black"
              dark
              block
              large
              depressed
            >
              send
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
import axios from "axios";
import qs from "query-string";
export default {
  data: () => ({
    valid: true,
    formData: {},
    loading: false,
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
      this.loading = true;

      let params = {
        "form-name": "contact",
        ...this.formData,
      };
      const headers = { "Content-Type": "application/x-www-form-urlencoded" };

      const data = qs.stringify(params);

      axios({
        method: "POST",
        headers,
        data,
        url: "/",
      })
        .then(() => this.$router.push("/success"))
        .catch((error) => {
          this.loading = false;
          console.log(error.toJSON());
        });
    },
  },
};
</script>
