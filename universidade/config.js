import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCmljlnxOZTWw4qLNUSbXamKHGpG9Vih0E",
    authDomain: "universidade-2f70f.firebaseapp.com",
    projectId: "universidade-2f70f",
    storageBucket: "universidade-2f70f.appspot.com",
    messagingSenderId: "466112518756",
    appId: "1:466112518756:web:c4bfaff0e39329d602dd71"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;