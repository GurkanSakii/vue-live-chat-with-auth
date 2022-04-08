import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyArzuYvFKE0zs6jP9l5OwGQit1La36K8BU",
    authDomain: "live-chat-5bcad.firebaseapp.com",
    projectId: "live-chat-5bcad",
    storageBucket: "live-chat-5bcad.appspot.com",
    messagingSenderId: "310970738523",
    appId: "1:310970738523:web:32390b8a3c3eecad601c7e"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)
  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp
  
  export { projectAuth, projectFirestore, timestamp }
