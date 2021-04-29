const express = require('express');
const mongoose = require('mongoose');

const app = express();

// mongo_access = process.env.MONGO_PASS;
// mongoose.connect("mongodb+srv://hitiksaini:"+mongo_access+"@mozillachdevents.lncbn.mongodb.net/mozDB?retryWrites=true&w=majority",
// { useUnifiedTopology: true, useNewUrlParser: true});

mongoose.connect("mongodb://localhost:27017/collegeDB", {useNewUrlParser: true});


random_courses=["Computer science", "Electronics", "IT", "Mechanical", "Aerospace", "Civil", "MBA", "BioTech", "BCA", "Hotel Management"];
random_skills=["Python", "JavaScript", "Java", "C++", "Bash","C", "Linux", "Kernel", "Go", "NodeJS"];

const collegeSchema = {
  id: Number,
  name: String,
  year_founded: Number,
  city: String,
  state: String,
  country : String,
  num_of_students: Number,
  courses : [random_courses]
};


const College = mongoose.model("College", collegeSchema);



const studentSchema = {
  id : Number,
  College_id: String,
  name : String,
  year_of_branch: Number,
  skills: [random_skills]
};

const Student = mongoose.model("Student", studentSchema);



app.get("/", function(req, res){
  res.send("Hello from NodeJS");
});

app.listen(3000, function(req, res){
  console.log("listening on POrt 3000.");
});
