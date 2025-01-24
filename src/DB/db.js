import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAchCpaN2KGXu4qfyyH2Am4hhFEr5UqED4",
  authDomain: "hypemode-a32b6.firebaseapp.com",
  projectId: "hypemode-a32b6",
  storageBucket: "hypemode-a32b6.firebasestorage.app",
  messagingSenderId: "78298652116",
  appId: "1:78298652116:web:6f5dfbeb102db88d4b4a41"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db; 