// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvLLY7rksyRX_JcTt3UiFHuaumK_TEfNE",
  authDomain: "sunshine-task-98dfb.firebaseapp.com",
  projectId: "sunshine-task-98dfb",
  storageBucket: "sunshine-task-98dfb.appspot.com",
  messagingSenderId: "38009872111",
  appId: "1:38009872111:web:59ee5376fab6be2af6051a",
  measurementId: "G-YMTH05R1FG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;