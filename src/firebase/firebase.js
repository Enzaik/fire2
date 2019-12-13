import app, { storage } from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyBXQmO6YCXpANeIGAoMfdQRg_cNvLr9h60",
  authDomain: "firetest-af12a.firebaseapp.com",
  databaseURL: "https://firetest-af12a.firebaseio.com",
  projectId: "firetest-af12a",
  storageBucket: "firetest-af12a.appspot.com",
  messagingSenderId: "414353431827",
  appId: "1:414353431827:web:356336caee0e29d8704ee6",
  measurementId: "G-J7Z2R7F87B"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();

    this.googleProvider = new app.auth.GoogleAuthProvider();

  }
  doSignInWithGoogle = () => {
    this.auth.signInWithPopup(this.googleProvider).then(user => {
      localStorage.setItem('displayName', user.user.displayName);
      localStorage.setItem('email', user.user.email);
      localStorage.setItem('photoURL', user.user.photoURL);
    });
  }
}

export default Firebase;