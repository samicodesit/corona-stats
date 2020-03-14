<template>
  <section>
    <h2>Take part in the survey</h2>
  </section>
</template>

<script>
export default {
  name: "SurveyForm",
  methods: {
    initGeoLocator() {
      if (!navigator.geolocation) return;

      const Geo = navigator.geolocation;
      const success = ({ coords }) => {
        const { latitude, longitude } = coords;
        console.log(latitude);
        console.log(longitude);
      };
      const fail = err => {
        console.log(err, "error");
      };

      Geo.getCurrentPosition(success, fail);
    }
  }
};
</script>