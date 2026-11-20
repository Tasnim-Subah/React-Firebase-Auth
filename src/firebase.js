import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Paste your own config here (Firebase Console -> Project settings -> Your apps -> Web app)
const firebaseConfig = {
  apiKey:"AIzaSyALkNBFWRIJxsVtoDyCDsTmFzdkErYifHM" ,
  authDomain:"react-auth-assignment-d1925.firebaseapp.com" ,
  projectId:"react-auth-assignment-d1925" ,
  storageBucket: "react-auth-assignment-d1925.firebasestorage.app",
  messagingSenderId:"98764969735",
  appId:"1:98764969735:web:f26b8876837dcfc5e697a2" ,
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
