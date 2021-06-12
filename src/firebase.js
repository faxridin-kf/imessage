import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyBa0DkCdJsbRtf79LliMquQwXAzeo-PRB4",
 authDomain: "imessageclone-2cb42.firebaseapp.com",
 projectId: "imessageclone-2cb42",
 storageBucket: "imessageclone-2cb42.appspot.com",
 messagingSenderId: "24711573456",
 appId: "1:24711573456:web:96afec785edb2de98a93d5",
 measurementId: "G-ET8QVMDGZL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;