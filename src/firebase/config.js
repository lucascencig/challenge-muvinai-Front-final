// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'

const firebaseConfig = {
  apiKey: "AIzaSyBCY9XwwR6mZ0FqLrDVgjiuhDJsM38vASg",
  authDomain: "muvinai-7907d.firebaseapp.com",
  projectId: "muvinai-7907d",
  storageBucket: "muvinai-7907d.appspot.com",
  messagingSenderId: "713612472712",
  appId: "1:713612472712:web:21236140442df0c1024a3d",
  measurementId: "G-DGTCPV89LG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)

export async function uploadFile(file) {
  const storageRef = ref(storage, v4())
  await uploadBytes(storageRef, file)
  const urlImage = await getDownloadURL(storageRef)
  return urlImage
}