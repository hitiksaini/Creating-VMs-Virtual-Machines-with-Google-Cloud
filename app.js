// ********* Hitik Saini https://hitik20.tech/************
//********************************************************
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

//Mongo Atlas Connection
mongo_access = process.env.MONGO_PASS;
mongoose.connect("mongodb+srv://hitik:"+mongo_access+"@oneshotdemo.vgtre.mongodb.net/test",
{ useUnifiedTopology: true, useNewUrlParser: true});


// mongoose.connect("mongodb://localhost:27017/test", {
//   useUnifiedTopology: true,
//   useNewUrlParser: true
// });


//Creating Schema
const collegeSchema = {
  id: Number,
  name: String,
  year_founded: Number,
  city: String,
  state: String,
  country: String,
  num_of_students: Number,
  courses: [{
    type: String
  }]
};

//model
const College = mongoose.model("College", collegeSchema);

//use later

// const studentSchema = {
//   id: Number,
//   College_id: String,
//   name: String,
//   year_of_branch: Number,
//   skills: [{
//     type: String
//   }]
// };
//
// const Student = mongoose.model("Student", studentSchema);

//Setting routes with express
app.get("/", function(req, res)
{
  //Show all db data as list on home page
  College.find({}, function(err, colleges){
    res.render("home", {colleges: colleges});
  });

});


// After search query, pulling Similar Colleges
app.post("/", function(req, res) {
  const collegename = req.body.college_name;
  //Finding a college by its name or ID.
  College.find({
    "$or": [
      { name: { "$regex" :collegename , "$options" : "i"}},
      { state: { "$regex" :collegename , "$options" : "i"}},
    ]
  }, function(err, foundItem) {
    if (foundItem.length === 0) {
      res.render("err");
    }
    else {
      res.render("search", {results: foundItem, cn: collegename});
    }
  });
});

// Visualisations
app.get("/chart", function(req, res){
  College.find({}, function(err, colleges){
    res.render("chart", {colleges: colleges});
  });
})



// app.get("/filter", function(req, res) {
//   //Filter by location(state)
//   College.find({
//     state: "Punjab"
//   }, function(err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// encounter the error page
app.get('*', (req, res) => res.send("<h1>Not found!</h1>"));

// Port allocation
app.listen(process.env.PORT || 3000, function() {
  console.log("Server running sucessfully on port 3000.")
});
