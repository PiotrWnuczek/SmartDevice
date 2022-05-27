import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

firebase.initializeApp({
  apiKey: 'AIzaSyBWoaYe1AficVcccqkh56NF-GIuAhGAN6w',
  authDomain: 'internetthings-app.firebaseapp.com',
  projectId: 'internetthings-app',
  storageBucket: 'internetthings-app.appspot.com',
  messagingSenderId: '251479348839',
  appId: '1:251479348839:web:704626ec3de663801fa6c2',
  measurementId: 'G-WQ3KDG28V3',
});

firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
