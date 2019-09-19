import firebase from 'firebase';

//Define configuration settings 
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};
firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebase.auth;