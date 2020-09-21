const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const fs = require("fs")
const path = require("path")
mongoose.connect("mongodb+srv://sgreilick:8Hb6AdXwPT&B@cluster0.ngdb0.mongodb.net/fitness-tracker?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: false
});
const PORT = process.env.PORT || 3000;

const db = require("./models");
const { setFlagsFromString } = require("v8");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.post("/submit", ({body}, res) => {
  db.Book.create(body)
    .then(({_id}) => db.workoutPlan.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
    .then(dbPlan => {
      res.json(dbPlan);
      
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/exercise", (req, res) => {
  db.workoutPlan.find({}).sort({_id:-1}).limit(1)

    .then(exercise => {
      //res.json(exercise);
      res.sendFile(path.join(__dirname, "./public/exercise.html"))
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/Plan", (req, res) => {
  db.workoutPlan.find({})
    .then(dbPlan => {
      res.json(dbPlan);
      fs
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/populated", (req, res) => {
  db.workoutPlan.find({})
    .populate("books")
    .then(dbPlan => {
      res.json(dbPlan);
    })
    .catch(err => {
      res.json(err);
    });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});