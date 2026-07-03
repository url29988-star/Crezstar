import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAFJwXkxOMz3vnwYDPj4GcIQplEWz5H4C0",
  authDomain: "my-sky-c35b8.firebaseapp.com",
  projectId: "my-sky-c35b8",
  storageBucket: "my-sky-c35b8.firebasestorage.app",
  messagingSenderId: "219045133103",
  appId: "1:219045133103:web:540b5ee451b64725c8ffda",
  measurementId: "G-LSQLJ7BYKW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
