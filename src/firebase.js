// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDTdYea-iU91ho8ODJYEbzzcw2gVyh7Is",
  authDomain: "todo-33b64.firebaseapp.com",
  projectId: "todo-33b64",
  storageBucket: "todo-33b64.appspot.com",
  messagingSenderId: "643682638478",
  appId: "1:643682638478:web:58086c1748e24b355147df"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)