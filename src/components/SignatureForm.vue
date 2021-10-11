<template>
  <v-form
    name="signature"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="handleSubmit"
    data-netlify-recaptcha="true"
  >
    <input type="hidden" name="form-name" value="signature" />
    <p hidden>
      <label>Don’t fill this out: <input name="bot-field" /> </label>
    </p>
    <v-card outlined>
      <v-card-actions>
        <v-text-field
          v-model="formData.name"
          name="name"
          :rules="nameRules"
          label="Name"
          required
          class="rounded-2"
          color="primary"
          autocomplete="off"
        ></v-text-field>
      </v-card-actions>
      <v-card-actions>
        <v-text-field
          v-model="formData.email"
          name="email"
          :rules="emailRules"
          label="E-mail"
          required
          class="rounded-2"
          color="primary"
          autocomplete="off"
        ></v-text-field>
      </v-card-actions>
      <v-card-actions>
        <v-textarea
          rows="1"
          v-model="formData.affil"
          name="affiliation"
          :rules="messageRules"
          label="Affiliation"
          class="rounded-2"
          color="primary"
        ></v-textarea>
      </v-card-actions>
      <v-card-actions>
        <div data-netlify-recaptcha="true"></div>
      </v-card-actions>
      <v-card-actions>
        <v-btn type="submit" :loading="loading" color="primary" depressed block>
          add your signature
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
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
      (v) => (v && v.length > 2) || "Name must be greater than 2 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "Email is required",
      (v) => /.+@.+\..+/.test(v) || "Email must be valid",
    ],
    affil: "",
    affilRules: [(v) => !!v || "Message is required"],
  }),
  metaInfo: {
    title: "Signature",
  },
  metaInfo: {
    title: "Signature",
  },
  computed: {
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    dark() {
      return this.$vuetify.theme.dark;
    },
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
        .then(() => this.$router.push("/success"))
        .catch((error) => {
          this.loading = false;
          console.log(error.toJSON());
        });
    },
  },
};
</script>
