import firebase from 'firebase';

 
    //paste your SDK here
  const firebaseConfig = {
    apiKey: "AIzaSyBTHuRhtDRNOmQ9odlsfqFjOwYs9pW-XFA",
    authDomain: "project-c-58-e735e.firebaseapp.com",
    databaseURL: "https://project-c-58-e735e-default-rtdb.firebaseio.com",
    projectId: "project-c-58-e735e",
    storageBucket: "project-c-58-e735e.appspot.com",
    messagingSenderId: "562784971037",
    appId: "1:562784971037:web:8a312734de5996638899f4"
  };


  // Initialize Firebase

firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();