<template>
  <Layout>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" lg="9" class="mb-6">
          <div class="text-md-h3 text-h4 font-weight-black text-break">
            VICE Squads
          </div>
          <div class="text-capitalize text-h5 grey--text">
            Virtual Ice Community Engagement Squads
          </div>
        </v-col>
        <v-col cols="12" md="8" lg="6" class="pr-md-10 pr-4">
          <p>
            We are excited to announce the soft-launch of Virtual Ice Community Engagement (VICE) Squads in
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
            Upcomming Events
          </div>
          <p>
            See below for upcomming scheduled events. 
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
                {{selectedEventStart}}
              </div>
              to
              <div>
                {{selectedEventEnd}}
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
            <div class="text-caption my-4">
              For more information on VICE Squads, including our expansion plans, check out the
              <g-link to="/projects/introducing-vice-squads/">VICE Squads Project Page</g-link>.
            </div>
            <v-divider />
            <div class="text-caption my-4">
              If you want to get involved join our slack channel 
              <!-- <a href="mailto: stemcensus@gmail.com">stemcensus@gmail.com</a> -->
            </div>
              <v-btn 
                varient="tonal"
                href="https://join.slack.com/t/vicesquads/shared_invite/zt-2c233592t-NUxEWUxiapmhf38GtbCiEw"
              >join us on slack
              </v-btn>
            <div class="text-caption my-4"/>
            <v-divider />
            <div class="text-caption my-4">
              Upcomming Events
            </div>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>
  
  


<script>

  export default {
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
            this.formatEventDate(this.selectedEvent.end)
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
            start: '2024-02-02T12:00:00',
            end: '2024-02-02T13:00:00',
            timed: true,
            moreInformation: "more information"
          },
          {
            name: 'Event 2',
            start: '2024-02-03T14:30:00',
            end: '2024-02-03T15:00:00',
            timed: false,
          },
          {
            name: 'Event 3',
            start: '2024-02-15T13:00:00',
            end: '2024-02-15T14:00:00',
            timed: true,
          },
          {
            name: 'Event 4',
            start: '2024-03-15T13:00:00',
            end: '2024-03-15T14:00:00',
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
            month: 'short', day: '2-digit', hour: 'numeric', minute: 'numeric', timeZoneName: 'short'
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




<!-- mail chimp imbed signup -->
<!-- <div id="mc_embed_shell">
  <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
<style type="text/css">
    #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
    /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
       We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://cryocommunity.us13.list-manage.com/subscribe/post?u=498ddfcd413656786bece3133&amp;id=d02e860686&amp;f_id=0025b1e5f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
    <div id="mc_embed_signup_scroll"><h2>Subscribe</h2>
        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
        <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""><span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span></div><div class="mc-field-group"><label for="mce-FNAME">First Name </label><input type="text" name="FNAME" class=" text" id="mce-FNAME" value=""></div><div class="mc-field-group"><label for="mce-LNAME">Last Name </label><input type="text" name="LNAME" class=" text" id="mce-LNAME" value=""></div><div class="mc-field-group"><label for="mce-MMERGE3">Affiliation </label><input type="text" name="MMERGE3" class=" text" id="mce-MMERGE3" value=""></div>
<div hidden=""><input type="hidden" name="tags" value="7072854,7072866"></div>
    <div id="mce-responses" class="clear foot">
        <div class="response" id="mce-error-response" style="display: none;"></div>
        <div class="response" id="mce-success-response" style="display: none;"></div>
    </div>
<div aria-hidden="true" style="position: absolute; left: -5000px;">
    /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
    <input type="text" name="b_498ddfcd413656786bece3133_d02e860686" tabindex="-1" value="">
</div>
    <div class="optionalParent">
        <div class="clear foot">
            <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
            <p style="margin: 0px auto;"><a href="http://eepurl.com/iJbuIk" title="Mailchimp - email marketing made easy and fun"><span style="display: inline-block; background-color: transparent; border-radius: 4px;"><img class="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"></span></a></p>
        </div>
    </div>
</div>
</form>
</div>
<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='MMERGE3';ftypes[3]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script></div> -->
