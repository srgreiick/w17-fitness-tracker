const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    day:{
        type: Date,
        default: new Date
    },
    exercises:[ {

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
    }]
});

//Taken from session 18, thank you
ExerciseSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
})

const workoutExercisePlan = mongoose.model("workoutPlan", ExerciseSchema);

module.exports = workoutExercisePlan;