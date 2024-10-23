<template>
  <Layout>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" lg="9">
          <div class="text-h3 font-weight-bold d-flex align-center justify-space-between">
            About Us
            <div>
              <v-btn icon href="https://twitter.com/cryocommunity">
                <TwitterIcon />
                <!-- <span v-else>@CryoCommunity</span> -->
              </v-btn>
              <v-btn icon to="/contact/">
                <EmailIcon />
                <!-- <span v-else>Email</span> -->
              </v-btn>
            </div>
          </div>
        </v-col>

        <v-col cols="12" lg="9" class="text-body-1">
          <div>
            <div class="text-h5 text-md-h4 font-weight-bold my-2">
              Community
            </div>
            CyroCommunity is the product of the
            <b>MARS pod's</b> (Midwest And Random Stragglers glaciology)
            participation in
            <g-link href="https://urgeoscience.org/">URGEGeosciences</g-link>
            in Spring 2021. Members of our
            <g-link to="/team">URGE pod</g-link> represent many different
            institutions and we seek to involve the broader cryospheric
            community in positive change. We started this website to generate,
            collate, and distribute best practices across a suite of academic
            processes and institution types.
          </div>
          <div>
            <div class="text-h5 text-md-h4 font-weight-bold my-2">Mission</div>

            Our mission is to build and foster a more just, equitable, diverse,
            and inclusive community and culture within the cryospheric sciences.
            We recognize that systematic racism and sexism are harmful barriers
            inherent in academic institutions. CryoCommunity aims to share
            resources and best practices across the community and to advocate
            for the changes needed to create an equitable and inclusive culture.
          </div>
          <div>
            <div class="text-h5 text-md-h4 font-weight-bold my-2">Vision</div>
            Our vision is for cryocommunity.org to as a hub for JEDI resources
            in the cryospheric sciences. While we will continue to share best
            practices and resources developed and currated by the MARS URGE pod,
            we would like to spotlight work by groups within the larger
            glaciological community, and by
            <g-link to="/contact">guest writers</g-link>. This less formal
            format gives us all the flexibility to share helpful information
            free of any pay-walls.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
import EmailIcon from "~/assets/svgs/envelope.svg";
import TwitterIcon from "~/assets/svgs/twitter.svg";

export default {
  name: "About",
  metaInfo: {
    title: "About",
  },
  components: { EmailIcon, TwitterIcon },
};
</script>

<!-- <style scoped>
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
</style> -->
