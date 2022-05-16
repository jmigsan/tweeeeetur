import { useState } from "react";

import { v4 as uuidv4 } from 'uuid';

//---------Firebase Start
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { collection, addDoc, getFirestore } from "firebase/firestore"; 

import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import { getStorage, ref } from 'firebase/storage';
import { useUploadFile } from 'react-firebase-hooks/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWOmWUyeY6YWEhjLCrGyOPgkR5t3UgRCE",
  authDomain: "tweeeeetur-a362e.firebaseapp.com",
  databaseURL: "https://tweeeeetur-a362e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tweeeeetur-a362e",
  storageBucket: "tweeeeetur-a362e.appspot.com",
  messagingSenderId: "62832004261",
  appId: "1:62832004261:web:c9412512a57e581913114c",
  measurementId: "G-GCXGPMWMH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const storage = getStorage(app);

//-------------Firebase End

const db = getFirestore(app);

const writeTwoot = async (twoothor, twootxt, twootime, twootimage) => {

  try {
    const docRef = await addDoc(collection(db, "twoots"), {
      twoothor: twoothor,
      twootxt: twootxt,
      twootime: twootime,
      twootimage: twootimage
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

}

const TwootFormFirestoreAuthStorage = () => {

  const [uploadFile, uploading, snapshot, error] = useUploadFile();

  const [selectedFile, setSelectedFile] = useState(null);

  const uploadToStorage = async (theUUID) => {
    const storageRef = ref(storage, `twootimages/${theUUID}.jpg`);
    
    if (selectedFile) {
      const result = await uploadFile(storageRef, selectedFile);
      //alert(`Result: ${JSON.stringify(result)}`);
    }
  }

  const [user] = useAuthState(auth);
  const [twootxt, setTwootxt] = useState("");

  const handlingSubmit = () => {
    let now = new Date();
    let nowUTC = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
    let twootime = nowUTC.toISOString();

    let twoothor = user.displayName;

    let twootimage = "";
    
    if (selectedFile !== null) {
      let tempUUID = uuidv4();
      uploadToStorage(tempUUID);
      twootimage = `${tempUUID}.jpg`;
    }

    writeTwoot(twoothor, twootxt, twootime, twootimage);

    setTwootxt("");
    setSelectedFile(null);
  }

  return (
    <div>
      <div className="input-grid">     
        <label htmlFor="twootxt">twoot: </label>
       
        <textarea
          type="text" 
          value={twootxt}
          onChange = {e => setTwootxt(e.target.value)}
        />

        <br />

        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files ? e.target.files[0] : undefined;
            setSelectedFile(file);
          }}
        />

        <br />

        <button onClick={handlingSubmit}> twoot it </button>
      </div>

    </div>
  )
}

export default TwootFormFirestoreAuthStorage