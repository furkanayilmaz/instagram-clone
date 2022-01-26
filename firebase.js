import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMtyiiO2M7ewCe-PTORJmGn8e-4283TnU",
  authDomain: "react-native-instagram-b1167.firebaseapp.com",
  projectId: "react-native-instagram-b1167",
  storageBucket: "react-native-instagram-b1167.appspot.com",
  messagingSenderId: "423810561494",
  appId: "1:423810561494:web:40abf45ae1daaf9a04e077",
  measurementId: "G-W7P63K8ZTG"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const db = firebase.firestore();

export { firebase, db }