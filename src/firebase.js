// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_s67D2S4eyP-pozGueULS2LI7XG6leVU",
  authDomain: "portfolio-67224.firebaseapp.com",
  projectId: "portfolio-67224",
  storageBucket: "portfolio-67224.appspot.com",
  messagingSenderId: "328065494241",
  appId: "1:328065494241:web:9b94705c3b41e685e8dba0",
  measurementId: "G-NPPYJEEQQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);