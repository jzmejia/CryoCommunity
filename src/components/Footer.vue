<template>
  <v-footer>
    <v-container>
      <v-row>
        <v-col cols="4" align="right" offset="8"
          ><h5>join the community</h5>
          <div><email-bar /></div>
        </v-col>
        <v-col cols="3">
          <!-- <div class=" overline">SITE MAP</div> -->
          <!-- <v-divider></v-divider> -->
          <!-- <v-subheader>Site map</v-subheader> -->
          <div v-for="(link, index) in sitemap" :key="index">
            <v-btn text :small="smAndDown" plain :to="link.path">{{ link.title }} </v-btn>
          </div>
        </v-col>
        <v-col cols="3" class="ml-n6 mr-6">
          <!-- <span class="overline">career stage</span> -->
          <!-- <v-divider></v-divider> -->
          <div v-for="(link, index) in featured" :key="index">
            <v-btn text plain :small="smAndDown" :to="link.path">{{ link.title }} </v-btn>
          </div>
        </v-col>
        <v-col cols="3">
          <!-- <span class="overline ml-3 font-weight-medium"></span> -->
          <div v-for="(link, index) in other" :key="index">
            <v-btn text plain :small="smAndDown" :to="link.path">{{ link.title }} </v-btn>
          </div>
        </v-col>
        <v-col class="caption my-0 py-0 mt-8 d-flex align-center" cols="12">
         
          <svg viewBox="0 0 15 15" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          width="15" 
          height="15">
          <path d="M10.146 10.146l-.353.354.707.707.354-.353-.708-.708zM13.5 7.5l.354.354.353-.354-.353-.354-.354.354zm-2.646-3.354l-.354-.353-.707.707.353.354.708-.708zm-6.708 6.708l.354.353.707-.707-.353-.354-.708.708zM1.5 7.5l-.354-.354-.353.354.353.354L1.5 7.5zm3.354-2.646l.353-.354-.707-.707-.354.353.708.708zm6 6l3-3-.708-.708-3 3 .708.708zm3-3.708l-3-3-.708.708 3 3 .708-.708zm-9 3l-3-3-.708.708 3 3 .708-.708zm-3-2.292l3-3-.708-.708-3 3 .708.708zm6.153-6.436l-2 12 .986.164 2-12-.986-.164z" fill="currentColor">
            </path>
            </svg> 
           <span class="ml-1"> with </span>
          <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M6.5 5.5l1 1 1-1a1.414 1.414 0 112 2l-3 3-3-3a1.414 1.414 0 112-2z" stroke="currentColor"></path></svg>
          by <a class="mx-1" href="https://github.com/jzmejia/">J. Mejia</a> 
          and <a class="mx-1" href="https://twitter.com/LummusMalisse">M. Lummus</a>
          
          </v-col>
          
        
        <v-col cols="12" class="caption mt-0 pt-0 ml-1 mb-4">
          &copy; {{ new Date().getFullYear() }}
          {{ $static.metadata.siteName }}
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import EmailBar from "./EmailBar.vue";

export default {
  components: {
    EmailBar,
  },
  data: () => ({
    icons: [
      {
        icon: "fab fa-twitter",
        link: "https://twitter.com/cryocommunity?s=21",
      },
    ],
    sitemap: [
      { title: "Home", path: "/" },
      { title: "About", path: "/about" },
      { title: "Team", path: "/team" },
      { title: "Projects", path: "/projects" },
      { title: "Resources", path: "/resources" },
      { title: "Contact", path: "/contact" },
    ],
    featured: [
      { title: "career stage", path: "/careerstage"},
      { title: "undergraduates", path: "/careerstage" },
      { title: "graduate students", path: "/careerstage" },
      { title: "early career", path: "/careerstage" },
      { title: "pi's", path: "/careerstage" },
    ],
    other: [
      { title: "Geo Grad App", path: "http://geogradapp.com" },
      { title: "CryoSciListen", path: "https://cryoscilisten.weebly.com" },
      { title: "Best Practices", path: "/projects" },
      { title: "URGE", path: "https://urgeoscience.org/" },
    ],
  }),
  computed: {
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown;
    }
  },
};
</script>

