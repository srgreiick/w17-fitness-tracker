const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlanSchema = new Schema({
  author: String,
  title: String
});

const workoutPlan = mongoose.model("workoutPlan", PlanSchema);

module.exports = workoutPlan ;