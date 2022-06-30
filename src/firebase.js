// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzRHZNfCsAm4r2Fi38AT9Cl-fhYeG3qGY",
  authDomain: "netflix-react-a3ac8.firebaseapp.com",
  projectId: "netflix-react-a3ac8",
  storageBucket: "netflix-react-a3ac8.appspot.com",
  messagingSenderId: "469356738047",
  appId: "1:469356738047:web:ea1cdd7c2fd6b6b57a23ca",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
