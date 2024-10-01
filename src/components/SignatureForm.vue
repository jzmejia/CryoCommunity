<template>
  <v-card flat>
    <v-card-text class="pt-0">
      <v-form
        name="signature"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
      >
        <v-text-field
          v-model="formData.name"
          name="name"
          :rules="nameRules"
          label="Name"
          required
          color="primary"
          autocomplete="off"
        ></v-text-field>

        <v-text-field
          v-model="formData.email"
          name="email"
          :rules="emailRules"
          label="E-mail"
          required
          hint="Your e-mail will not be displayed"
          color="primary"
          autocomplete="off"
        ></v-text-field>

        <v-text-field
          v-model="formData.affiliation"
          name="affiliation"
          :rules="affilRules"
          label="Affiliation"
          class="rounded-2"
          color="primary"
        ></v-text-field>
        <!-- data-netlify-recaptcha="true" -->
        <!-- <div data-netlify-recaptcha="true"></div> -->

        <input type="hidden" name="form-name" value="signature" />

        <p hidden>
          <label>Don’t fill this out: <input name="bot-field" /> </label>
        </p>
        <v-btn type="submit" :loading="loading" color="primary" depressed block>
          add your signature
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";
import qs from "query-string";

export default {
  data: () => ({
    loading: false,
    valid: true,
    formData: {},
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length > 2) || "Name must be greater than 2 characters",
    ],
    emailRules: [
      (v) => !!v || "Email is required",
      (v) => /.+@.+\..+/.test(v) || "Email must be valid",
    ],
    affilRules: [(v) => !!v || "Message is required"],
  }),
  methods: {
    handleSubmit() {
      this.loading = true;
      let params = {
        "form-name": "signature",
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
        .then(() =>
          this.$router.push({
            path: "/signature-success",
            query: { success: true },
          })
        )
        .catch((error) => {
          this.loading = false;
          console.log(error.toJSON());
        });
    },
  },
};
</script>
