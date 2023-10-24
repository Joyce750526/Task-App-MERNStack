const express = require("express");
const mongoose = require("mongoose");

const app = express();
console.log(app);
const port = 4000;

// Need to fix MongoDB Issue!!
const MongoDBAccess =
  "mongodb+srv://chaoying750526:<password>@cluster0.f8lkifx.mongodb.net/";
mongoose
  .connect(MongoDBAccess, { useNewUrlParser: true })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`We are listening to ${port}`);
});

app.get("/", (req, res) => {
  res.send("hello");    
});
