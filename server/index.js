const axios = require("axios");
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.use(cors());

app.get("/", (req, res) => {
  res.send(`Hello World! ${PORT} ${process.env.API_KEY}`);
  }
);

app.get("/people", (req, res) => {

  const coolness = req.query.coolness;

  const peopleThings = {
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    headers: {
      "Content-Type": "application/json"
    }
  };

  axios.request(peopleThings)
    .then(response => {
      res.json(response.data);
    }
  );
}
);

app.get("/cool", (req, res) => {
  res.send(req.query.coolness);
  }
);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});