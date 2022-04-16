// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAcHTlrsQDbY5xV9PgCpxYfztrc6MEJyY",
  authDomain: "service-provider-sanjidk.firebaseapp.com",
  projectId: "service-provider-sanjidk",
  storageBucket: "service-provider-sanjidk.appspot.com",
  messagingSenderId: "195706671937",
  appId: "1:195706671937:web:a6da48794e4f5c3e8707c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;