// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDb8DDDSZilZzeoI3QRnOHBC51wFOplGKU",
  authDomain: "tests-ea58c.firebaseapp.com",
  databaseURL: "https://tests-ea58c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tests-ea58c",
  storageBucket: "tests-ea58c.appspot.com",
  messagingSenderId: "837005551791",
  appId: "1:837005551791:web:24616f096ccc480b5ecc5a",
  measurementId: "G-KXENF4554N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);