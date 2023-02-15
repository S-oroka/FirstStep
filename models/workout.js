const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Workout = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        muscleGroup: { type: String, required: true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('Workout', Workout)