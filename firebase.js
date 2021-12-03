import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDtAaeY35Gvr6Gto2x7FsNe_9NzGMtjdG0",
  authDomain: "classroom-ef655.firebaseapp.com",
  databaseURL: "https://classroom-ef655-default-rtdb.firebaseio.com",
  projectId: "classroom-ef655",
  storageBucket: "classroom-ef655.appspot.com",
  messagingSenderId: "79221989539",
  appId: "1:79221989539:web:abd9b50de8470fac779f16"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db;
