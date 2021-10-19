<template>
  <span>
    <!-- twitter -->
    <v-btn
      color="primary"
      icon
      href="https://twitter.com/share?ref_src=twsrc%5Etfw"
      data-url="https://cryocommunity.org/census/"
      data-via="cryocommunity"
      data-hashtags="STEMcensus"
      data-show-count="false"
    >
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
    </v-btn>
    <!-- facebook -->
    <v-btn
      icon
      color="primary"
      href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcryocommunity.org%2Fcensus&amp;src=sdkpreparse"
      class="fb-xfbml-parse-ignore"
    >
      <svg
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
      >
        <path
          d="M7.5 14.5a7 7 0 110-14 7 7 0 010 14zm0 0v-8a2 2 0 012-2h.5m-5 4h5"
          stroke="currentColor"
        ></path>
      </svg>
    </v-btn>
    <!-- linkedin -->
    <v-btn icon color="primary">
      <svg
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
      >
        <path
          d="M4.5 6v5m6 0V8.5a2 2 0 10-4 0V11 6M4 4.5h1M1.5.5h12a1 1 0 011 1v12a1 1 0 01-1 1h-12a1 1 0 01-1-1v-12a1 1 0 011-1z"
          stroke="currentColor"
        ></path>
      </svg>
    </v-btn>
    <!-- copy link to page  -->
    <v-btn
      icon
      color="primary"
      v-clipboard:copy="censusUrl"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError"
    >
              <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
          >
            <path
              d="M11 1.5h2.5v12a1 1 0 01-1 1h-10a1 1 0 01-1-1v-12H4m.5-1h6v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z"
              stroke="currentColor"
            ></path>
          </svg>
      <!-- <svg
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
      >
        <path
          d="M4.5 6.5L1.328 9.672a2.828 2.828 0 104 4L8.5 10.5m2-2l3.172-3.172a2.829 2.829 0 00-4-4L6.5 4.5m-2 6l6-6"
          stroke="currentColor"
        ></path>
      </svg> -->
    </v-btn>

    <!-- send to contact page -->
    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon color="primary" v-on="on" v-bind="attrs" href="/contact">
          <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M.5 9.5l-.354-.354L0 9.293V9.5h.5zm9-9l.354-.354a.5.5 0 00-.708 0L9.5.5zm5 5l.354.354a.5.5 0 000-.708L14.5 5.5zm-9 9v.5h.207l.147-.146L5.5 14.5zm-5 0H0a.5.5 0 00.5.5v-.5zm.354-4.646l9-9-.708-.708-9 9 .708.708zm8.292-9l5 5 .708-.708-5-5-.708.708zm5 4.292l-9 9 .708.708 9-9-.708-.708zM5.5 14h-5v1h5v-1zm-4.5.5v-5H0v5h1zM6.146 3.854l5 5 .708-.708-5-5-.708.708zM8 15h7v-1H8v1z" fill="currentColor"></path></svg>
        </v-btn>
      </template>
      <span>Suggest Edits</span>
    </v-tooltip>
  </span>
</template>

<script>
export default {
  data() {
    return {
      censusUrl: "https://cryocommunity.org/census",
    };
  },
  methods: {
    onCopy: function (e) {
      alert("You just copied: " + e.text);
    },
    onError: function (e) {
      alert("Failed to copy texts");
    },
  },
};
</script>

<style>
</style>