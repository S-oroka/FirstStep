const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WorkoutPlan = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        time : { type: String, required: true },
        workouts: [{ type: Schema.Types.ObjectId, ref: "Workout"}]
    },
    { timestamps: true },
)

module.exports = mongoose.model('WorkoutPlan', WorkoutPlan)