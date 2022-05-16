import { useState } from "react";

//---------Firebase Start
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { collection, addDoc, getFirestore } from "firebase/firestore"; 

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

//-------------Firebase End

const db = getFirestore(app);

const writeTwoot = async (twoothor, twootxt, twootime) => {

  try {
    const docRef = await addDoc(collection(db, "twoots"), {
      twoothor: twoothor,
      twootxt: twootxt,
      twootime: twootime
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

}

const TwootFormFirestore = () => {

  const [twoothor, settwoothor] = useState("");
  const [twootxt, setTwootxt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let now = new Date();
    let nowUTC = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
    let twootime = nowUTC.toISOString();

    writeTwoot(twoothor, twootxt, twootime);

    settwoothor("");
    setTwootxt("");
  }

  return (
    <div>
      <br/>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name: </label>
        <br />
        
        <input
          type="text"
          value={twoothor}
          onChange = {e => settwoothor(e.target.value)}
        />
        <br /><br />
        
        <label htmlFor="msg">twoot: </label>
        <br />
        
        <textarea
          type="text" 
          value={twootxt}
          onChange = {e => setTwootxt(e.target.value)}
        />
        <br /><br />
        
        <input type="submit" value="twoot it"/>
      </form>
    </div>
  )
}

export default TwootFormFirestore