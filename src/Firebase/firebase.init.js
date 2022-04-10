import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyCu-GLR9bE3Xp9mX8fRrRUcdq0hTZ2p43A',
  authDomain: 'ema-jhon-ad0f8.firebaseapp.com',
  projectId: 'ema-jhon-ad0f8',
  storageBucket: 'ema-jhon-ad0f8.appspot.com',
  messagingSenderId: '935615310582',
  appId: '1:935615310582:web:b45807309f39f5d30fdad7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
