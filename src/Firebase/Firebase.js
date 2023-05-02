import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyDTxqpl686AvPBJP2w0SDEP76i5NU5cKFI",
  authDomain: "chatify-42602.firebaseapp.com",
  projectId: "chatify-42602",
  storageBucket: "chatify-42602.appspot.com",
  messagingSenderId: "358931013392",
  appId: "1:358931013392:web:bae14b333a530d3f738f95",
  measurementId: "G-RK6YSELVS8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };
