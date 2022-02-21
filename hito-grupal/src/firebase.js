import firebase from "firebase/app";
import "firebase/firestore";

let config = {

    apiKey: "AIzaSyAGwmZByS1babGmTKPNJxoVPokOXqWtqgU",
  
    authDomain: "firestore-accesibilidad-09.firebaseapp.com",
  
    projectId: "firestore-accesibilidad-09",
    databaseURL: "https://firestore-accesibilidad-09.firebaseio.com",
    storageBucket: "firestore-accesibilidad-09.appspot.com",
  
    messagingSenderId: "576951754896",
  
    appId: "1:576951754896:web:80874efc8c4fc9b9bfb815"
  
  };
firebase.initializeApp(config);
export default firebase.firestore();