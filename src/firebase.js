import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth,onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWP7TNd-Y2EkqkIjpt_Ir7XicUs6uwxDM",
  authDomain: "project-6ab17.firebaseapp.com",
  projectId: "project-6ab17",
  storageBucket: "project-6ab17.firebasestorage.app",
  messagingSenderId: "148156752093",
  appId: "1:148156752093:web:c9ffc1477cd0a1f1ec7b34",
  measurementId: "G-GJE6C325X8"
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);