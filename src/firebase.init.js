// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMkT371TgrYprz-b6ZLpMhY7-922bpPqs",
    authDomain: "router-firebase-unification.firebaseapp.com",
    projectId: "router-firebase-unification",
    storageBucket: "router-firebase-unification.appspot.com",
    messagingSenderId: "306051693773",
    appId: "1:306051693773:web:ddce98521a2a4cbfbd7d84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;