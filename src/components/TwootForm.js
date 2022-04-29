import { useState } from "react";

const TwootForm = () => {

  const [twoother, setTwoother] = useState("John Twutter");
  const [twootxt, setTwootxt] = useState("");

  return (
    <div>
      <form action="/">
        <label for="name">name: </label> <br />
        
        <input
          type="text"
          value={twoother}
          onChange = {e => setTwoother(e.target.value)}
        />
        
        <br /><br />

        <label for="msg">twoot: </label>
        
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

export default TwootForm