<template>
  <section>
    <h2>Take part in the survey</h2>
    <form class="form">
      <v-select
        type="text"
        :items="ageArray"
        placeholder="your age"
        v-model.number="input.age"
      />
      <v-select
        v-model="input.gender"
        placeholder="gender"
        :items="genderArray"
      />
    </form>
  </section>
</template>

<script>
export default {
  name: "SurveyForm",
  data: () => ({
    input: {
      age: null,
      gender: null,
      status: null
    },

    navigatorGeo: {
      lat: null,
      lng: null
    },

    ageArray: [...Array(100).keys()].map(x => x + 15),
    genderArray: ["male", "female", "other"]
  }),
  async mounted() {
    // const { latitude: lat, longitude: lng } =
    //   (await this.getGeoPosition()) || {};
    // if (lat && lng) {
    //   this.reverseGeo([lat, lng]);
    // }
  },
  methods: {
    initGeoLocator() {
      if (!navigator.geolocation) return new Promise(resolve => resolve({}));

      if (navigator.geolocation) {
        return new Promise((resolve, reject) =>
          navigator.geolocation.getCurrentPosition(resolve, reject)
        );
      }
    },
    async getGeoPosition() {
      // returns { latitude, longitude }
      try {
        const { coords } = await this.initGeoLocator();

        return coords;
      } catch (error) {
        if (error.code === 1) return "denied";

        return error;
      }
    },
    async reverseGeo(coords) {
      // receives [lat, lng]
      // returns state
      const [lat, lng] = coords || [];
      const apiKey = process.env.VUE_APP_GEOCODE_KEY;
      const url = `http://www.mapquestapi.com/geocoding/v1/reverse?key=${apiKey}&location=${lat},${lng}`;

      const res = await fetch(url);
      const jsonRes = await res.json();

      const { results } = jsonRes;
      const state =
        results &&
        results[0] &&
        results[0].locations &&
        results[0].locations[0] &&
        results[0].locations[0].adminArea3;

      return state;
    },
    setNavigatorGeoData(coords) {
      const [lat, lng] = coords;

      this.navigatorGeo.lat = lat;
      this.navigatorGeo.lng = lng;
    }
  },
  computed: {
    navigatorGeoDataExists() {
      return this.navigatorGeo.lat && this.navigatorGeo.lng;
    }
  }
};
</script>

<style scoped>
.form {
  display: grid;
  grid-row-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
}

@media screen and (min-width: 590px) {
  .form {
    grid-template-columns: 1fr;
  }
}
</style>
