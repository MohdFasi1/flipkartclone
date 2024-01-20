  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCF4iJjPnmeBg6ICC474Vlqs05TaOxJiWA",
    authDomain: "flipkart-clone-4a6d4.firebaseapp.com",
    projectId: "flipkart-clone-4a6d4",
    storageBucket: "flipkart-clone-4a6d4.appspot.com",
    messagingSenderId: "287294379535",
    appId: "1:287294379535:web:ab9344e45c7f1c9050357a",
    measurementId: "G-6M702XZCSK"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

console.log(firebaseConfig)

  
//   import { getAuth, signInWithPhoneNumber } from "firebase/auth";

// const phoneNumber = getPhoneNumberFromUserInput();
// const appVerifier = window.recaptchaVerifier;

// const auth = getAuth();
// signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//     .then((confirmationResult) => {
//       // SMS sent. Prompt user to type the code from the message, then sign the
//       // user in with confirmationResult.confirm(code).
//       window.confirmationResult = confirmationResult;
//       // ...
//     }).catch((error) => {
//       // Error; SMS not sent
//       // ...
//     });