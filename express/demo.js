const express = require("express");

const app = express();
const port = 1239;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/user", require("./routes/api/user"));

app.listen(port, () => {
  console.log(`express at ${port}`);
});
