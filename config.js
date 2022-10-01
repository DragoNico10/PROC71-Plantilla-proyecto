import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDRnR3gT4ndK1GWGMfLr0JJLIeoO33GhTk",
    authDomain: "e-9ech.firebaseapp.com",
    projectId: "e-9ech",
    storageBucket: "e-9ech.appspot.com",
    messagingSenderId: "911582276240",
    appId: "1:911582276240:web:1ec83abc5be986cdac4615",
    measurementId: "G-0HBHKE4HTP"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
