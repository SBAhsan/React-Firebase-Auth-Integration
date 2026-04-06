// NEVER SHARE THIS TO ANYONE. DANGER!!!!!!

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjiKFOa8Q0qRcvoTrec3CpVpn_OtGSAoY",
  authDomain: "react-firebase-auth-intg-2ce46.firebaseapp.com",
  projectId: "react-firebase-auth-intg-2ce46",
  storageBucket: "react-firebase-auth-intg-2ce46.firebasestorage.app",
  messagingSenderId: "241320699681",
  appId: "1:241320699681:web:fa695236cb6bdd838e8060"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);