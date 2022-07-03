import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';



// Your web app's Firebase configuration
 export const firebaseConfig = {
  apiKey: "AIzaSyDHEynfsU4AoK43SaGCb1gYLlngbP2DWqU",
  authDomain: "btvn-6afce.firebaseapp.com",
  projectId: "btvn-6afce",
  storageBucket: "btvn-6afce.appspot.com",
  messagingSenderId: "906725054838",
  appId: "1:906725054838:web:82af7b47eaf18bcc12c257"
};
 const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
 export const auth = getAuth(app);

