var express = require("express");
var app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

app.use("/public", express.static("public"));

// use res.render to load up an ejs view file

// index page router
app.get("/", function (req, res) {
  res.render("pages/index");
});

//error page router
app.get("/error", function (req, res) {
  res.render("pages/error");
});

// workshops page
app.get("/workshops", function (req, res) {
  res.render("pages/workshops");
});

// events page
app.get("/events", function (req, res) {
  res.render("pages/events");
});

// sponsors page
app.get("/sponsors", function (req, res) {
  res.render("pages/sponsors");
});

// resonance page
app.get("/resonance", function (req, res) {
  res.render("pages/resonance");
});

// contact us page
app.get("/contact", function (req, res) {
  res.render("pages/contact");
});

// login page
app.get("/login", function (req, res) {
  res.render("pages/login");
});

//user-dashboard
app.get("/userdashboard", function (req, res) {
  res.render("pages/userdashboard");
});

//regdetails
app.get("/DetailsAndRegistration", function (req, res) {
  res.render("pages/DetailsAndRegistration");
});

app.listen(8080);
console.log("Server is listening on port 8080");
