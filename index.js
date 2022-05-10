const express = require("express");
const app = express();

// standard app methods are:
// app.get()
// app.post()
// app.put()
// app.delete()

app.get("/", (req, res) => {
  res.send("Hello!");
});
//the "/" is just for the end of the url

app.get("/pokemon", (req, res) => {
  res.send([1, 2, 3]);
});
//the "/pokemon" mean that if you go to the url + pokemon you'll be sent the array

app.listen(3000, () => console.log("Server is live on port 3000!"));
//test this with "node index.js"
