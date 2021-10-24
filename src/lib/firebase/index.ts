// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyDzEFABqgadbGGLRdxq3s4ZUJTTPYOdCpc",
  authDomain: "parakeet-cms-development.firebaseapp.com",
  projectId: "parakeet-cms-development",
  storageBucket: "parakeet-cms-development.appspot.com",
  messagingSenderId: "843614124955",
  appId: "1:843614124955:web:306415c9c88f573f1eff3e",
});

export const firestoreDB = getFirestore();
connectFirestoreEmulator(firestoreDB, "localhost", 8080);
export const firebaseAuth = getAuth();
