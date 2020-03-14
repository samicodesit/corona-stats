import Firebase from "firebase";
require("firebase/firestore");

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyDT9oAN_A0dE78bQbJDoOzaGdqYZ_ZHenY",
  authDomain: "realstats-791da.firebaseapp.com",
  databaseURL: "https://realstats-791da.firebaseio.com",
  projectId: "realstats-791da",
  storageBucket: "realstats-791da.appspot.com",
  messagingSenderId: "834840067538",
  appId: "1:834840067538:web:11d0d2009332d229849c0b",
  measurementId: "G-7R87KY4DNJ"
});

export const db = firebaseApp.firestore();
