const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: `You must select "cardio" or "resistance"`,
    },
    name: {
        type: String,
        trim: true,
        required: `You must have a workout name`,
    },
    distance: {
        type: Number,
    },
    duration: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    sets: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
