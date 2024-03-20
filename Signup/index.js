const mongoose = require("mongoose");
const express = require("express");
const app = express(); // Corrected initialization

mongoose.connect(
  "mongodb+srv://Adarsh:L61WPuLNZssYbhIT@cluster0.yju1yru.mongodb.net/",
);

const User = mongoose.model("User", {
  user: String,
  password: String,
  information: String,
});

app.use(express.json());
app.post("/signup", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const information = req.body.information;
  
    const existingUser = await User.findOne({ username: username });
  
    if (existingUser) {
      return res.status(400).send("User already exists");
    }
  
    const user = new User({
      username: username,
      password: password,
      information: information,
    });
    user.save();
    res.json({"msg":"user created successfully"});
  });


app.get('/signin', async function(req, res) {
    const username = req.headers.username; // Use req.headers instead of req.header
    const password = req.headers.password; // Use req.headers instead of req.header
  
    // Check if the user exists in the database
    const existingUser = await User.findOne({ user: username, password: password });
  
    if (existingUser) {
      // User found in the database, return success message
      return res.json({ msg: "Successfully logged in" });
    } else {
      // User not found in the database, return error message
      return res.status(404).json({ msg: "User not found" });
    }
  });

  app.listen(3000, function () {
    console.log("server is running on port 3000");
  });