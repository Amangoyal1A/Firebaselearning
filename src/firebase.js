// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRozFDOm2KE-2Pr0moj5CyM7-SSQ8rfD0",
  authDomain: "app-7efd3.firebaseapp.com",
  projectId: "app-7efd3",
  storageBucket: "app-7efd3.appspot.com",
  messagingSenderId: "1024318813216",
  appId: "1:1024318813216:web:333e8d1a67239864ef3845",
  databaseURL: "https://app-7efd3-default-rtdb.firebaseio.com"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);