const WorkoutPlan = require('../models/workoutplan')
const Workout = require('../models/workout')

const getWorkoutPlans = async (req, res) => {
    try {
        const workoutPlans = await WorkoutPlan.find()
        return res.status(200).json({ workoutPlans })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getWorkouts = async (req, res) => {

    try {
        const workouts = await Workout.find()
        return res.status(200).json({ workouts })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createWorkout = async (req, res) => {
    try {
        const workout = await new Workout(req.body)
        await workout.save()
        return res.status(201).json({
            workout,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getWorkoutPlans, createWorkout, getWorkouts
}