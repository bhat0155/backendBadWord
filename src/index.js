const express = require("express");
const cors = require("cors")
const Filter = require("bad-words");
const filter = new Filter();
const app = express();
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.send("server running for detecting bad words");
});

app.post("/bad", (req, res) => {
  let {text} = req.body;
  console.log(text)
  if (!text) {
    return res.status(400).send("Send text pls");
  } else {
    const newText = filter.clean(text);

    return res.send(newText);
  }
},{
  cors:{
    origin: "*" 
  }
});

app.listen(8000, () => {
  console.log("server running on port 8000");
});
