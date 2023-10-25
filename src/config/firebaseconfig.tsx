// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpRfFauxw9u5dghTkTI2MMUIU3co7Pdis",
  authDomain: "lms-managment.firebaseapp.com",
  databaseURL: "https://lms-managment-default-rtdb.firebaseio.com",
  projectId: "lms-managment",
  storageBucket: "lms-managment.appspot.com",
  messagingSenderId: "770488410540",
  appId: "1:770488410540:web:6eb675e71364bc577e1a09"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);