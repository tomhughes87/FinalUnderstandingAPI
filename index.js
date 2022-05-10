const express = require("express");
const req = require("express/lib/request");
const app = express();

// standard app methods are:
// app.get()
// app.post()
// app.put()
// app.delete()

/////////////////////////////////////
//POKEMON
/////////////////////////////////////

const pokemon = ["charmander", "bulbasaur", "squirtle"];

app.get("/", (req, res) => {
  res.send("Hello!");
});
//the "/" is just for the end of the url

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});
//the "/pokemon" mean that if you go to the url + pokemon you'll be sent the array

app.get("/pokemon/:id", (req, res) => {
  res.send(pokemon[req.params.id - 1]);
});
// using ':' followed by text creates a var that can be used in req.params+...var

//I think this is a push!
app.get("/pokemon/post/:yourtext", (req, res) => {
  res.send(req.params.yourtext);
});
// simple post the users :yourtext value to the page

////////////////////////////////////
//BOARDGAMES
////////////////////////////////////

const boardgames = [
  { name: "catan", players: "3-6", time: "1hr" },
  { name: "Small world", players: "2-6", time: "1hr 30mins" },
];

app.get("/boardgames", (req, res) => {
  res.send(boardgames);
});

app.get("/boardgames/:id", (req, res) => {
  const theGame = boardgames[req.params.id - 1];
  console.log("the game is:", theGame);
  if (theGame === undefined) {
    res.send(
      `there are no boardgames with that index, please enter a number between 1 and 
      ${boardgames.length}`
    );
  } else {
    res.send(theGame);
  }
});

app.listen(3000, () => console.log("Server is live on port 3000!"));
//test this with "node index.js"
//test with nodemon index.js for live updates!
//press ctrl + c to kill the terminal
