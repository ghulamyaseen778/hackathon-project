// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAs0ZVSAW2h4tWHl1i893ino-zmgWnZA8",
  authDomain: "hackathon-transport-app.firebaseapp.com",
  projectId: "hackathon-transport-app",
  storageBucket: "hackathon-transport-app.appspot.com",
  messagingSenderId: "369528787968",
  appId: "1:369528787968:web:bc383af9f7bfe9e080b4e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }