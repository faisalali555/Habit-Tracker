// Ahem: Is file mein apne Firebase project ki asal (real) configuration daalein.

const firebaseConfig = {
    apiKey: "AIzaSyCNlPgcBvEgkXlpdgpESR4HpmODjmELTYQ",
    authDomain: "habit-tracker-f6492.firebaseapp.com",
    projectId: "habit-tracker-f6492",
    storageBucket: "habit-tracker-f6492.firebasestorage.app",
    messagingSenderId: "383071915072",
    appId: "1:383071915072:web:1d397c7ff97ab847fee3a5",
};

// Firebase ko initialize karein
firebase.initializeApp(firebaseConfig);

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
