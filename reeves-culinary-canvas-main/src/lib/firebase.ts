// Firebase configuration and initialization
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAHhOGrov1O1yVzuoWJrhe59ty7sTiTd-s",
  authDomain: "reeves-5b131.firebaseapp.com",
  projectId: "reeves-5b131",
  storageBucket: "reeves-5b131.firebasestorage.app",
  messagingSenderId: "416581715419",
  appId: "1:416581715419:web:545805bba39259c43353fe",
  measurementId: "G-Y52W9NNX1L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth, analytics };
