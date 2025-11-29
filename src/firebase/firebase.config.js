// firebase/config.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDLpeR4SMAT8nT4Z64d5yqQ1cbM-8Rppic",
  authDomain: "cilent-details.firebaseapp.com",
  databaseURL: "https://cilent-details-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cilent-details",
  storageBucket: "cilent-details.firebasestorage.app",
  messagingSenderId: "247896096742",
  appId: "1:247896096742:web:792ab81494ae34faf72027",
  measurementId: "G-1K7GZ3TS8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);