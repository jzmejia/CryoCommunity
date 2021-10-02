<template>
  <div>
    <Hero/>
    <slot />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
export default {
  components: {
    Hero,
  },
};
</script>
