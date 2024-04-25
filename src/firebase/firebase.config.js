// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEYqhzUPO_TIyMUiSekllsGDE-iK5l63M",
  authDomain: "globevista-e652b.firebaseapp.com",
  projectId: "globevista-e652b",
  storageBucket: "globevista-e652b.appspot.com",
  messagingSenderId: "658066172795",
  appId: "1:658066172795:web:cf8c0f1245fd021b916bde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
