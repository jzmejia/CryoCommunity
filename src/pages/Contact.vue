<template>
  <Layout>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" lg="9">
          <div class="text-h3 font-weight-bold d-flex align-center justify-space-between">
            Contact Us
            <div>
              <v-tooltip left color="black" transition="fade-transition">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on" icon href="https://twitter.com/cryocommunity">
                    <TwitterIcon />
                  </v-btn>
                </template>
                <span>@CryoCommunity</span>
              </v-tooltip>
            </div>
          </div>
          <div class="text-h6">
            Send us a message
          </div>
        </v-col>

        <v-col cols="12" lg="9">
          <v-form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent="handleSubmit">
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <v-text-field outlined v-model="formData.name" name="name" :rules="nameRules" label="Name" required
              color="primary" autocomplete="off" />

            <v-text-field outlined v-model="formData.email" name="email" :rules="emailRules" label="E-mail" required
              color="primary" autocomplete="off" />

            <v-textarea outlined rows="6" v-model="formData.message" name="message" :rules="messageRules"
              label="Message" color="primary" required />
            <v-btn type="submit" :loading="loading" depressed block>
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
  components: {
    TwitterIcon: () => import("~/assets/svgs/twitter.svg")
  },
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
    title: "Contact",
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
