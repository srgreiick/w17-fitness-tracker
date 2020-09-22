
const db = require("../models");


module.exports = function (app) {
    app.get("/api/workouts",function (req, res) {
        
    })


    app.post("/api/workouts",function (req, res) {
        db.workoutPlan.create({})
        .then(data => {
            res.json(data);
          })
          .catch(err => {
            res.json(err);
          });
    })


    app.put("/api/workouts/:id",function ({body,params}, res) {
        
        db.workoutPlan.findOneAndUpdate({_id:params.id }, { $push: {exercises: body } }, { new: true })
        .then(data => {
          res.json(data);
        })
        .catch(err => {
          res.json(err);
        });
    })

}