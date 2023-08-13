// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqHo08DLIPfc7mWdmdxuC6_TH4lmxuKtw",
  authDomain: "mit-kart-3b6aa.firebaseapp.com",
  projectId: "mit-kart-3b6aa",
  storageBucket: "mit-kart-3b6aa.appspot.com",
  messagingSenderId: "336831655072",
  appId: "1:336831655072:web:f2e57b32d41407817d6dc5",
  measurementId: "G-3XTHDD64CJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
//const analytics = getAnalytics(app);

export {auth,db}