<template>
  <div>
    <section class="mainSection">
      <h1 class="mainSection-mantra">Help fight CoronaVirus by gathering accurate numbers</h1>
      <p
        class="mainSection-subtitle"
      >Accuracy will reflect the real status of the pandemic. It will help alert our governments to the real gravity of the situation</p>
    </section>
    <section class="secondSection">
      <div class="secodSectionSurvey">
        <div class="card">
          <div class="card-title">
            <h2>Fill it</h2>
          </div>
          <div class="card-text">
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
          </div>
          <div class="card-button">
            <v-btn class="ma-2" outlined color="primary" x-large>Outlined Button</v-btn>
          </div>
        </div>
      </div>
      <div class="secondSectionCharts">
        <div class="card">
          <div class="card-title">
            <h2>watch it</h2>
          </div>
          <div class="card-text">
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
          </div>
          <div class="card-button">
            <v-btn class="ma-2" outlined color="primary" x-large>Outlined Button</v-btn>
          </div>
        </div>
      </div>
    </section>
    <section class="surveySection" id="survey">
      <div class="surveyForm">
        <div class="card form-card">
          <div class="card-title">
            <h3>please fill this form</h3>
            <v-container fluid>
              <v-row align="center">
                <v-col class="d-flex" cols="12" sm="12">
                  <v-select :items="items" label="Age" outlined></v-select>
                </v-col>

                <v-col class="d-flex" cols="12" sm="12">
                  <v-select :items="items" outlined label="Gender"></v-select>
                </v-col>

                <v-col class="d-flex" cols="12" sm="12">
                  <v-select :items="items" label="Country" outlined></v-select>
                </v-col>

                <v-col class="d-flex" cols="12" sm="12">
                  <v-select :items="items" label="City" solo outlined></v-select>
                </v-col>
                <v-col class="d-flex" cols="12" sm="12">
                  <v-select :items="items" label="PCR" solo outlined></v-select>
                </v-col>
                <v-col class="d-flex" cols="12" sm="12">
                  <v-btn x-large color="success" dark block>Save</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
      </div>
    </section>
    <!-- <h1>Help fight CoronaVirus by gathering accurate numbers</h1>
    <p>Accuracy will reflect the real status of the pandemic. It will help alert our governments to the real gravity of the situation</p>-->

    <!-- <survey-form /> -->
    <!-- <stats /> -->
  </div>
</template>

<script>
// import Stats from "@/components/Stats";
// import SurveyForm from "@/components/SurveyForm";
export default {
  components: {
    // Stats,
    // SurveyForm
  },
  name: "Main",
  mounted() {}
};
</script>

<style>
.mainSection {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url("../assets/cover.jpg"), url("../assets/cover.jpg"), #b2ebf2;
  background-size: cover;
  background-blend-mode: multiply;
  padding: 0 2em;
}
.mainSection-mantra {
  font-size: 4.4rem;
  word-spacing: 3px;
  text-transform: capitalize;
  color: #e3f2fd;
  line-height: 1;
}
.mainSection-subtitle {
  font-size: 2rem;
  color: #b3e5fc;
}
.secondSection {
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16em 4em;
}
.secodSectionSurvey {
  flex: 0 0 40%;
}
.secondSectionCharts {
  flex: 0 0 40%;
}
.card {
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 2px solid rgb(0, 29, 58);
  margin: 0 2em;
  box-shadow: 0 0 10px 7px rgba(0, 0, 0, 0.1);
}
.card-title {
  font-size: 1.7rem;
  text-transform: capitalize;
  letter-spacing: 2px;
  color: rgb(0, 29, 58);
  margin-bottom: 0.5em;
  font-weight: bold;
  text-align: center;
}
.card-text {
  font-size: 1.2em;
  line-height: 1.7;
  word-spacing: 3px;
  color: rgb(0, 29, 58);
}
.card-button button {
  border: 2px solid rgb(0, 29, 58);
}
.card-button span {
  color: rgb(0, 29, 58);
}
.surveySection {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 4em;
}
.form-card {
  width: 100%;
}
</style>
