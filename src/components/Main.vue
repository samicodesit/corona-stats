<template>
  <div>
    <h1>Help fight CoronaVirus by gathering accurate numbers</h1>
    <p>Accuracy will reflect the real status of the pandemic. It will help alert our governments to the real gravity of the situation</p>

    <survey-form />
    <stats />
  </div>
</template>

<script>
import Stats from "@/components/Stats";
import SurveyForm from "@/components/SurveyForm";
export default {
  components: {
    Stats,
    SurveyForm
  },
  name: "Main",
  mounted() {}
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
