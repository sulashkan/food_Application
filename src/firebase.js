import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyANkEI4oy_0oL6q9egx8WmHe2a1MvKNREI",
  authDomain: "authproject-4bd9d.firebaseapp.com",
  projectId: "authproject-4bd9d",
  storageBucket: "authproject-4bd9d.firebasestorage.app",
  messagingSenderId: "819830293827",
  appId: "1:819830293827:web:33b53018ef36d513df1bf6",
  measurementId: "G-FBNJ842RX0"
//   databaseURL: "https://authproject-4bd9d-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;



