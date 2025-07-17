  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCNlPgcBvEgkXlpdgpESR4HpmODjmELTYQ",
    authDomain: "habit-tracker-f6492.firebaseapp.com",
    projectId: "habit-tracker-f6492",
    storageBucket: "habit-tracker-f6492.firebasestorage.app",
    messagingSenderId: "383071915072",
    appId: "1:383071915072:web:1d397c7ff97ab847fee3a5",
    measurementId: "G-0KDDBKVE37"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// Firebase services ko export karein taake doosri files mein istemal ho sakein
export const db = firebase.firestore();
export const auth = firebase.auth();
const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Sign-in function
export const signInWithGoogle = () => {
    return auth.signInWithPopup(GoogleAuthProvider);
};

// Sign-out function
export const signOutUser = () => {
    return auth.signOut();
};
