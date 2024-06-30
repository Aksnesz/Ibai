// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCPAQbEp6FhpT9SOYqXMDWhlpJAhSJHXyo",
  authDomain: "ibai-eb649.firebaseapp.com",
  databaseURL: "https://ibai-eb649-default-rtdb.firebaseio.com/",
  projectId: "ibai-eb649",
  storageBucket: "ibai-eb649.appspot.com",
  messagingSenderId: "271483782016",
  appId: "1:271483782016:web:8fc7436f282d044f6b7765",
  measurementId: "G-J5BNWZK4MW"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
