import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

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

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        });
        
      }catch (error){
        console.log('error creating the user', error.message);
      }
    }

    return userDocRef;

    //if user data exists
    //retrurn userDocRef
    //if user data does not exist
    //create / set the document with the data from userAuth in my collection


  }

