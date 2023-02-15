const { Router } = require('express');
const router = Router();
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('This is root!'))

router.get('/workoutPlans', controllers.getWorkoutPlans)

router.get('/workouts/:id', controllers.getWorkoutById)

router.get('/workoutPlans/details/:id', controllers.getPlanById)

router.get('/workouts', controllers.getWorkouts)

router.post('/workouts', controllers.createWorkout)

module.exports = router;