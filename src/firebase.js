import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXMhtMsgf5-lCyQdGTqngLVLjIROYyQ6Q",
  authDomain: "vue-dashboard-8743a.firebaseapp.com",
  projectId: "vue-dashboard-8743a",
  storageBucket: "vue-dashboard-8743a.appspot.com",
  messagingSenderId: "758654023376",
  appId: "1:758654023376:web:94e1f822b1b9224ad750d5",
  measurementId: "G-KMJ1S9TCLV",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
