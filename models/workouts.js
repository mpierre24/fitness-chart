import mongoose from 'mongoose';
const { Schema } = mongoose;


const exerciseSchema = new Schema({
    name: String,
    duration: Number,
    type: { type: String },
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number,


});

const workoutSchema = new Schema({
    // Array of subdocuments
    exercises: [exerciseSchema],
    day: { type: Date, default: Date.now },
});
const Workout = mongoose.model('Workouts', workoutSchema);
module.exports = Workout