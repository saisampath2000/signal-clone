import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBauXpljHGjbHGzlG6aqHAyZiqNh23PDps",
    authDomain: "signal-clone-b67e5.firebaseapp.com",
    projectId: "signal-clone-b67e5",
    storageBucket: "signal-clone-b67e5.appspot.com",
    messagingSenderId: "560284889757",
    appId: "1:560284889757:web:a010aa25e5b497c3895a74"
};
let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };