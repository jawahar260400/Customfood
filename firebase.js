import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCH-b2uiywly2XLuS7iqQa4tzsWV9vXwcE",
  authDomain: "customizefood.firebaseapp.com",
  projectId: "customizefood",
  storageBucket: "customizefood.appspot.com",
  messagingSenderId: "835788208110",
  appId: "1:835788208110:web:c6ee4fdae7d05c7f9ac0ff"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
