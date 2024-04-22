<template>
  <Layout>
    <v-container>
      <v-row justify="left">
        <v-col cols="12" lg="9" class="mb-6">
          <div class="text-md-h3 text-h4 font-weight-black text-break">
            VICE Squads
          </div>
          <div class="text-capitalize text-h5 grey--text">
            Virtual Ice Community Engagement Squads
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="8" lg="6" class="pr-md-10 pr-4">
          <p>
            We are excited to announce the soft-launch of <g-link to="/projects/introducing-vice-squads/">Virtual Ice Community Engagement (VICE) Squads</g-link> in
            Feburary 2024.

          </p>
          <div class="text-h5 text-md-h4 font-weight-bold mb-1">
            What are VICE Squads?
          </div>
          <p>
            VICE Squads are topical or geographically organized groups that link scholars across sub-fields, institutions, and career stages.
          </p>
          <p>
            Topics will evolve and some squads may be permanent while others only exist for a few years or months based on the evolving interests of the community. Some squads may have dozens of members and others may have a handful. We aim for these groups to become self-organizing and fluid–-both appearing and dissolving based on community interest and need. Individuals can choose to participate in as many (or few) communities as they want. The goal is for the individual squads to meet roughly monthly to initially discuss program prompts determined by the steering committee and project coordinator with input from each squad member, and evolve naturally as the conversation continues.
          </p>
          <div class="text-h5 text-lg-h4 font-weight-bold my-4 mt-8 pt-2">
            Upcoming Events
          </div>
          <p>
            See below for upcoming scheduled events. Be sure to check back as new events get added. 
            To register for an event send an email to <a href="mailto: cryospherecommunity@gmail.com">cryospherecommunity@gmail.com</a> 
            or join our slack workspace. Meets for individual VICE squads will be scheduled and posted only on the Slack channel.

          </p>    
        
        <v-sheet height="400px">
          <v-calendar
            ref="calendar"
            v-model="focus"
            :type="type"
            :events="events"
            @click:event="showEvent"
          />
        </v-sheet>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card min-width="200px">
            <v-toolbar>
              <v-toolbar-title >{{selectedEvent.name}}</v-toolbar-title>
            </v-toolbar>
            <v-card-text>            
              <div>
                {{selectedEventStart}} to {{selectedEventEnd}}
              </div>
            </v-card-text>
          </v-card>
        </v-menu>
 
        <v-container>
          <v-row>
            <v-col cols="auto" class="me-auto">
              <v-btn @click="$refs.calendar.prev()">
                back
              </v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn @click="$refs.calendar.next()">
                forward
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" class="mx-4 mx-md-0">
          <ShareButtons />
          <div class="text-caption my-4"/>
          <v-divider />
          <div class="text-caption my-4">
            For more information on VICE Squads, including our expansion plans, check out the
            <g-link to="/projects/introducing-vice-squads/">VICE Squads Project Page</g-link>.
          </div>
          <v-divider />
          <div class="text-caption my-4">
            If you want to get involved join our slack channel 
          </div>
          <v-btn 
            varient="tonal"
            href="https://join.slack.com/t/vicesquads/shared_invite/zt-2fo1ysjxx-jgatSVL0knF5TxXAk3x0xg"
          >join us on slack</v-btn>
          <div class="text-caption my-4"/>
          <v-divider />
          <div class="text-caption my-4"/>
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
      selectedEventStart() {
      return (
        (this.selectedEvent &&
          this.selectedEvent.start &&
          this.formatEventDate(this.selectedEvent.start)
        )
      );
      },
      selectedEventEnd() {
        return (
          (this.selectedEvent &&
            this.selectedEvent.end &&
            new Date(this.selectedEvent.end).toLocaleString('en-US', {
            hour: 'numeric', minute: 'numeric', timeZoneName: 'short'})
          )
        );
      },
      eventsMap () {
        const map = {}
        this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e))
        return map
      },
    },
    data: () => {
      return {
        focus: '',
        type: 'month',
        selectedOpen: false,
        selectedElement: undefined,
        selectedEvent: {},
        events: [
          {
            name: 'VICE Squad Introduction Meeting',
            start: '2024-02-28T16:00:00',
            end: '2024-02-28T17:00:00',
            timed: true,
            moreInformation: "",
          },
          {
            name: 'VICE Squad General Meeting',
            start: '2024-04-25T10:00:00',
            end: '2024-04-25T11:00:00',
            timed: true,
            moreInformation: "",
          },
        ],
        value: [new Date()],
        end: '2024-05-31',
        start: '2024-02-01',
      };
    },
    methods: {
      showEvent({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event;
          this.selectedElement = nativeEvent.target;
          requestAnimationFrame(() =>
            requestAnimationFrame(
              () => (this.selectedOpen = true)
            )
          );
        };

        if (this.selectedOpen) {
          this.selectedOpen = false;
          requestAnimationFrame(() =>
            requestAnimationFrame(() => open())
          );
        } else {
          open();
        }

        nativeEvent.stopPropagation();
      },
      formatEventDate (date) { 
        const newDateFormat = new Date(date).toLocaleString('en-US', {
            month: 'short', day: '2-digit', hour: 'numeric', minute: 'numeric'
          })
        return newDateFormat
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