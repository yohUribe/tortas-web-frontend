import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB81WX0Rxkn-ZUQwC6DjsZHwqxFwXU1N4Q",
  authDomain: "dolcevita-694bc.firebaseapp.com",
  databaseURL: "https://dolcevita-694bc-default-rtdb.firebaseio.com",
  projectId: "dolcevita-694bc",
  storageBucket: "dolcevita-694bc.appspot.com",
  messagingSenderId: "934904465589",
  appId: "1:934904465589:web:ae1eac9a3ea237e36056fc",
  measurementId: "G-LLJEG86HWT"
};
export const firebaseApp = initializeApp(firebaseConfig)

// used for the firestore refs
export const db = getFirestore(firebaseApp)