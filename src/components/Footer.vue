<template>
  <v-footer>
    <v-container :fluid="smAndDown">
      <v-row>
        <v-col cols="auto" class="ml-auto text-right"
          ><div class="text-h5">join the community</div>
          <v-btn icon color="blue" to="/contact">
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
          </v-btn>
          <v-btn color="blue" icon href="https://twitter.com/CryoCommunity">
            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M14.478 1.5l.5-.033a.5.5 0 00-.871-.301l.371.334zm-.498 2.959a.5.5 0 10-1 0h1zm-6.49.082h-.5.5zm0 .959h.5-.5zm-6.99 7V12a.5.5 0 00-.278.916L.5 12.5zm.998-11l.469-.175a.5.5 0 00-.916-.048l.447.223zm3.994 9l.354.353a.5.5 0 00-.195-.827l-.159.474zm7.224-8.027l-.37.336.18.199.265-.04-.075-.495zm1.264-.94c.051.778.003 1.25-.123 1.606-.122.345-.336.629-.723 1l.692.722c.438-.42.776-.832.974-1.388.193-.546.232-1.178.177-2.006l-.998.066zm0 3.654V4.46h-1v.728h1zm-6.99-.646V5.5h1v-.959h-1zm0 .959V6h1v-.5h-1zM10.525 1a3.539 3.539 0 00-3.537 3.541h1A2.539 2.539 0 0110.526 2V1zm2.454 4.187C12.98 9.503 9.487 13 5.18 13v1c4.86 0 8.8-3.946 8.8-8.813h-1zM1.03 1.675C1.574 3.127 3.614 6 7.49 6V5C4.174 5 2.421 2.54 1.966 1.325l-.937.35zm.021-.398C.004 3.373-.157 5.407.604 7.139c.759 1.727 2.392 3.055 4.73 3.835l.317-.948c-2.155-.72-3.518-1.892-4.132-3.29-.612-1.393-.523-3.11.427-5.013l-.895-.446zm4.087 8.87C4.536 10.75 2.726 12 .5 12v1c2.566 0 4.617-1.416 5.346-2.147l-.708-.706zm7.949-8.009A3.445 3.445 0 0010.526 1v1c.721 0 1.37.311 1.82.809l.74-.671zm-.296.83a3.513 3.513 0 002.06-1.134l-.744-.668a2.514 2.514 0 01-1.466.813l.15.989zM.222 12.916C1.863 14.01 3.583 14 5.18 14v-1c-1.63 0-3.048-.011-4.402-.916l-.556.832z" fill="currentColor"></path></svg>
          </v-btn>
          <v-btn
            icon
            color="blue"
            href="https://github.com/jzmejia/CryoCommunity"
          >
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
            >
              <path
                d="M5.65 12.477a.5.5 0 10-.3-.954l.3.954zm-3.648-2.96l-.484-.128-.254.968.484.127.254-.968zM9 14.5v.5h1v-.5H9zm.063-4.813l-.054-.497a.5.5 0 00-.299.852l.352-.354zM12.5 5.913h.5V5.91l-.5.002zm-.833-2.007l-.466-.18a.5.5 0 00.112.533l.354-.353zm-.05-2.017l.456-.204a.5.5 0 00-.319-.276l-.137.48zm-2.173.792l-.126.484a.5.5 0 00.398-.064l-.272-.42zm-3.888 0l-.272.42a.5.5 0 00.398.064l-.126-.484zM3.383 1.89l-.137-.48a.5.5 0 00-.32.276l.457.204zm-.05 2.017l.354.353a.5.5 0 00.112-.534l-.466.181zM2.5 5.93H3v-.002l-.5.002zm3.438 3.758l.352.355a.5.5 0 00-.293-.851l-.06.496zM5.5 11H6l-.001-.037L5.5 11zM5 14.5v.5h1v-.5H5zm.35-2.977c-.603.19-.986.169-1.24.085-.251-.083-.444-.25-.629-.49a4.8 4.8 0 01-.27-.402c-.085-.139-.182-.302-.28-.447-.191-.281-.473-.633-.929-.753l-.254.968c.08.02.184.095.355.346.082.122.16.252.258.412.094.152.202.32.327.484.253.33.598.663 1.11.832.51.168 1.116.15 1.852-.081l-.3-.954zm4.65-.585c0-.318-.014-.608-.104-.878-.096-.288-.262-.51-.481-.727l-.705.71c.155.153.208.245.237.333.035.105.053.254.053.562h1zm-.884-.753c.903-.097 1.888-.325 2.647-.982.78-.675 1.237-1.729 1.237-3.29h-1c0 1.359-.39 2.1-.892 2.534-.524.454-1.258.653-2.099.743l.107.995zM13 5.91a3.354 3.354 0 00-.98-2.358l-.707.706c.438.44.685 1.034.687 1.655l1-.003zm-.867-1.824c.15-.384.22-.794.21-1.207l-1 .025a2.12 2.12 0 01-.142.82l.932.362zm.21-1.207a3.119 3.119 0 00-.27-1.195l-.913.408c.115.256.177.532.184.812l1-.025zm-.726-.99c.137-.481.137-.482.136-.482h-.003l-.004-.002a.462.462 0 00-.03-.007 1.261 1.261 0 00-.212-.024 2.172 2.172 0 00-.51.054c-.425.091-1.024.317-1.82.832l.542.84c.719-.464 1.206-.634 1.488-.694a1.2 1.2 0 01.306-.03l-.008-.001a.278.278 0 01-.01-.002l-.006-.002h-.003l-.002-.001c-.001 0-.002 0 .136-.482zm-2.047.307a8.209 8.209 0 00-4.14 0l.252.968a7.209 7.209 0 013.636 0l.252-.968zm-3.743.064c-.797-.514-1.397-.74-1.822-.83a2.17 2.17 0 00-.51-.053 1.259 1.259 0 00-.241.03l-.004.002h-.003l.136.481.137.481h-.001l-.002.001-.003.001a.327.327 0 01-.016.004l-.008.001h.008a1.19 1.19 0 01.298.03c.282.06.769.23 1.488.694l.543-.84zm-2.9-.576a3.12 3.12 0 00-.27 1.195l1 .025a2.09 2.09 0 01.183-.812l-.913-.408zm-.27 1.195c-.01.413.06.823.21 1.207l.932-.362a2.12 2.12 0 01-.143-.82l-1-.025zm.322.673a3.354 3.354 0 00-.726 1.091l.924.38c.118-.285.292-.545.51-.765l-.708-.706zm-.726 1.091A3.354 3.354 0 002 5.93l1-.003c0-.31.06-.616.177-.902l-.924-.38zM2 5.93c0 1.553.458 2.597 1.239 3.268.757.65 1.74.88 2.64.987l.118-.993C5.15 9.09 4.416 8.89 3.89 8.438 3.388 8.007 3 7.276 3 5.928H2zm3.585 3.404c-.5.498-.629 1.09-.584 1.704L6 10.963c-.03-.408.052-.683.291-.921l-.705-.709zM5 11v3.5h1V11H5zm5 3.5V13H9v1.5h1zm0-1.5v-2.063H9V13h1z"
                fill="currentColor"
              ></path>
            </svg>
          </v-btn>

          <g-link to="/about">
            <v-btn color="blue" icon>
              <svg
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
              >
                <path
                  d="M7 4.5V5h1v-.5H7zm1-.01v-.5H7v.5h1zM8 11V7H7v4h1zm0-6.5v-.01H7v.01h1zM6 8h1.5V7H6v1zm0 3h3v-1H6v1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zM1 7.5A6.5 6.5 0 017.5 1V0A7.5 7.5 0 000 7.5h1zM7.5 14A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zm0 1A7.5 7.5 0 0015 7.5h-1A6.5 6.5 0 017.5 14v1z"
                  fill="currentColor"
                ></path>
              </svg>
            </v-btn>
          </g-link>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" lg="8" md="8" sm="12">
          <v-row>
            <v-col
              v-for="(key, index) in footerMenu"
              cols="auto"
              lg="4"
              md="4"
              sm="6"
              xs="6"
              :key="index"
            >
              <div v-for="(link, idx) in key" :key="idx">
                <v-btn
                  plain
                  :x-small="smAndDown"
                  :to="link.path"
                  class="caption"
                  >{{ link.title }}
                </v-btn>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="caption my-0 py-0 mt-8 d-flex align-center" cols="12">
              <svg
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
              >
                <path
                  d="M10.146 10.146l-.353.354.707.707.354-.353-.708-.708zM13.5 7.5l.354.354.353-.354-.353-.354-.354.354zm-2.646-3.354l-.354-.353-.707.707.353.354.708-.708zm-6.708 6.708l.354.353.707-.707-.353-.354-.708.708zM1.5 7.5l-.354-.354-.353.354.353.354L1.5 7.5zm3.354-2.646l.353-.354-.707-.707-.354.353.708.708zm6 6l3-3-.708-.708-3 3 .708.708zm3-3.708l-3-3-.708.708 3 3 .708-.708zm-9 3l-3-3-.708.708 3 3 .708-.708zm-3-2.292l3-3-.708-.708-3 3 .708.708zm6.153-6.436l-2 12 .986.164 2-12-.986-.164z"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="ml-1"> with </span>
              <svg
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
              >
                <path
                  d="M6.5 5.5l1 1 1-1a1.414 1.414 0 112 2l-3 3-3-3a1.414 1.414 0 112-2z"
                  stroke="currentColor"
                ></path>
              </svg>
              by
              <a class="mx-1" href="https://github.com/jzmejia/">J. Mejia</a>
              and
              <a class="mx-1" href="https://twitter.com/LummusMalisse"
                >M. Lummus</a
              >
            </v-col>

            <v-col cols="12" class="caption mt-0 pt-0 ml-1 mb-4">
              &copy; {{ new Date().getFullYear() }}
              {{ $static.metadata.siteName }}
            </v-col>
          </v-row>
        </v-col>
        <!-- <v-col
          cols="12"
          lg="4"
          md="4"
          :order="smAndDown ? 'first' : ''"
          style="max-height: 325px;"
          class="overflow-auto"
        >
          <Twitter />
        </v-col> -->
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
export default {
  components: {
    Twitter: () => import("@/components/Twitter"),
  },
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    icons: [
      {
        icon: "fab fa-twitter",
        link: "https://twitter.com/cryocommunity?s=21",
      },
    ],
    footerMenu: {
      sitemap: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Team", path: "/team" },
        { title: "STEM Census", path: "/census" },
        { title: "Projects", path: "/projects" },
        { title: "Resources", path: "/resources" },
        { title: "Contact", path: "/contact" },
      ],
      featured: [
        { title: "career stage", path: "/career" },
        { title: "undergraduates", path: "/career#undergrad" },
        { title: "graduate students", path: "/career#grad" },
        { title: "early career", path: "/career#ecr" },
        { title: "pi's", path: "/career#pi" },
      ],
      other: [
        { title: "Geo Grad App", path: "http://geogradapp.com" },
        { title: "CryoSciListen", path: "https://cryoscilisten.weebly.com" },
        // { title: "Best Practices", path: "https://"+window.location.hostname+"/projects" },
        { title: "URGE", path: "https://urgeoscience.org/" },
      ],
    },
  }),
  computed: {
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    dark() {
      return this.$vuetify.theme.dark;
    },
  },
};
</script>
