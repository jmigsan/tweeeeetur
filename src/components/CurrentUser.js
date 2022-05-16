import { getAuth, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

const logout = () => {
  signOut(auth);
};

const CurrentUser = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <div>
        <p>initialising user...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>error: {error}</p>
      </div>
    );
  }
  if (user) {
    return (
      <div>
        <p>current user: {user.email}, {user.displayName}</p>
        <img width={200} height={200} src={user.photoURL} onError={(e) => {e.target.src="https://source.unsplash.com/200x200/?cat"}} />
        <br/>
        <button onClick={logout}>log out</button>
      </div>
    );
  }
};

export default CurrentUser