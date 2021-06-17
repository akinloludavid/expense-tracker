import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC9Q3FnlYnoDemEE7TJBf3FIzIpLvcAP7c",
  authDomain: "spendwizely-8af7d.firebaseapp.com",
  projectId: "spendwizely-8af7d",
  storageBucket: "spendwizely-8af7d.appspot.com",
  messagingSenderId: "748618794610",
  appId: "1:748618794610:web:104a9a37c0303d17cf24eb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();