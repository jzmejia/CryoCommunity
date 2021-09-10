
<template>
  <Layout>
    <v-row
      class="mt-14"
      align-content="bottom"
    >
    <v-spacer /><v-col cols=6>
    <h1>about us</h1>
    </v-col><v-col cols="5" />
    </v-row>
    <!-- <v-divider /> -->
    <v-row><v-spacer />
      <v-col cols="5" >
      <p class="text-justify">CryoCommunity is the product of the
        <span class="font-weight-bold">MARS pod's</span> (Midwest And Random Stragglers glaciology) 
        participation in URGEGeosciences in Spring 2021.  
        Because members of our URGE pod represent many different 
        institutions, we recognize that our best option to 
        influence the cryospheric community is to collate 
        and distribute best practices across a suite of 
        academic practices so that our community can spread 
        these practices to their home institutions.</p>
      </v-col><v-col cols="1" /></v-row>
    <v-container
      class="pa-4"
    >
    <v-row align="space-around">
      <h3>mission</h3>
      <p class="text-justify">
        The purpose of CryoCommunity is to build and foster 
        a more just, equitable, diverse, and inclusive community 
        and culture within the cryospheric sciences. We recognize 
        that systematic racism and sexism are harmful barriers 
        inherent in academic institutions. CryoCommunity aims to
        share resources and best practices across the community
         and to advocate for the changes needed to create an 
         equitable and inclusive culture. 
      </p>
    </v-row>
    <v-row>
      <h3></h3>
      <v-btn to="/team">Our Team</v-btn>
    </v-row>
    </v-container>

    
    
  </Layout>
</template>
<script>
import aboutData from "~/data/about.yml";

export default {
  data() {
    return {
      aboutData,
    };
  },
};
</script>



