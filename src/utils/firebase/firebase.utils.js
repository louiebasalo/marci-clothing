import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAKNJGOw4mhvNO0NhLD01toy9N3SUKkdyU",
    authDomain: "marci-clothing-db.firebaseapp.com",
    projectId: "marci-clothing-db",
    storageBucket: "marci-clothing-db.appspot.com",
    messagingSenderId: "55122909879",
    appId: "1:55122909879:web:345fda3af6638a5b47cb32",
    measurementId: "G-KCDBZBYLYV"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);