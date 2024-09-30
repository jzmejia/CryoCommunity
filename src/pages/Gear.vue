<template>
  <Layout>
    <v-container>
      <v-row justify="left">
        <!-- <v-col cols="12" lg="9" class="mb-6"> -->
        <v-col cols="12" lg="9" class="mb-6">
          <div class="text-md-h3 text-h4 font-weight-black text-break">
            Gear Sharing
          </div>
          <div class="text-capitalize text-h5 grey--text mb-6">
            a platform to share gear required for polar fieldwork
          </div>
          <div>
          <p>
            A need for connection to resources regarding gear sharing, packing lists, 
            and a list of local used gear shops.
            To address this need, we are collaborating with CryoCommunity
            and Mariama Dryak with the Polar Science Early Career Community 
            Office <g-link to="https://psecco.org/">PSECCO</g-link> to develop 
            a gear sharing database through that will directly connect individuals 
            seeking to borrow gear to those willing to lend gear. 
            Additionally, any region or discipline-specific packing lists for fieldwork 
            are being collected in a separate Google sheet and made available to the community. 
          </p>
          </div>

        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-card
            varient="elevated"
            rounded="lg"
          >
            <v-card-title>Request</v-card-title>
            <v-card-subtitle>browse our database of available gear or make a request to the community</v-card-subtitle>
            <v-list-item>
              <v-list-item-content>
                <v-btn>Request</v-btn>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-btn>Browse</v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <div class="text-center text-caption">Using Props Only</div>
        </v-col>
        <v-col cols="12" md="4">
          <v-card
            varient="tonal"
            rounded="lg"
          >
            <v-card-title>Lend</v-card-title>
            <v-list-item link lines="two">
              contribute
            </v-list-item>
          </v-card>
        
        </v-col>
        <v-col cols="12" md="4">
          <v-card
            rounded="lg"
          ><v-card-title>Resources</v-card-title>
          <v-list-item>
              <v-list-item-content>
                Packing lists and guides
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-btn>repair</v-btn>
              </v-list-item-content>
            </v-list-item>
        </v-card>
        
        </v-col>
      </v-row>



      <v-row>
        <!-- <v-col cols="12" md="8" lg="6" class="pr-md-10 pr-4"> -->
        <v-col cols="12">


        

        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" class="mx-4 mx-md-0">
          <ShareButtons />
          <div class="text-caption my-4"/>
          <v-divider />
          <div class="text-caption my-4">
            For more information on the motivation and future vision of this gear sharing project, check out the
            <g-link to="/projects/gear-sharing-program/">Gear Sharing project page</g-link>.
          </div>
          <!-- <v-divider /> -->
          <!-- <div class="text-caption my-4">
            If you want to get involved join our slack channel 
          </div>
          <v-btn 
            varient="tonal"
            href="https://join.slack.com/t/vicesquads/shared_invite/zt-2fo1ysjxx-jgatSVL0knF5TxXAk3x0xg"
          >join us on slack</v-btn>
          <div class="text-caption my-4"/>
          <v-divider />
          <div class="text-caption my-4"/> -->
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
import ShareButtons from "~/components/ShareButtons";

  export default {
  components: { ShareButtons },
    name: "VICE",
    metaInfo: {
      title: 'VICE',
    },
    computed: {
      dark() {
        return this.$vuetify.theme.dark;
      },
      smAndDown() {
        return this.$vuetify.breakpoint.smAndDown;
      },
    },
    // methods: {
    //   showEvent({ nativeEvent, event }) {
    //     const open = () => {
    //       this.selectedEvent = event;
    //       this.selectedElement = nativeEvent.target;
    //       requestAnimationFrame(() =>
    //         requestAnimationFrame(
    //           () => (this.selectedOpen = true)
    //         )
    //       );
    //     };

    //     if (this.selectedOpen) {
    //       this.selectedOpen = false;
    //       requestAnimationFrame(() =>
    //         requestAnimationFrame(() => open())
    //       );
    //     } else {
    //       open();
    //     }

    //     nativeEvent.stopPropagation();
    //   },
    // },
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