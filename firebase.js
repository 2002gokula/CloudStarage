import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
// Add the Firebase products that you want to use
// import "firebase/auth";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyCX36FxtFyJOaWR0CPJfowkPHpGdhcB220",
  authDomain: "fir-f309f.firebaseapp.com",
  projectId: "fir-f309f",
  storageBucket: "fir-f309f.appspot.com",
  messagingSenderId: "878469011714",
  appId: "1:878469011714:web:dd8578e7439eb6f16c0a1b",
  measurementId: "G-1L3W2DS2YX",
}

const app = initializeApp(firebaseConfig);

const auth= firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = app.firestore()
export { auth, provider, storage, db }
