const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        //required: true,
        trim: true
    },
    name: {
        type: String,
        //required: true,
        trim: true
    },
    distance: {
        type: Number,
        //required: true,
        trim: true
    },
    weight: {
        type: Number,
        //required: true,
        trim: true
    },
    sets: {
        type: Number,
        //required: true,
        trim: true
    },
    reps: {
        type: Number,
        //required: true,
        trim: true
    },
    duration: {
        type: Number,
        //required: true,
        trim: true
    }
});

const workoutExercisePlan = mongoose.model("workoutPlan", ExerciseSchema);

module.exports = workoutExercisePlan;