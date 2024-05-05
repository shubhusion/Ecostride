// src/firebase.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAUNS6zUdzWH6BfGcuo2sU9a3Zpu2ag62c",
    authDomain: "ecostride-d0c9c.firebaseapp.com",
    projectId: "ecostride-d0c9c",
    storageBucket: "ecostride-d0c9c.appspot.com",
    messagingSenderId: "845271867892",
    appId: "1:845271867892:web:1f8aac3f18ebf53df819a1",
    measurementId: "G-WQKECXK29H"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
