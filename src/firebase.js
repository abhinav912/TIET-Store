import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmamArrB7f003Eq5q1QRp791qmbijNC4s",
  authDomain: "clone-67066.firebaseapp.com",
  projectId: "clone-67066",
  storageBucket: "clone-67066.appspot.com",
  messagingSenderId: "457699095505",
  appId: "1:457699095505:web:c44e87747f1a54d01566f0",
  measurementId: "G-F3M08QEEKJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };