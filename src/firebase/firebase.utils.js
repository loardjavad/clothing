import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAgPlgpax5nYBw7UrwY5jw8QD8xhDxy0rg",
    authDomain: "clothing-43355.firebaseapp.com",
    databaseURL: "https://clothing-43355.firebaseio.com",
    projectId: "clothing-43355",
    storageBucket: "clothing-43355.appspot.com",
    messagingSenderId: "484207725299",
    appId: "1:484207725299:web:b518f926003c4f86678586"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;