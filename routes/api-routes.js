
const db = require("../models");


module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    db.workoutPlan.find({})
      .then(data => { res.json(data)
        console.log(data); })
      
      .catch(err => {
        res.json(err);
      });
  })


  app.post("/api/workouts", function (req, res) {
    db.workoutPlan.create({})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  })


  app.put("/api/workouts/:id", function ({ body, params }, res) {
    db.workoutPlan.findOneAndUpdate({ _id: params.id }, { $push: { exercises: body } }, { new: true })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  })

//Thanks yakini
app.get("/api/workouts/range", (req, res) => {
  db.workoutPlan.find({}).limit(10)
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
}
