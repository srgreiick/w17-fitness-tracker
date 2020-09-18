const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://sgreilick:8Hb6AdXwPT&B@cluster0.ngdb0.mongodb.net/fitness-tracker?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: false
});
const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));



db.workoutPlan.create({ name: "Campus Plan" })
  .then(dbPlan => {
    console.log(dbPlan);
  })
  .catch(({message}) => {
    console.log(message);
  });

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

app.get("/books", (req, res) => {
  db.workoutPlan.find({})
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/Plan", (req, res) => {
  db.workoutPlan.find({})
    .then(dbPlan => {
      res.json(dbPlan);
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