import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDR2njF0309wPZ14nDr5IT6PoNCGzRnzCI",
  authDomain: "social-brand-managers.firebaseapp.com",
  projectId: "social-brand-managers",
  storageBucket: "social-brand-managers.appspot.com",
  messagingSenderId: "544014505646",
  appId: "1:544014505646:web:d0d94bc9ca9ec37154bf3f",
  measurementId: "G-2WMWXKT9C6",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
