// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBTGPIYjAGCQWNh0wd8G5fqS-M5zyyA-7A',
  authDomain: 'animelistapp-94d19.firebaseapp.com',
  projectId: 'animelistapp-94d19',
  storageBucket: 'animelistapp-94d19.appspot.com',
  messagingSenderId: '873059933497',
  appId: '1:873059933497:web:20ac54bc10acad66785ce8',
  measurementId: 'G-QYF3S1PZLE'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app)
