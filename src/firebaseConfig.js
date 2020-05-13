import firebase from 'firebase/app';
import 'firebase/firestore';

// firebase init goes here
const config = {
  apiKey: process.env.firebaseApiKey,
  authDomain: process.env.firebaseAuthDomain,
  databaseURL: process.env.firebaseDatabaseUrl,
  projectId: process.env.firebaseProjectId,
  storageBucket: process.env.firebaseStorageBucket,
  messagingSenderId: process.env.firebaseMessagingSenderId,
  appId: process.env.firebaseAppId,
};
firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();

// firebase collections
const notes = db.collection('notes');
const user = db.collection('user');

export {
  db,
  notes,
  user,
};
