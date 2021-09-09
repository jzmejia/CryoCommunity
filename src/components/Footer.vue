<template>
  <v-footer padless>
    <v-img src="/turnabreen_footer.jpg">
      <v-container>
        <v-row style="height: 100px"> </v-row>
        <!-- <v-card flat tile class="primary white--text text-center align-self-md-stretch" width="100%"> -->

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
                    dark
                    outlined
                  ></v-text-field>
                </v-form>
              </v-col>
            </v-row>
          </v-container>
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
      </v-container>
    </v-img>
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

