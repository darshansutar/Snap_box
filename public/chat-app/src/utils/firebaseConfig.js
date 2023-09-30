import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBiioTtAs-bz9ZIJOLTsktDvYaAa-AVB-M",
    authDomain: "chat-app-8c5bf.firebaseapp.com",
    projectId: "chat-app-8c5bf",
    storageBucket: "chat-app-8c5bf.appspot.com",
    messagingSenderId: "882794516363",
    appId: "1:882794516363:web:dfafe946bb3703f1a0698e",
    measurementId: "G-5DDSHSLYFV"
  };

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);