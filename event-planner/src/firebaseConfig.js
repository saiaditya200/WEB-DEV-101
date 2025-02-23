import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe3xvesmuifvH8Ipsm-apcad5dRAyifjw",
  authDomain: "eventplanner-2d09e.firebaseapp.com",
  projectId: "eventplanner-2d09e",
  storageBucket: "eventplanner-2d09e.firebasestorage.app",
  messagingSenderId: "62654871502",
  appId: "1:62654871502:web:b6b869c62e026814665d9f",
  measurementId: "G-N6CKW3Q1P1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};