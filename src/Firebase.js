import { initializeApp } from 'firebase/app';

import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDlJoe3q62fbf1HsJxAM75l4mBGAetVmvk",
  authDomain: "coderreact-bsas.firebaseapp.com",
  databaseURL: "https://coderreact-bsas-default-rtdb.firebaseio.com",
  projectId: "coderreact-bsas",
  storageBucket: "coderreact-bsas.appspot.com",
  messagingSenderId: "255319175754",
  appId: "1:255319175754:web:5d9e7aa71c0941406cacb3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)