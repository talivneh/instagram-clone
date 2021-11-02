// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrdOdRYsKCVfMCsEtRcc-gKeK-_zGkU-k",
  authDomain: "instagram-clone-4c208.firebaseapp.com",
  projectId: "instagram-clone-4c208",
  storageBucket: "instagram-clone-4c208.appspot.com",
  messagingSenderId: "727144625423",
  appId: "1:727144625423:web:5cf2d2c00d56d782b67a7a",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
