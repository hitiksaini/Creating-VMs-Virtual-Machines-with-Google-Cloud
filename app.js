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

// mongo_access = process.env.MONGO_PASS;
// mongoose.connect("mongodb+srv://hitiksaini:"+mongo_access+"@mozillachdevents.lncbn.mongodb.net/mozDB?retryWrites=true&w=majority",
// { useUnifiedTopology: true, useNewUrlParser: true});

mongoose.connect("mongodb://localhost:27017/test", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

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

const College = mongoose.model("College", collegeSchema);

const studentSchema = {
  id: Number,
  College_id: String,
  name: String,
  year_of_branch: Number,
  skills: [{
    type: String
  }]
};

const Student = mongoose.model("Student", studentSchema);


app.get("/", function(req, res)
{
  College.find({}, function(err, colleges){
    res.render("home", {colleges: colleges});
  });

});


app.get("/chart", function(req, res){
  res.render("chart");
})

app.post("/", function(req, res) {
  const collegename = req.body.college_name;
  //Finding a college by its name or ID.
  College.find({
    name: { "$regex" : collegename , "$options" : "i"}
  }, function(err, foundItem) {
    if (foundItem.length === 0) {
      res.send("<h1>Nothing Found, Please search a valid college</h1>");
    } else {
      console.log(foundItem);
      console.log(foundItem.length);
      // res.write("<h3> Colleges based on your search :</h3>");
      for(var i = 0; i < foundItem.length; i++){
        res.write("<b>Name : </b>" + foundItem[i].name + "<br>" +
        "<b>Location : </b>" + foundItem[i].city + ", "+ foundItem[i].state + ", "+ foundItem[i].country +
        "<br><b>Number of Students : </b>" + foundItem[i].num_of_students +
        "<br><b>year Founded : </b>" + foundItem[i].year_founded +
        "<br><b>Courses Offered : </b>" + foundItem[i].courses + "<br>" + "<br>"
      );
      }
    }
  });
});


//pulling Similar Colleges
app.get("/filter", function(req, res) {
  //Filter by location(state)
  College.find({
    state: "Punjab"
  }, function(err, result) {
    if (err) throw err;
    console.log(result);
  });
});




app.listen(3000, function(req, res) {
  console.log("listening on POrt 3000.");
});
