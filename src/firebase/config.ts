import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyDgYIapauGA8WzK0cVsZVESunDSC0AqkGM",
  authDomain: "restaurant-management-files.firebaseapp.com",
  projectId: "restaurant-management-files",
  storageBucket: "restaurant-management-files.appspot.com",
  messagingSenderId: "586783773225",
  appId: "1:586783773225:web:32f61614e7fb5f24814238",
  measurementId: "G-NY8K43CF5Q"

};

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

export async function uploadFile(file: File, category: string) {
  const storageRef = ref(storage, `${category}/${file.name}`)
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  return url
}
