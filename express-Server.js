var express = require("express");
const app = express();
const port = 5055;

app.get("/", (req, res) => {
  res.send(`Hello World @ ${port}`);
});

app.listen(port, () => {
  console.log(`Server running @ http://localhost:${port}`);
});
