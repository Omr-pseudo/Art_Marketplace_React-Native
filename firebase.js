import { initializeApp } from "firebase/app";

import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDgrT06cJpEP75uY3m_jLqFHdEt5Dfcq1I",
  authDomain: "art-marketplace-72dee.firebaseapp.com",
  projectId: "art-marketplace-72dee",
  storageBucket: "art-marketplace-72dee.appspot.com",
  messagingSenderId: "497988151383",
  appId: "1:497988151383:web:c0867d58bdbcc3d3345b12"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage();