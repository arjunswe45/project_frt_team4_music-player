const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { Sequelize, DataTypes } = require("sequelize");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));



app.set("port", process.env.PORT || 5000);

// Home page
app.get("", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Home.html"));
});

app.get("/music", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.get("/Contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Contact.html"));
});


app.get("/Chat", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Chat.html"));
});


app.get("/About", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "About.html"));
});


app.listen(app.get("port"), function () {
  console.log("Node app is running at localhost:" + app.get("port"));
});
