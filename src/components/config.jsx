// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-UhZj0XNjOHlUb09TfHibCV7bQ8OnBoQ",
  authDomain: "mbauvc.firebaseapp.com",
  projectId: "mbauvc",
  storageBucket: "mbauvc.appspot.com",
  messagingSenderId: "777693209031",
  appId: "1:777693209031:web:cef990954a9a283e2139e2",
  measurementId: "G-RNRG9DHLCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authentication = getAuth(app);
export const db = getFirestore(app);