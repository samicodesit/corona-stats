<template>
  <v-app>
    <Main />
  </v-app>
</template>

<script>
import Main from "@/components/Main";

export default {
  name: "App",

  components: {
    Main
  },

  data: () => ({
    //
  })
};
</script>
<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  scroll-behavior: smooth;
}
</style>