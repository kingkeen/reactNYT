const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var logger = require("morgan");

// Requiring schema
var Article = require("./server/model");


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));


// MongoDB Configuration configuration
var db = (process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines");
// mongoose.connect("mongodb://admin:reactrocks@ds023593.mlab.com:23593/heroku_pg676kmk");
// var db = mongoose.connection;
mongoose.connect(db, function(error) {
  if (error) {
    console.log(error);
  }
  else {
    console.log("mongoose connection is successful");
  }
});

// db.on("error", function(err) {
//   console.log("Mongoose Error: ", err);
// });

// db.once("open", function() {
//   console.log("Mongoose connection successful.");
// });


// Send every request to the React app
// Define any API routes before this runs

// Route to get all saved articles
app.get("/api/saved", function(req, res) {
  
    Article.find({})
      .exec(function(err, doc) {
  
        if (err) {
          console.log(err);
        }
        else {
          res.send(doc);
        }
      });
  });
  
  // Route to add an article to saved list
  app.post("/api/saved", function(req, res) {
    var newArticle = new Article(req.body);
  
    console.log(req.body);
  
    newArticle.save(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
  });
  
  // Route to delete an article from saved list
  app.delete("/api/saved/", function(req, res) {
  
    var url = req.param("url");
  
    Article.find({ url: url }).remove().exec(function(err) {
      if (err) {
        console.log(err);
      }
      else {
        res.send("Deleted");
      }
    });
  });
  
  // Any non API GET routes will be directed to our React App and handled by React Router
  app.get("*", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
  });
  
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
