// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth
 } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7z9J5RxaYcmr17O8wZSfm87FVIOUCASA",
  authDomain: "e-commerce-app11.firebaseapp.com",
  projectId: "e-commerce-app11",
  storageBucket: "e-commerce-app11.appspot.com",
  messagingSenderId: "678120821675",
  appId: "1:678120821675:web:7bea42d2f177250e7d78ee",
  measurementId: "G-0Z3ZH519DY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth,
    analytics,
   };
