// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_ID,
  authDomain: "atharvamulgund-cdd00.firebaseapp.com",
  projectId: "atharvamulgund-cdd00",
  storageBucket: "atharvamulgund-cdd00.appspot.com",
  messagingSenderId: "1049502164702",
  appId: "1:1049502164702:web:5901b6e6bd7acdd346444f",
  measurementId: "G-L8YDPL3HVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default analytics