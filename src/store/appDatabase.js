import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

firebase.initializeApp({
  apiKey: 'AIzaSyB6nGzMCcBvrBNppM3uWKIVAjg2RwnFudc',
  authDomain: 'smartdevice-app.firebaseapp.com',
  projectId: 'smartdevice-app',
  storageBucket: 'smartdevice-app.appspot.com',
  messagingSenderId: '652787505319',
  appId: '1:652787505319:web:b423e9a77a6f3e3b812382',
  measurementId: 'G-E6KRLFMXMM',
  databaseURL: 'https://smartdevice-app-default-rtdb.europe-west1.firebasedatabase.app/',
});

firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
