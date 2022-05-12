 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAT_VXblqWbGH6BmzCt77UzW69qwpHAzzk",
   authDomain: "alexistiendacesde.firebaseapp.com",
   projectId: "alexistiendacesde",
   storageBucket: "alexistiendacesde.appspot.com",
   messagingSenderId: "444698379145",
   appId: "1:444698379145:web:991fcce558c27e3cd45758",
   measurementId: "G-0HKMESNVJE"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);