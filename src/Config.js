import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjA7epaG1ncIFrj82NLdFrnAIvitA7Ybc",
  authDomain: "react-ynan.firebaseapp.com",
  projectId: "react-ynan",
  storageBucket: "react-ynan.appspot.com",
  messagingSenderId: "446069351429",
  appId: "1:446069351429:web:81bd4140dd3b59142c686c"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
// const app = initializeApp(firebaseConfig);
// const projectStorage = firebase.storage();
// const projectFirestore = firebase.firestore();
// const projectDatabase = firebase.database();

// export {projectStorage,projectDatabase, projectFirestore, app};
// export default projectDatabase.database().ref();
