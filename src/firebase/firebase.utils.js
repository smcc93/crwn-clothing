import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyCtLf3Flmxjwne8dEmYmdE_tBe2J1GC6qk",
    authDomain: "crwn-clothing-slm.firebaseapp.com",
    projectId: "crwn-clothing-slm",
    storageBucket: "crwn-clothing-slm.appspot.com",
    messagingSenderId: "140361326351",
    appId: "1:140361326351:web:c3197f7efb1d6ab796a87a",
    measurementId: "G-9J5GDYHHVB"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;