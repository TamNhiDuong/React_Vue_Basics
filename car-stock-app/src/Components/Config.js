import firebase from 'firebase';

//Define configuration settings 
const firebaseConfig = {
    apiKey: "AIzaSyB18x890fe2mIgNB_23q3K0623m2BKBj38",
    authDomain: "",
    databaseURL: "https://carstockrest.herokuapp.com/cars",
    projectId: "car-stock-app",
    storageBucket: "",
    messagingSenderId: "329416725193"
};
firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebase.auth;