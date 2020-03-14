<template>
  <section>
    <h2>Your Stats</h2>
    <p v-html="data"></p>
  </section>
</template>

<script>
import { data } from "@/seed.js";
export default {
  name: "Stats",
  data: () => ({
    data
  })
};
</script>