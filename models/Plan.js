const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlanSchema = new Schema({
  author: String,
  title: String
});

const Plan = mongoose.model("workout-plan", PlanSchema);

module.exports = Plan ;