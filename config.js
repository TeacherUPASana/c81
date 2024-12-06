// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = { apiKey: "AIzaSyAwldLPMTl7zS8TpWvUnZIviF08gZ17YB4", authDomain: "anshikaproject-4290e.firebaseapp.com", databaseURL:
"https://anshikaproject-4290e-default-rtdb.firebaseio.com",
projectId: "anshikaproject-4290e", storageBucket: "anshikaproject-4290e.firebasestorage.app", messagingSenderId: "521219424489", appId: "1:521219424489:web:17d750ca5fe89ce3613078" };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
