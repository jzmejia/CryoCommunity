<template>
  <Layout>
    <v-responsive class="mb-8">
      <v-row>
        <v-col cols="12" md="10" offset-md="2" class="mt-12 mb-6">
          <div class="text-md-h3 text-h4 font-weight-black text-break mt-12">
            A Census for the Science Workforce
          </div>
          <div class="text-capitalize text-h5 grey--text">
            Towards Building New Pipelines In STEM
          </div>
        </v-col></v-row
      >
      <v-row>
        <v-col cols="12" md="6" lg="5" offset-md="2" class="">
          <div>
            <div class="text-h5 text-md-h4 font-weight-bold mb-1">
              Introduction
            </div>
            <p>
              The following is a proposal on behalf of the scientific community
              to federal agencies in the sciences (e.g. the National Science
              Foundation, NASA), to be implemented and managed by Diversity,
              Equity and Inclusion programs within these organizations.
              <span class="font-weight-medium"
                >We propose the creation of a common infrastructure and format
                for the collection of data from grant recipients regarding (a)
                demographics and (b) availability of resources</span
              >
              (e.g. fieldwork, training, mentorship, emotional health).
              Anonymized data would be made available both internally and to the
              larger social science community for analysis and to inform policy.
            </p>
            <p>
              The larger goal is to better link necessary resources to the
              minoritized populations that currently lack them, and to identify
              the resources required to succeed at various career stages to
              build on-ramps outside of the pipeline.
            </p>
            <div class="text-h5 text-lg-h4 font-weight-bold my-4 mt-8 pt-2">
              Quantify Resource Distribution Equitability
            </div>
            <p>
              We propose the collection of data designed to capture the health
              of the scientific community and assess how equitably resources are
              made available to agency-funded researchers throughout their
              career paths. This would be an effort conducted fully in
              conjunction with Diversity and Inclusion specialists, with
              aggregate data to be made available to social scientists, and with
              the goal of helping agencies develop long-term strategies for the
              development of a strong scientific workforce. This data collection
              effort is intended both to address inequities in a short timeframe
              and to develop long-term strategies for increasing diversity and
              inclusion. The data collection effort would amount to a
              questionnaire implemented in a centralized system, to be filled
              out as a requirement of the annual review process by all direct
              and indirect recipients of awards, including PIs, Co-PIs,
              postdoctoral researchers and students. This could be built upon
              the current required questionnaire implemented at NSF, but
              expanded to collect more holistic information, including focusing
              on specific resources (i.e. mentorship, access to fieldwork).
              While this would include researchers throughout their careers, the
              primary focus would be to meet the needs of students, early career
              researchers and those in the transition stage to senior status
              (such as tenure).
            </p>
            <p>
              The objectives of this effort would be to amass an evidence-based
              understanding of the factors that most contribute to the long-term
              success of scientists, to understand whether these resources are
              distributed equitably, with the specific goal of quantifying the
              factors that contribute to the long-term success of historically
              under-represented groups. The regular collection of data would
              enable central agency resources to be
              <span class="font-weight-black">reactive</span>, i.e. to identify
              specific students/researchers who are being left behind along with
              the resources most critical to their success. This dataset would
              also help inform
              <span class="font-weight-black"
                >long-term strategies to tackle systemic inequalities
              </span>
              by identifying which resources are most crucial to success as well
              as how equitably these resources are distributed. Further,
              anonymized data would be made available to social scientists at
              large as well as the Diversity and Inclusion/Equal Opportunity
              offices and program managers, thus linking how we assess syst
            </p>
            <p>
              The list of researcher resources may include, for example,
              mentorship, resources to attend appropriate conferences and field
              schools, the availability of financial resources, inclusion into
              their academic community in tangible ways (such as invited
              collaborations), as well as factors external to academic life. We
              emphasize that questions should be designed by existing
              specialists in the social sciences to assess results rather than
              simply accessibility. This focus on outcomes will assign
              responsibility to institutions and mentors for active inclusion
              rather than simply for the provision of information. The
              maintenance of data collection at the agency level allows for
              researchers to be tracked throughout their careers, through
              multiple classifications of identity that may change over time
              (e.g., gender, title, name, affiliation), within the space which
              is most relevant to defining their success as scientists: their
              research community.
            </p>
            <div
              class="text-lg-h4 text-h5 font-weight-bold my-2 mt-8 pt-2 mt-lg-6"
            >
              Identify and Amplify Community Builders
            </div>
            <p>
              As a part of the data collection effort in Part 1, we suggest
              providing a space in the questionnaire for students/early career
              researchers to identify organizations and members of the
              researcher’s scientific community who have contributed to their
              success (potentially ancillary to their immediate supervisors).
              This gives an opportunity to amplify the successful strategies of
              those individuals who provide crucial mentorship, inclusion and
              opportunities without necessarily occupying an official role. This
              outside mentorship may be especially crucial for minoritized
              students who may need to reach outside their home institutions. We
              can pinpoint and lift up community members who actively reach out
              and reach back, many of whom (especially those minoritized by
              gender and race) are currently performing unpaid labor for the
              community at large.
            </p>
            <v-card-text align="right" class="pr-6">
              <div>Signed, The Cryosphere Community</div></v-card-text
            >
          </div>
        </v-col>
        <v-col cols="6" md="3" class="mx-4 mx-md-0 mt-12">
          
       
          <ShareButtons />
          <v-divider />
          <div class="text-caption my-4">
            If you would like to discuss expanding this letter for your own
            sub-discipline, please contact tbd.
          </div>
          <v-divider />
          <div class="my-4">
            <SignatureForm />
          </div>
        </v-col>
        <v-col cols="12" md="2" offset-md="2">
          <SignatureForm />
        </v-col>
        <v-col cols="12" md="3" class="ml-8">
          <SignatureResults />
        </v-col>
      </v-row>
    </v-responsive>
  </Layout>
</template>



<script>
import SignatureForm from "~/components/SignatureForm";
import SignatureResults from "~/components/SignatureResults";
import ShareButtons from "~/components/ShareButtons";

export default {
  name: "Census",
  components: {
    SignatureForm,
    SignatureResults,
    ShareButtons,
  },
  metaInfo: {
    title: "Census",
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


