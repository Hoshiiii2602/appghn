// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import 'firebase/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi-KsRELQqg71sfMm765Ee-1lExvKiu9w",
  authDomain: "appghn-cominan.firebaseapp.com",
  projectId: "appghn-cominan",
  storageBucket: "appghn-cominan.appspot.com",
  messagingSenderId: "657266068421",
  appId: "1:657266068421:web:5b60dcbabf7e26e0d8d9ac",
  measurementId: "G-VYD7YPKNDV"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const analytics = getAnalytics(app);

const auth = firebase.auth()
const db = firebase.firestore()
export { auth, db };
export default firebase