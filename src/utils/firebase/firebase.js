import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc} from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const production = process.env.REACT_APP_PRODUCTION_STATE === "TRUE"

console.log("production: ", production)

const firebaseProdConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_PROD_API_KEY,
  authDomain: "gisaubc-prod.firebaseapp.com",
  projectId: "gisaubc-prod",
  storageBucket: "gisaubc-prod.appspot.com",
  messagingSenderId: "421113142514",
  appId: "1:421113142514:web:eeb08b157ae8a4a911c46b",
  measurementId: "G-6VX0KNGHPH"
};

const firebaseDevConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_DEV_API_KEY,
  authDomain: "gisaubc-dev.firebaseapp.com",
  projectId: "gisaubc-dev",
  storageBucket: "gisaubc-dev.appspot.com",
  messagingSenderId: "422211599405",
  appId: "1:422211599405:web:4c511b9238af8349eb8ca4",
  measurementId: "G-R3SX06K9YH"
};

// Initialize Firebase
const app = initializeApp(production ? firebaseProdConfig : firebaseDevConfig);
getAnalytics(app);

// auth
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

// firestore
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  // check if the data exists in the database
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
