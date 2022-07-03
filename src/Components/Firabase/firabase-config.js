// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuDAzcMsQ_7bEQHC-z9N9dzyngW41Wvwk",
  authDomain: "authentication-web-todo-app.firebaseapp.com",
  projectId: "authentication-web-todo-app",
  storageBucket: "authentication-web-todo-app.appspot.com",
  messagingSenderId: "160577607231",
  appId: "1:160577607231:web:cd311718a7850b08aa0a8a",
  measurementId: "G-RTBL4YLS02",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
