import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPcksOQrbEW12g8EBLx4OpJqhjaF1GUjo",
  authDomain: "netflixlow-2022.firebaseapp.com",
  projectId: "netflixlow-2022",
  storageBucket: "netflixlow-2022.appspot.com",
  messagingSenderId: "414962142092",
  appId: "1:414962142092:web:34149ad869e26f825a24a9",
  measurementId: "G-0R5961HLC9"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { auth };
export default db;