import firebase from 'firebase/app';
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAwV0NYZLIVIBPJnnO9rNUof-o8eMz7sV8",
  authDomain: "authentication-bc774.firebaseapp.com",
  projectId: "authentication-bc774",
  storageBucket: "authentication-bc774.appspot.com",
  messagingSenderId: "867763799209",
  appId: "1:867763799209:web:640012af6198744f7e55b8",
});


export const auth = app.auth();
export default app;