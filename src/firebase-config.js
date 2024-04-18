// src/firebase-config.js
import firebase from 'firebase/app';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyA2IY2lRkSTLCJU-P5DlA38gjrL--cTcuk",
    authDomain: "trk-app-505a1.firebaseapp.com",
    projectId: "trk-app-505a1",
    storageBucket: "trk-app-505a1.appspot.com",
    messagingSenderId: "786555738802",
    appId: "1:786555738802:web:294f5035fa5e3fb82847ab",
    measurementId: "G-NZ10SGBWYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
