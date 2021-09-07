<template>
  <v-footer padless class="mt-5">
    <v-card
      flat
      tile
      class="primary white--text text-center align-self-md-stretch"
      width="100%"
    >
      <v-img src="/Dronbreen_sunrise.jpg">
        <v-row align="center">
          <v-col cols="6">
            <h3 class="white--text">Join the community</h3>
          </v-col>
          <v-container>
            <v-row>
              <v-col cols="4" align-items="left" class="ml-6 mt-n8">
            <v-form>
              
              <v-text-field 
                label="Email"
                dense
                rounded
                outlined
                color="white"
                :rules="[rules.required, rules.email]"
              ></v-text-field>
            </v-form>
              </v-col></v-row></v-container>
          <v-col cols="3">
            <v-card-text>
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4 white--text"
                icon
                :href="icon.link"
              >
                <v-icon size="24px">{{ icon.icon }}</v-icon>
              </v-btn>
            </v-card-text>
          </v-col>
        </v-row>
        <v-row align="end">
          <v-col cols="12" class="mt-12">
          <v-card-text class="white--text pt-0"> test</v-card-text>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="mt-14">
          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} - CryoCommunity
          </v-card-text>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  components: {},
  data: () => ({
    icons: [
      {
        icon: "fab fa-twitter",
        link: "https://twitter.com/cryocommunity?s=21",
      },
    ],
  }),
};
</script>


<script>
  export default {
    data () {
      return {
        title: 'Preliminary report',
        email: '',
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
      }
    },
  }
</script>