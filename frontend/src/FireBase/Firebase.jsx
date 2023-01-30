import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBQ-YG9oKfndplUlnqkFYNNKo-SGHVmurM",
  authDomain: "envpa-79cb3.firebaseapp.com",
  projectId: "envpa-79cb3",
  storageBucket: "envpa-79cb3.appspot.com",
  messagingSenderId: "103845318092",
  appId: "1:103845318092:web:8c7c6aaaf48576879c2169",
  measurementId: "G-HY0CF49DNM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();

export {app,auth,provider}