import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCmuEaGp7myHm0m5eOKBVRibGip1J72Lp0",
  authDomain: "saylanihome20.firebaseapp.com",
  databaseURL: "https://saylanihome20.firebaseio.com",
  projectId: "saylanihome20",
  storageBucket: "saylanihome20.appspot.com",
  messagingSenderId: "1023254107684",
  appId: "1:1023254107684:web:2faccc967c682a8cdaaab1",
  measurementId: "G-63WLMPFG85"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();
const db = app.firestore();

export { auth, db };
