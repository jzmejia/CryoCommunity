<template>
  <Layout>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" lg="9">
          <div class="text-lg-h3 text-h3 font-weight-bold text-break">
            Virtual Ice Community Engagement
          </div>
          <div class="text-capitalize text-lg-h6 text-h4">
            VICE Squads
          </div>
        </v-col>
        <v-col cols="12" lg="6">
          <p>
            We are excited to announce the soft-launch of <g-link to="/projects/introducing-vice-squads/">Virtual Ice
              Community Engagement (VICE) Squads</g-link> in
            Feburary 2024.

          </p>
          <div class="text-h5 text-md-h4 font-weight-bold mb-1">
            What are VICE Squads?
          </div>
          <p>
            VICE Squads are topical or geographically organized groups that link scholars across sub-fields, institutions,
            and career stages.
          </p>
          <p>
            Topics will evolve and some squads may be permanent while others only exist for a few years or months based on
            the evolving interests of the community. Some squads may have dozens of members and others may have a handful.
            We aim for these groups to become self-organizing and fluid–-both appearing and dissolving based on community
            interest and need. Individuals can choose to participate in as many (or few) communities as they want. The
            goal is for the individual squads to meet roughly monthly to initially discuss program prompts determined by
            the steering committee and project coordinator with input from each squad member, and evolve naturally as the
            conversation continues.
          </p>
          <div class="text-h5 text-lg-h4 font-weight-bold my-4 mt-8 pt-2">
            Upcoming Events
          </div>
          <p>
            See below for upcoming scheduled events. Be sure to check back as new events get added.
            To register for an event send an email to <a
              href="mailto: cryospherecommunity@gmail.com">cryospherecommunity@gmail.com</a>
            or join our slack workspace. Meets for individual VICE squads will be scheduled and posted only on the Slack
            channel.

          </p>

          <v-sheet height="400px">
            <v-calendar ref="calendar" v-model="focus" :type="type" :events="events" @click:event="showEvent" />
          </v-sheet>
          <v-menu v-model="selectedOpen" :close-on-content-click="false" :activator="selectedElement" offset-x>
            <v-card min-width="200px">
              <v-toolbar>
                <v-toolbar-title>{{ selectedEvent.name }}</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <div>
                  {{ selectedEventStart }} to {{ selectedEventEnd }}
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

        <v-col cols="12" lg="3" class="text-body-2">
          <div class="sticky_column">
            <ShareButtons />
            <v-divider />
            <div class="my-4">
              For more information on VICE Squads, including our expansion plans, check out the
              <g-link to="/projects/introducing-vice-squads/">VICE Squads Project Page.</g-link>
            </div>
            <v-divider />
            <div class="mt-4">
              Get involved, join us on
            </div>
            <g-link class="d-inline-flex align-center" :href="slackLink">
              <SlackIcon class="mx-1" />
              slack
            </g-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
import ShareButtons from "~/components/ShareButtons"
import SlackIcon from '~/assets/svgs/slack.svg'

export default {
  components: { ShareButtons, SlackIcon },
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
            hour: 'numeric', minute: 'numeric', timeZoneName: 'short'
          })
        )
      );
    },
    eventsMap() {
      const map = {}
      this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e))
      return map
    },
  },
  data: () => {
    return {
      slackLink: "https://join.slack.com/t/vicesquads/shared_invite/zt-2ova7xyrq-OwT8YiWQP2MfcbwEAct0Hw",
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
    formatEventDate(date) {
      const newDateFormat = new Date(date).toLocaleString('en-US', {
        month: 'short', day: '2-digit', hour: 'numeric', minute: 'numeric'
      })
      return newDateFormat
    },
  },
};
</script>


<style scoped>
.sticky_column {
  position: -webkit-sticky !important;
  position: sticky !important;
  top: 80px !important;
}
</style>
