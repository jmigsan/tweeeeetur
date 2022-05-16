import { useState } from "react";

//---------Firebase Start
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getStorage, ref, getDownloadURL } from "firebase/storage";

import { onSnapshot, getFirestore, getDocs, collection, query } from "firebase/firestore";

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

const storage = getStorage();

const ViewTwootsFirestore = () => {

  const [twoots, setTwoots] = useState([]);

  // useEffect(() => {
  //   const getThemTwoots = async () => { 
  //     let tempTwoots = [];
  //     const querySnapshot = await getDocs(collection(db, "twoots"));
  //     querySnapshot.forEach((doc) => {
  //       tempTwoots.push({twootId:doc.id, twoothor:doc.data().twoothor, twootxt:doc.data().twootxt});
  //     });
  //     setTwoots(tempTwoots);
  //   };
  //   getThemTwoots();
  // }, []);

  const realtimeTwoots = onSnapshot(query(collection(db, "twoots")), (querySnapshot) => {
    let tempTwoots = [];
    querySnapshot.forEach((doc) => {
      tempTwoots.push({twootId:doc.id, twoothor:doc.data().twoothor, twootxt:doc.data().twootxt, twootime:doc.data().twootime, twootimage:doc.data().twootimage});
    });
    setTwoots(tempTwoots);
});
  
  return (
    <div>
      {
        twoots.map(twoot => {
          let twootimeLocal = new Date(twoot.twootime);
          // let twootimagePath = getDownloadURL(ref(storage, `twootimages/${twoot.twootimage}`));
          let twootimagePath = `https://firebasestorage.googleapis.com/v0/b/tweeeeetur-a362e.appspot.com/o/twootimages%2F${twoot.twootimage}?alt=media`;
          
          if (twootimagePath === "https://firebasestorage.googleapis.com/v0/b/tweeeeetur-a362e.appspot.com/o/twootimages%2Fundefined?alt=media") {
            return (
              <div className="twoot" key={twoot.twootId}>
                <h3>{twoot.twoothor}</h3>
                <p>{twoot.twootxt}</p>
                <p>{`${twootimeLocal.toLocaleDateString()}, ${twootimeLocal.toLocaleTimeString()}`}</p>
              </div>
            )
          }

          if (twootimagePath === "https://firebasestorage.googleapis.com/v0/b/tweeeeetur-a362e.appspot.com/o/twootimages%2F?alt=media") {
            return (
              <div className="twoot" key={twoot.twootId}>
                <h3>{twoot.twoothor}</h3>
                <p>{twoot.twootxt}</p>
                <p>{`${twootimeLocal.toLocaleDateString()}, ${twootimeLocal.toLocaleTimeString()}`}</p>
              </div>
            )
          }
          
          return (
            <div className="twoot" key={twoot.twootId}>
              <h3>{twoot.twoothor}</h3>
              <p>{twoot.twootxt}</p>
              <p>{`${twootimeLocal.toLocaleDateString()}, ${twootimeLocal.toLocaleTimeString()}`}</p>
              <img className="twootimg" src={twootimagePath} alt="twoot image" />
            </div>
          )

        })
      }
    </div>
  )
}

export default ViewTwootsFirestore