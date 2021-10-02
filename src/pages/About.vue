<template>
  <Layout>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <div
            class="text-h2 primary--text font-weight-black"
            :class="{ 'text-center': smAndDown }"
          >
            About Us
          </div>
          <!-- </v-col>
    <v-col cols="12" lg="4"> -->
          <!-- <div class="text-lg-h1 text-h3 font-weight-black secondary--text">About</div> -->
          <v-chip-group column>
            <v-chip
              :color="dark ? 'grey darken-4' : 'grey lighten-5'"
              href="https://twitter.com/cryocommunity"
            >
              <svg
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
              >
                <path
                  d="M14.478 1.5l.5-.033a.5.5 0 00-.871-.301l.371.334zm-.498 2.959a.5.5 0 10-1 0h1zm-6.49.082h-.5.5zm0 .959h.5-.5zm-6.99 7V12a.5.5 0 00-.278.916L.5 12.5zm.998-11l.469-.175a.5.5 0 00-.916-.048l.447.223zm3.994 9l.354.353a.5.5 0 00-.195-.827l-.159.474zm7.224-8.027l-.37.336.18.199.265-.04-.075-.495zm1.264-.94c.051.778.003 1.25-.123 1.606-.122.345-.336.629-.723 1l.692.722c.438-.42.776-.832.974-1.388.193-.546.232-1.178.177-2.006l-.998.066zm0 3.654V4.46h-1v.728h1zm-6.99-.646V5.5h1v-.959h-1zm0 .959V6h1v-.5h-1zM10.525 1a3.539 3.539 0 00-3.537 3.541h1A2.539 2.539 0 0110.526 2V1zm2.454 4.187C12.98 9.503 9.487 13 5.18 13v1c4.86 0 8.8-3.946 8.8-8.813h-1zM1.03 1.675C1.574 3.127 3.614 6 7.49 6V5C4.174 5 2.421 2.54 1.966 1.325l-.937.35zm.021-.398C.004 3.373-.157 5.407.604 7.139c.759 1.727 2.392 3.055 4.73 3.835l.317-.948c-2.155-.72-3.518-1.892-4.132-3.29-.612-1.393-.523-3.11.427-5.013l-.895-.446zm4.087 8.87C4.536 10.75 2.726 12 .5 12v1c2.566 0 4.617-1.416 5.346-2.147l-.708-.706zm7.949-8.009A3.445 3.445 0 0010.526 1v1c.721 0 1.37.311 1.82.809l.74-.671zm-.296.83a3.513 3.513 0 002.06-1.134l-.744-.668a2.514 2.514 0 01-1.466.813l.15.989zM.222 12.916C1.863 14.01 3.583 14 5.18 14v-1c-1.63 0-3.048-.011-4.402-.916l-.556.832z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>CryoCommunity</span>
            </v-chip>
            <v-chip
              :color="dark ? 'grey darken-4' : 'grey lighten-5'"
              to="/contact"
            >
              <svg
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
              >
                <path
                  d="M.5 4.5l7 4 7-4m-13-3h12a1 1 0 011 1v10a1 1 0 01-1 1h-12a1 1 0 01-1-1v-10a1 1 0 011-1z"
                  stroke="currentColor"
                ></path>
              </svg>
              <span>CryosphereCommunity@gmail.com</span>
            </v-chip>
          </v-chip-group>
        </v-col>
        <v-col cols="12" :class="{ 'pa-0': smAndDown }">
          <v-card
            :rounded="smAndDown ? '0' : 'lg'"
            flat
            :color="dark ? '' : 'grey lighten-5'"
          >
            <v-card-title class="text-h6 font-weight-black text-uppercase"
              >who we are</v-card-title
            >

            <v-card-text class="text--primary">
              CryoCommunity is the product of the
              <b>MARS pod's</b> (Midwest And Random Stragglers glaciology)
              participation in
              <g-link href="https://urgeoscience.org/">URGEGeosciences</g-link>
              in Spring 2021. Members of our
              <g-link to="/team">URGE pod</g-link> represent many different
              institutions and we seek to involve the broader cryospheric
              community in positive change. We started this website to generate,
              collate, and distribute best practices across a suite of academic
              processes and institution types.
            </v-card-text>

            <v-card-title class="text-h6 font-weight-black text-uppercase">
              our mission
            </v-card-title>
            <v-card-text class="text--primary">
              The purpose of CryoCommunity is to build and foster a more just,
              equitable, diverse, and inclusive community and culture within the
              cryospheric sciences. We recognize that systematic racism and
              sexism are harmful barriers inherent in academic institutions.
              CryoCommunity aims to share resources and best practices across
              the community and to advocate for the changes needed to create an
              equitable and inclusive culture.
            </v-card-text>

            <v-card-title class="text-h6 font-weight-black text-uppercase"
              >our vision</v-card-title
            >
            <v-card-text class="text--primary">
              Our vision is for cryocommunity.org to as a hub for JEDI resources
              in the cryospheric sciences. While we will continue to share best
              practices and resources developed and currated by the MARS URGE
              pod, we would like to spotlight work by groups within the larger
              glaciological community, and by
              <g-link to="/contact">guest writers</g-link>. This less formal
              format gives us all the flexibility to share helpful information
              free of any pay-walls.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>
<script>
export default {
  name: "About",
  data() {
    return {};
  },
  computed: {
    dark() {
      return this.$vuetify.theme.dark;
    },
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>

<style scoped>
.text--primary {
  font-family: Lato, sans-serif;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  box-sizing: inherit;
  line-height: 32px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  display: block;
}
</style>
