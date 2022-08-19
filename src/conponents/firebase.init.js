// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrkbFyIpsWc2zBq4xgH1Rtq24jTgj8dGk",
  authDomain: "teacheracademy-20bb9.firebaseapp.com",
  projectId: "teacheracademy-20bb9",
  storageBucket: "teacheracademy-20bb9.appspot.com",
  messagingSenderId: "1085650277533",
  appId: "1:1085650277533:web:c414c28969eaa7f5157074"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;