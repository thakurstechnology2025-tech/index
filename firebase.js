import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDg2Y6wxNQS4vPvopVGCl-FV-nlSRZL1qY",
  authDomain: "thakurs-technology.firebaseapp.com",
  projectId: "thakurs-technology",
  storageBucket: "thakurs-technology.firebasestorage.app",
  messagingSenderId: "268859256018",
  appId: "1:268859256018:web:e30cfe40eaae2c8ee0910b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Make it globally accessible
window.submitToFirebase = async function(data) {
    return await addDoc(collection(db, "leads"), data);
};