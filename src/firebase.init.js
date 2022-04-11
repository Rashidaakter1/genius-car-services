// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD5wSojOCYwwiOJ3PeJBkPjsDJZP6qAt8",
  authDomain: "genius-car-services-18e99.firebaseapp.com",
  projectId: "genius-car-services-18e99",
  storageBucket: "genius-car-services-18e99.appspot.com",
  messagingSenderId: "533906248766",
  appId: "1:533906248766:web:b3ce455961b179af442d6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);

export default auth;