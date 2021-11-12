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
    sets: {},
    reps: {},
});
