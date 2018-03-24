import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDXyUFe9gHRpNLSj3Jn2PySEp_6c7Pk-40",
    authDomain: "controlescolar-f2f02.firebaseapp.com",
    databaseURL: "https://controlescolar-f2f02.firebaseio.com",
    projectId: "controlescolar-f2f02",
    storageBucket: "controlescolar-f2f02.appspot.com",
    messagingSenderId: "130724317089"
  };
  firebase.initializeApp(config);

export default firebase;