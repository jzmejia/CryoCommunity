
<template>
  <Layout>
    <v-container>
    <v-row class="mt-14">
      <v-col cols="12" class="secondary--text text-h1 mr-6" align-self="end">
        about
      </v-col>
      <v-col cols="12" xs="12" md="5">
        <g-link
          to="/team"
          class="secondary--text text-h2 font-weight-thin text-decoration-none"
        >
          team
        </g-link>
        <div class="my-3">
          <g-link
            to="/contact"
            class="
              secondary--text
              text-h2
              font-weight-thin
              text-decoration-none
            "
          >
            contact
          </g-link>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="overline">who we are</div>
        <p class="text-justify body-1">
          CryoCommunity is the product of the
          <span class="font-weight-bold">MARS pod's</span> (Midwest And Random
          Stragglers glaciology) participation in
          <a href="https://urgeoscience.org/">URGEGeosciences</a> in Spring
          2021. Members of our <g-link to="/team">URGE pod</g-link> represent
          many different institutions and we seek to involve the broader
          cryospheric community in positive change. We started this website to
          generate, collate, and distribute best practices across a suite of
          academic processes and institution types.
        </p>

        <div class="overline pt-4">our mission</div>
        <p class="text-justify body-1">
          The purpose of CryoCommunity is to build and foster a more just,
          equitable, diverse, and inclusive community and culture within the
          cryospheric sciences. We recognize that systematic racism and sexism
          are harmful barriers inherent in academic institutions. CryoCommunity
          aims to share resources and best practices across the community and to
          advocate for the changes needed to create an equitable and inclusive
          culture.
        </p>

        <div class="overline pt-4">our vision</div>
        <p class="text-justify body-1">
          Our vision is for cryocommunity.org to as a hub for JEDI resources in
          the cryospheric sciences. While we will continue to share best
          practices and resources developed and currated by the MARS URGE pod,
          we would like to spotlight work by groups within the larger
          glaciological community, and by
          <g-link to="/contact">guest writers</g-link>. This less formal format
          gives us all the flexibility to share helpful information free of any
          pay-walls.
        </p>
        <div class="overline pt-4">Contact us</div>
        <div class="text-justify body-1">
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
          >
            <path
              d="M14.478 1.5l.5-.033a.5.5 0 00-.871-.301l.371.334zm-.498 2.959a.5.5 0 10-1 0h1zm-6.49.082h-.5.5zm0 .959h.5-.5zm-6.99 7V12a.5.5 0 00-.278.916L.5 12.5zm.998-11l.469-.175a.5.5 0 00-.916-.048l.447.223zm3.994 9l.354.353a.5.5 0 00-.195-.827l-.159.474zm7.224-8.027l-.37.336.18.199.265-.04-.075-.495zm1.264-.94c.051.778.003 1.25-.123 1.606-.122.345-.336.629-.723 1l.692.722c.438-.42.776-.832.974-1.388.193-.546.232-1.178.177-2.006l-.998.066zm0 3.654V4.46h-1v.728h1zm-6.99-.646V5.5h1v-.959h-1zm0 .959V6h1v-.5h-1zM10.525 1a3.539 3.539 0 00-3.537 3.541h1A2.539 2.539 0 0110.526 2V1zm2.454 4.187C12.98 9.503 9.487 13 5.18 13v1c4.86 0 8.8-3.946 8.8-8.813h-1zM1.03 1.675C1.574 3.127 3.614 6 7.49 6V5C4.174 5 2.421 2.54 1.966 1.325l-.937.35zm.021-.398C.004 3.373-.157 5.407.604 7.139c.759 1.727 2.392 3.055 4.73 3.835l.317-.948c-2.155-.72-3.518-1.892-4.132-3.29-.612-1.393-.523-3.11.427-5.013l-.895-.446zm4.087 8.87C4.536 10.75 2.726 12 .5 12v1c2.566 0 4.617-1.416 5.346-2.147l-.708-.706zm7.949-8.009A3.445 3.445 0 0010.526 1v1c.721 0 1.37.311 1.82.809l.74-.671zm-.296.83a3.513 3.513 0 002.06-1.134l-.744-.668a2.514 2.514 0 01-1.466.813l.15.989zM.222 12.916C1.863 14.01 3.583 14 5.18 14v-1c-1.63 0-3.048-.011-4.402-.916l-.556.832z"
              fill="currentColor"
            ></path>
          </svg>
          <a
            href="https://twitter.com/cryocommunity"
            class="mx-2 text-decoration-none"
            >@cryocommunity</a
          >
        </div>
        <div>
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
          >
            <path
              d="M.5 4.5l7 4 7-4m-13-3h12a1 1 0 011 1v10a1 1 0 01-1 1h-12a1 1 0 01-1-1v-10a1 1 0 011-1z"
              stroke="currentColor"
            ></path>
          </svg>
          <g-link to="/contact" class="body-1 mx-2 text-decoration-none"
            >cryospherecommunity@gmail.com</g-link
          >
        </div>
      </v-col>
      <v-col cols="12" class="mt-10"
        ><g-link
          to="/team"
          class="secondary--text text-h1 text-decoration-none"
        >
          our team</g-link
        >
      </v-col>
      <v-col>
      <teamCard></teamCard>
      </v-col>
    </v-row>
    </v-container>
  </Layout>
</template>
<script>
import aboutData from "~/data/about.yml";
import teamCard from "~/components/TeamCard";

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



