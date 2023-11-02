const express = require("express");
const mongoose = require("mongoose");

// Model
const taskSchema = require("./model/Task");
const TaskAPP = mongoose.model("TaskApp", taskSchema);

const app = express();
console.log(app);
const port = 4000;

// Need to fix MongoDB Issue!!
const MongoDBAccess =
  "mongodb+srv://Apple750526:Apple750526@cluster0.f8lkifx.mongodb.net/";
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

// C R U D Operations

// `Create` A NEW TASK
let schoolTask = new TaskAPP({
  name: "read a book",
  date: "26 Oct 2023",
  isDone: false,
});
schoolTask.save();

// HTTP Methods
// Post, Get, Put, Patch, Delete

app. post ("./task", (req,res)=>{
  let schoolTask=new TaskAPP({
    name: "read a book",
    date: "26 Oct 2023",
    isDone: false,
  })
  let data = await schoolTask.save()
  res.send(data)
})


// `Read`
// `Update`
// `Delete`
