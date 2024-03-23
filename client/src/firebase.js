// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-f4_eyJA1ABl2SXbrJslBtfFNNkjII6A",
  authDomain: "soil-9f7c8.firebaseapp.com",
  projectId: "soil-9f7c8",
  storageBucket: "soil-9f7c8.appspot.com",
  messagingSenderId: "380169557389",
  appId: "1:380169557389:web:bc4afcc4b47a3c2b6599c4",
  measurementId: "G-0EESH997J1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)