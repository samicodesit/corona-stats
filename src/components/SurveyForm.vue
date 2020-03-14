<template>
  <section>
    <h2>Take part in the survey</h2>
    <p>{{ revserseGeoData.state }}</p>
    <v-form class="form" ref="form" @submit.prevent="submitForm">
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
      <v-select
        v-model="input.status"
        placeholder="What's your current status?"
        :items="statusArray"
      />
      <v-btn type="submit">Submit</v-btn>
    </v-form>
  </section>
</template>

<script>
import { db } from "@/firebase";
export default {
  name: "SurveyForm",
  data: () => ({
    input: {
      age: null,
      gender: null,
      status: null
    },

    navigatorGeoData: {
      lat: null,
      lng: null
    },

    revserseGeoData: {
      state: "",
      country: ""
    },

    ip_address: "",

    statusArray: [
      "Tested Positive",
      "Tested Negative",
      "Recovered",
      "Feeling sick. Getting tested soon",
      "Feeling sick. No access to testing"
    ],
    ageArray: [...Array(100).keys()].map(x => x + 15),
    genderArray: ["male", "female", "other"]
  }),
  async mounted() {
    this.ip_address = (await this.getIpAddress()) || "";
    const { latitude: lat, longitude: lng } =
      (await this.getGeoPosition()) || {};

    if (lat && lng) {
      console.log(lat, "setting nav geo?");
      this.setNavigatorGeoData([lat, lng]);
      const { state, country } = await this.reverseGeo([lat, lng]);

      if (state && country) {
        this.setReverseGeoData({ state, country });
      }
    }
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
      const locationAvailable =
        results &&
        results[0] &&
        results[0].locations &&
        results[0].locations[0] &&
        results[0].locations[0];

      const state = locationAvailable && locationAvailable.adminArea3;
      const country = locationAvailable && locationAvailable.adminArea1;

      return { state, country };
    },
    setNavigatorGeoData(coords) {
      const [lat, lng] = coords;

      this.navigatorGeoData.lat = lat;
      this.navigatorGeoData.lng = lng;
    },
    setReverseGeoData(data) {
      const { state, country } = data;

      this.revserseGeoData.state = state;
      this.revserseGeoData.country = country;
    },
    async getIpAddress() {
      const url = `https://www.cloudflare.com/cdn-cgi/trace`;
      const res = await fetch(url);
      const textRes = await res.text();
      const ip = textRes
        .slice(textRes.indexOf("ip="))
        .split("\n")[0]
        .split("=")[1];

      return ip;
    },
    submitForm() {
      // Add a new document with a generated id.
      db.collection("cases")
        .add({
          ...this.input
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
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
