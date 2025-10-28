
import { initializeApp , } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA0HMltogJM21DlFmFUTvC3QUeRMF7-HuM",
  authDomain: "authentication-3ada5.firebaseapp.com",
  projectId: "authentication-3ada5",
  storageBucket: "authentication-3ada5.firebasestorage.app",
  messagingSenderId: "965077882907",
  appId: "1:965077882907:web:eb24fdcb1c600a1facc0be",
  measurementId: "G-EJFMTXFWSS"
};

// Initialize Firebase
const app= initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;