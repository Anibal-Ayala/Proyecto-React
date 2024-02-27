
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCOErorAf3dZzQ2X_kWVo3U1GdLcAgIJA0",
  authDomain: "vite-project-e2b0c.firebaseapp.com",
  projectId: "vite-project-e2b0c",
  storageBucket: "vite-project-e2b0c.appspot.com",
  messagingSenderId: "524118886852",
  appId: "1:524118886852:web:6a3807fb199c6eb449bc91"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)