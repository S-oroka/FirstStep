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

const getPlanById = async (req, res) => {
    try {
        const { id } = req.params
        const plan = await WorkoutPlan.findById(id).populate('workouts')
        if (plan) {
            return res.status(200).json({ plan })
        }
        return res.status(404).send('No Id found.')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getWorkoutById = async (req, res) => {
    try {
        const { id } = req.params
        const plan = await Workout.findById(id)
        if (plan) {
            return res.status(200).json({ plan })
        }
        return res.status(404).send('No Id found.')
    } catch (error) {
        return res.status(500).send(error.message)
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


// const deleteWorkout = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const workout = await Workout.findById(id)
//         const deleted = await Workout.findByIdAndDelete(id)

//         const { muscleGroup } = req.body
//         let workoutplanId

//         if (workout.muscleGroup === "Upper-Body") {
//             workoutplanId = "63ed17f695d064e448779fa0"
//         }
//         else if (workout.muscleGroup === "Lower-Body") {
//             workoutplanId = "63ed17f695d064e448779fa1"
//         }

//         const plan = await WorkoutPlan.findById(workoutplanId)
//         plan.workouts.splice(workout)

//         await plan.save()

//         if (deleted) {
//             return res.status(200).send("Workout deleted");
//         }
//         throw new Error("Workout not found");
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// }

const deleteWorkout = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedWorkout = await Workout.findByIdAndDelete(id);

        if (!deletedWorkout) {
            throw new Error("Workout not found");
        }

        let workoutplanId;

        if (deletedWorkout.muscleGroup === "Upper-Body") {
            workoutplanId = "63ed17f695d064e448779fa0";
        } else if (deletedWorkout.muscleGroup === "Lower-Body") {
            workoutplanId = "63ed17f695d064e448779fa1";
        }

        await WorkoutPlan.findOneAndUpdate(
            { workouts: { $in: [deletedWorkout._id] } },
            { $pull: { workouts: deletedWorkout._id } }
        );

        return res.status(200).send("Workout deleted");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createWorkout = async (req, res) => {

    try {
        const workout = await new Workout(req.body)
        await workout.save()
        const { muscleGroup } = req.body
        let workoutplanId

        if (workout.muscleGroup === "Upper-Body") {
            workoutplanId = "63ed17f695d064e448779fa0"
        }
        else if (workout.muscleGroup === "Lower-Body") {
            workoutplanId = "63ed17f695d064e448779fa1"
        }

        const plan = await WorkoutPlan.findById(workoutplanId)
        plan.workouts.push(workout)
        await plan.save()
        
        return res.status(201).json(
            workout,
        );
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getWorkoutPlans, createWorkout, getWorkouts, getPlanById, getWorkoutById, deleteWorkout
}