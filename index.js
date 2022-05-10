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

app.listen(3000, () => console.log("Server is live on port 3000!"));
//test this with "node index.js"
