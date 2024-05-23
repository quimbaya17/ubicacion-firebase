
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBVDTo3sJj6mZ3xzvivSn2EkGh0lS2EGlU",
    authDomain: "mandersdev.firebaseapp.com",
    databaseURL: "https://mandersdev-default-rtdb.firebaseio.com",
    projectId: "mandersdev",
    storageBucket: "mandersdev.appspot.com",
    messagingSenderId: "76782946615",
    appId: "1:76782946615:web:53d337f2c39f9139e972b2",
    measurementId: "G-7RH7132411"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue };
