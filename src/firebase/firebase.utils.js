import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: "AIzaSyA_8pLSFyzjxbT9QlhJCmr_Ein00VUR42s",
   authDomain: "vamos-clothing-db.firebaseapp.com",
   databaseURL: "https://vamos-clothing-db.firebaseio.com",
   projectId: "vamos-clothing-db",
   storageBucket: "vamos-clothing-db.appspot.com",
   messagingSenderId: "841058907007",
   appId: "1:841058907007:web:7c683c5ca54aba1417604a",
   measurementId: "G-N5Z868DTXH"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;
   
   const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapShot = await userRef.get();

   if (!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
         await userRef.set({
            displayName, 
            email, 
            createdAt, 
            ...additionalData
         })
      } catch (error) {
         console.log('error creating user', error.message);
      }
   } 

   return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;