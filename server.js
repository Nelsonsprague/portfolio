var express = require("express");
var path = require("path");
var less = require("less")
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "/public/index.html"))
})




app.get("/main.html", function(req, res){
  res.sendFile(path.join(__dirname, "/public/main.html"))
})


  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

