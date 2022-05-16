import axios from "axios";
import { useState } from "react";

const DevButton = () => {

  const [buttonText, setButtonText] = useState("DevButton");

  const wecalling = {
    method: "GET",
    url: "http://localhost:8000/people",
    params: {
      coolness: "very"
    }
  };

  const handleClick = () => {
    axios.request(wecalling)
      .then(response => {
        setButtonText(response.data[0].name);
      }
    );
  }

  return (
    <div>
      <button onClick={handleClick}>{`${buttonText}`}</button>
    </div>
  )
}

export default DevButton