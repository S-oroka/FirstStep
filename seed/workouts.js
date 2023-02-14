const db = require('../db')
const WorkoutPlan = require('../models/workoutplan')
const Workout = require('../models/workout')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))



const createWorkouts = async () => {
    const workouts = [
        { name: "Barbell Deadlift", description: "1. Stand with your feet shoulder-width apart and the barbell on the ground in front of you.\n2. Bend your knees and hinge forward at the hips to grip the barbell with your hands slightly wider than shoulder-width apart and palms facing down.\n3. Keep your back straight and core engaged as you lift the barbell off the ground by straightening your legs and hips.\n4. Pause at the top of the lift, then slowly lower the barbell back to the ground with control.\n5. Repeat for desired number of reps." },
        { name: "Barbell Squat", description: "1. Stand with your feet shoulder-width apart and the barbell resting on your upper back, held with a grip slightly wider than shoulder-width apart.\n2. Engage your core and keep your chest lifted as you bend your knees and lower your hips towards the ground, keeping your back straight and chest lifted.\n3. Continue to lower until your thighs are parallel to the ground or slightly below.\n4. Pause briefly, then push through your heels to straighten your legs and return to the starting position.\n5. Repeat for desired number of reps." },
        { name: "Calf Raises", description: "1.Stand with the balls of your feet on the edge of a raised surface, such as a step or block.\n2. Keep your legs straight or slightly bent and your core engaged as you raise your heels off the ground.\n3.Pause briefly at the top of the lift, then lower your heels back down below the level of the step.\n4. Repeat for desired number of reps, focusing on a slow and controlled movement."},
        { name: "Bench Press", description: "1. Lie on a flat bench with your feet firmly planted on the ground and your shoulder blades squeezed together.\n2. Grab the barbell with a grip slightly wider than shoulder-width apart and lower it to your chest, keeping your elbows tucked in close to your body.\n3. Press the barbell back up to the starting position by straightening your arms, then lower it back down to your chest.\n4. Repeat for desired number of reps, being sure to maintain control over the barbell at all times." },
        { name: "Pull-Ups", description: "1. Hang from a pull-up bar with your palms facing away from you and your hands shoulder-width apart.\n2. Engage your back muscles and pull your body up towards the bar, keeping your elbows close to your body.\n3. Continue to pull until your chin is above the bar.\n4. Lower your body back down with control, keeping your core engaged.\n5. Repeat for desired number of reps." },
        { name: "DB Curls", description: "1. Stand with a dumbbell in each hand and your arms hanging down at your sides, palms facing inwards.\n2. Keep your elbows close to your body as you curl the dumbbells up towards your shoulders, rotating your palms to face upwards as you lift.\n3. Pause briefly at the top of the lift, then lower the dumbbells back down to the starting position with control.\n4. Repeat for desired number of reps, being sure to maintain control over the dumbbells at all times."}
    ]

    const createdWorkouts = await Workout.insertMany(workouts)
    console.log("Created workouts");
    return createdWorkouts
}

const createWorkoutPlans = async(workouts) => {
    const filteredWorkoutsUpper = workouts.filter(workout => workout.name === "Bench Press" || workout.name === "Pull-Ups" || workout.name === "DB Curls")
    const workoutIdsUpper = filteredWorkoutsUpper.map(workout => workout._id)
    const filteredWorkoutsLower = workouts.filter(workout => workout.name === "Barbell Squat" || workout.name === "Barbell Deadlift" || workout.name === "Calf Raises")
    const workoutIdsLower = filteredWorkoutsLower.map(workout => workout._id)

    const workoutPlans = [
        { name: "Upper-Body", description: "Excercises to target upper body muscles", time: "~45min", workouts: workoutIdsUpper },
        { name: "Lower-Body", description: "Excercises to target legs and lower body muscles", time: "~45min", workouts: workoutIdsLower }]

        await WorkoutPlan.insertMany(workoutPlans)
        console.log("Created Workout Plans");
}

const run = async () => {
    const workouts = await createWorkouts()
    await createWorkoutPlans(workouts)
    db.close()
}

run()