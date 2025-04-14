// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCViRSeiBeQy8O6Fdfhua8710uZBioQ4s8",
    authDomain: "loginwith-d5817.firebaseapp.com",
    projectId: "loginwith-d5817",
    storageBucket: "loginwith-d5817.firebasestorage.app",
    messagingSenderId: "937430938604",
    appId: "1:937430938604:web:f6450a6984cf9f4e0006c9",
    measurementId: "G-115NDQ86TS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
