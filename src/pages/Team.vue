<template>
  <Layout>
    <v-container fluid>
      <h3>Our Team</h3>
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="12"
          :lg="3"
          :md="4"
          :sm="6"
          :xs="12"
        >
          <v-card rounded="lg" class="pt-4" flat color="grey lighten-4">
            <v-img
              :src="require(`~/assets/avatars/${card.src}`)"
              :alt="card.alt"
              max-height="150"
              contain
            >
              <template v-slot:placeholder>
                <v-row class="fill-height" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="#009cf6"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-card-title v-text="card.title"></v-card-title>
            <v-card-subtitle v-text="card.affil"></v-card-subtitle>
            <v-card-actions>
              <v-btn icon absolute bottom right
                ><v-icon small>fa-link</v-icon></v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>


<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Jessica Mejia Ph.D.",
        subtitle: "Glacial Hydrologist",
        affil: "University at Buffalo",
        src: "jess2.png",
        alt: "illustration of a white woman with long wavy brown hair, gold hoop earrings, and a light brown sweater",
      },
        {
        title: "Leigh Stearns Ph.D.",
        affil: "University of Kansas",
        src: "leigh_nonhipster.png",
        alt: "woman illustration with short brown hair and green jacket.",
      },
      {
        title: "Lauren Simkins Ph.D.",
        subtitle: "",
        affil: "University of Virginia",
        src: "simkins.png",
        alt: "illustration of a white woman wiith long brown hair, red lipstick, and a black shirt with whitie collar.",
      },    
      {
        title: "Jeremy Bassis Ph.D.",
        subtitle: "",
        affil: "University of Michigan",
        src: "jeremy.png",
        alt: 'illustration of a man wearing a yellow "IGS" hat, dark brown hair and facial stubble with grey eyebrows weariing a blue shirt.',
      },
    {
        title: "Malisse Lummus",
        subtitle: "",
        affil: "University of Kansas",
        src: "malisse.png",
        alt: "illustration of white women with light brown sholder-length hair with a green shirt and blue jumper.",
      },
      {
        title: "Cody Barnett",
        subtitle: "",
        affil: "University of Kansas",
        src: "barnett.png",
        alt: "illustration of a white man with black hair and facial hair wearing a blue t-shiirt and an open black button-down.",
      },
      {
        title: "Michael Shahin",
        subtitle: "",
        affil: "University of Kansas",
        src: "shahin.png",
        alt: "illustration of a white bald man with glasses, a brown beard, and a blue shirt.",
      },

  
      {
        title: "Celia Trunz Ph.D.",
        subtitle: "",
        affil: "Université de Sherbrooke",
        src: "celia.png",
        alt: "illustration of a woman with long straight brown hair with bangs and an orange sleeveless blouse.",
      },
    ],
  }),
};
</script>