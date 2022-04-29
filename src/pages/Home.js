import TwootForm from "../components/TwootForm"
import ViewTwoots from "../components/ViewTwoots"

const Home = ( {twootabase, addTwootFunc} ) => {
  return (
    <div>
      <h3>Home</h3>
      <TwootForm  addTwootFunc={ addTwootFunc } />
      <ViewTwoots twootabase = { twootabase } />
    </div>
  )
}

export default Home