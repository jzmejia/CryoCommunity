
<template>
  <Layout>
    <v-row class="mt-14">
      <v-col cols="12 secondary--text text-h1 mr-6" align-self="end">
        about
      </v-col>
      <v-col cols="6" offset="5">
        <div class="overline">who we are</div>
        <p class="text-justify body-1">
          CryoCommunity is the product of the
          <span class="font-weight-bold">MARS pod's</span> (Midwest And Random
          Stragglers glaciology) participation in <a href="https://urgeoscience.org/">URGEGeosciences</a> in Spring
          2021. Members of our <g-link to="/team">URGE pod</g-link> represent many different
          institutions and we seek to involve the broader cryospheric community in positive change. We started this website to generate, collate, and distribute best practices 
          across a suite of academic processes and institution types.
        </p> </v-col>
        <v-col cols="1"/>
        <v-col cols="6" offset="5">
          <div class="overline">our mission</div>
          <p class="text-justify  body-1">
          The purpose of CryoCommunity is to build and foster a more just, 
          equitable, diverse, and inclusive community and culture within the 
          cryospheric sciences. We recognize that systematic racism and sexism 
          are harmful barriers inherent in academic institutions. CryoCommunity 
          aims to share resources and best practices across the community and to 
          advocate for the changes needed to create an equitable and inclusive 
          culture. 
        </p>
        </v-col>
        <v-col cols="6" offset="5">
          <div class="overline">our vision</div>
          <p class="text-justify  body-1">
          Our vision is for cryocommunity.org to as a hub for JEDI resources 
          in the cryospheric sciences. While we will continue to share 
          best practices and resources developed and currated by the MARS 
          URGE pod, we would like to spotlight work by groups within the larger
          glaciological community, and by <g-link to="/contact">guest writers</g-link>. 
          This less formal format gives us all the flexibility to share helpful 
          information free of any pay-walls.
        </p>
        <div class="overline mt-10">Contact us</div>
        <p>If you are interested in this project follow us on twitter <a href="https://twitter.com/cryocommunity">@cryocommunity</a> and bookmark this site. 
        If you are interested in collaborating, have additonal resources to add, or if there is a correction that needs to be made, send us an email at <span>cryospherecommunity@gmail.com</span></p>
        </v-col>
     <v-col cols="12 secondary--text text-h1 mr-6 pt-10" align-self="end">
        our team
      </v-col>
      
      <teamCard></teamCard>
    </v-row>
    
      

           
          
        
        
 

  </Layout>
</template>
<script>
import aboutData from "~/data/about.yml";
import teamCard from "~/components/TeamCard"

export default {
  components: {
    teamCard,
  },
  data() {
    return {
      aboutData,
    };
  },
};
</script>



