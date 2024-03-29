import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
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

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done');
  };

  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
   };


  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log("tanawn bii")
    console.log(userAuth);
    console.log(additionalInformation)
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
      const {displayName, email, password} = userAuth;
      const createdAt = new Date();

      try{
        await setDoc(userDocRef, {
          displayName, //this one is the display name we get from userDocRef if available; available when we sign up using signInWithGooglePopup
          email,  
          createdAt,
          ...additionalInformation //inside is the additional information such as display name from sign up form
        });

      }catch (error){
        console.log('error creating the user', error.message);
      }
    }

    
    return userSnapshot;

  };

  export const createAuthUserWithEmailAndPassword = async (email, password)  => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);

  };

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    console.log("calling singin")
    
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
  };


  export const signOutUser =async () => await signOut(auth);

  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(
        auth, 
        (userAuth) => {
          unsubscribe();
          resolve(userAuth);
        },
        reject
      )
    })
  }