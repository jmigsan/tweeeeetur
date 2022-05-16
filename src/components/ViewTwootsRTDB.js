import { useEffect, useState } from "react";

//---------Firebase Start
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getDatabase, ref, onValue} from "firebase/database";

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

// const ViewTwoots = ( {twootabase} ) => {
const ViewTwootsRTDB = () => {

  const [twoots, setTwoots] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const twootRef = ref(db, 'twoots/');
    
    onValue(twootRef, (snapshot) => {
      let tempTwoots = [];
      snapshot.forEach(childSnapshot => {
        const childData = childSnapshot.val();
        tempTwoots.unshift(childData);
      });
      setTwoots(tempTwoots);
    });
  }, []);
  
  return (
    <div>
      {
        twoots.map(twoot => {
          return (
            <div className="twoot">
              <h3>{twoot.twoothor}</h3>
              <p>{twoot.twootxt}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default ViewTwootsRTDB