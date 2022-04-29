import TwootForm from "../components/TwootForm"
import ViewTwoots from "../components/ViewTwoots"

const Home = ({ twootabase }) => {
  return (
    <div>
      <h3>Home</h3>
      <TwootForm />
      <ViewTwoots twootabase = { twootabase } />
    </div>
  )
}

export default Home