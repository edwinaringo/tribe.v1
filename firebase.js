// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDgua5y6Br5uGCZo--TZVUN6hbtXXbXsxQ",
  authDomain: "tribev01-9eaf4.firebaseapp.com",
  projectId: "tribev01-9eaf4",
  storageBucket: "tribev01-9eaf4.appspot.com",
  messagingSenderId: "385696153085",
  appId: "1:385696153085:web:f3217cb4ff99170a9ded94"
};

// Initialize Firebase

// !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth , db}