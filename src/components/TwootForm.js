import { useState } from "react";

const TwootForm = ({addTwootFunc}) => {

  const [twoothor, settwoothor] = useState("");
  const [twootxt, setTwootxt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    addTwootFunc({twoothor, twootxt});

    settwoothor("");
    setTwootxt("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="name">name: </label>
        <br />
        
        <input
          type="text"
          value={twoothor}
          onChange = {e => settwoothor(e.target.value)}
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