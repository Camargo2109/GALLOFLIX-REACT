// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXPxxl5KlNNRgRlhNTo8749-9jr50SEDs",
  authDomain: "galloflix-bdf90.firebaseapp.com",
  projectId: "galloflix-bdf90",
  storageBucket: "galloflix-bdf90.appspot.com",
  messagingSenderId: "708294554226",
  appId: "1:708294554226:web:49670cccddce7f067008eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);