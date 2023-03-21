// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS9y015jo3d-9V5hRuzMOKNKK6GJgmufE",
  authDomain: "notas-app-c3706.firebaseapp.com",
  projectId: "notas-app-c3706",
  storageBucket: "notas-app-c3706.appspot.com",
  messagingSenderId: "526350687883",
  appId: "1:526350687883:web:e971997da805fa838d3e8e",
  measurementId: "G-P6TNJBFVNZ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp;