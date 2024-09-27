<template>
  <div class="article-text" v-html="$page.article.content" />
</template>

<script>
export default {
  props: {
    content: String,
  },
};
</script>

<style scoped>
.article-text {
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  box-sizing: inherit;
  line-height: 32px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: "Hind", sans-serif;
}
.article-text >>> img {
  width: 100%;
}

.article-text >>> h2 {
  padding-bottom: 1rem;
  text-transform: capitalize;
}
</style>