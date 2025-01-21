const express = require("express");
const uuid = require("uuid");
const router = express.Router();

let users = require("../../users");

// get all users

router.get("/", (req, res) => {
  res.json(users);
});

// get user by id

router.get("/:id", (req, res) => {
  const found = users.some((users) => users.id === parseInt(req.params.id));
  console.log("Found is-->", found);
  if (found) {
    console.log("req.params.id--->", req.params.id, typeof req.params.id);

    const showData = users.filter(
      (user) => user.id === parseInt(req.params.id)
    );
    console.log("Show data-->", showData);
    res.json(showData);
  } else {
    res.status(400).json({ msg: `No user` });
  }
});

console.log("USERS", users);

module.exports = router;
