// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernestate-66739.firebaseapp.com",
  projectId: "mernestate-66739",
  storageBucket: "mernestate-66739.appspot.com",
  messagingSenderId: "109594082555",
  appId: "1:109594082555:web:d445eeb40320defd69c45e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);