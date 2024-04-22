// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-R8BJzYJ5kiC8Nv-zEctqPKCq6dLa8-4",
  authDomain: "manufac-f2f8c.firebaseapp.com",
  projectId: "manufac-f2f8c",
  storageBucket: "manufac-f2f8c.appspot.com",
  messagingSenderId: "591311337611",
  appId: "1:591311337611:web:bd6668f9b194492d963c8e",
  measurementId: "G-BZWN8Y8TKC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);