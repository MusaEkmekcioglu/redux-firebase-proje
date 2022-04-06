// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD9UFTzGDmUXoZqvqNEGSs1XesdyzM2Mu4',
  authDomain: 'fake-store-7b4e4.firebaseapp.com',
  databaseURL:
    'https://fake-store-7b4e4-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'fake-store-7b4e4',
  storageBucket: 'fake-store-7b4e4.appspot.com',
  messagingSenderId: '971505192145',
  appId: '1:971505192145:web:cb1b041f786409635949f0',
  measurementId: 'G-0Z64JPZDQM',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app
