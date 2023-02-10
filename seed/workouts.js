const db = require('../db')
const WorkoutPlan = require('../models/workoutplan')
const Workout = require('../models/workout')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))



const createWorkouts = async () => {
    const workouts = [
        { name: "Deadlift", description: "Extend back and pull bar up" },
        { name: "Squat", description: "Do a squat" },
        { name: "Push-Ups", description: "Push Ups" },
        { name: "Curls", description: "Curl the DBs" },
    ]

    const createdWorkouts = await Workout.insertMany(workouts)
    console.log("Created workouts");
    return createdWorkouts
}

const createWorkoutPlans = async(workouts) => {
    const filteredWorkouts = workouts.filter(workout => workout.name === "Curls" || workout.name === "Push-Ups")
    const workoutIds = filteredWorkouts.map(workout => workout._id)

    const workoutPlans = [
        { name: "Upper-Body", description: "Excercises to target upper body muscles", time: "30min", workouts: workoutIds }]

        await WorkoutPlan.insertMany(workoutPlans)
        console.log("Created Workout Plans");
}

const run = async () => {
    const workouts = await createWorkouts()
    await createWorkoutPlans(workouts)
    db.close()
}

run()