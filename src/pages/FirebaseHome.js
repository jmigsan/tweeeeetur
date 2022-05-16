import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import CurrentUser from "../components/CurrentUser";
import UpdateUser from "../components/UpdateUser";
import TwootFormFirestoreAuthStorage from "../components/TwootFormFirestoreAuthStorage";
import ViewTwootsFirestore from "../components/ViewTwootsFirestore";

const FirebaseHome = () => {
  return (
    <div>
      <h3>Home</h3>
      <SignUp />
      <br />
      <SignIn />
      <CurrentUser />
      <br />
      <UpdateUser />
      <br />
      <TwootFormFirestoreAuthStorage  />
      <ViewTwootsFirestore />
    </div>
  )
}

export default FirebaseHome