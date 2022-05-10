const express = require("express");
const app = express();

// standard app methods are:
// app.get()
// app.post()
// app.put()
// app.delete()

const pokemon = ["charmander", "bulbasaur", "squirtle"];

app.get("/", (req, res) => {
  res.send("Hello!");
});
//the "/" is just for the end of the url

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});
//the "/pokemon" mean that if you go to the url + pokemon you'll be sent the array

app.get("/pokemon/1", (req, res) => {
  res.send(pokemon[0]);
});
//the "/pokemon" mean that if you go to the url + pokemon you'll be sent the array

app.listen(3000, () => console.log("Server is live on port 3000!"));
//test this with "node index.js"
//test with nodemon index.js for live updates!
//press ctrl + c to kill the terminal
