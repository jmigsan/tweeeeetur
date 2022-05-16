import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

const About = () => {
  const [user] = useAuthState(auth);

  if (user) {
    return (
      <div>
        <h1>About {user.displayName}, not us.</h1>
        <p>{user.email}</p>
        <img src={user.photoURL} alt="user profile" />
        <h1>About us</h1>
        <p>tweeeeetur is a microblogging website.</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>About us</h1>
        <p>tweeeeetur is a microblogging website.</p>
      </div>
    )
  }
}

export default About