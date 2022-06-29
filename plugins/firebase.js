import {
  initializeApp,
  getApps
} from "firebase/app"
import {
  getFirestore
} from "firebase/firestore"

let firebaseApp

const firebaseConfig = {
  apiKey: "AIzaSyCuc9TshdDaHvzB5BWQMP01RqAxD3fJvVE",
  authDomain: "test123-c5e1f.firebaseapp.com",
  projectId: "test123-c5e1f",
  storageBucket: "test123-c5e1f.appspot.com",
  messagingSenderId: "649948483256",
  appId: "1:649948483256:web:e855e950073ca00db92e4d",
  databaseURL: "test123-c5e1f.eur3.firebasedatabase.app"
}
const apps = getApps()
if (!apps.length) {
  firebaseApp = initializeApp(firebaseConfig)
} else {
  firebaseApp = apps[0]
}
const db = getFirestore(firebaseApp, {})
export {
  db
}
