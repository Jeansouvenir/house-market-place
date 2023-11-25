import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3M-Ci6mpNiBlt9e_YQ9jl0tyLGwOLU0c",
  authDomain: "new-project-94809.firebaseapp.com",
  projectId: "new-project-94809",
  storageBucket: "new-project-94809.appspot.com",
  messagingSenderId: "800929062399",
  appId: "1:800929062399:web:7a6aecb75e94a662d65bca"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()