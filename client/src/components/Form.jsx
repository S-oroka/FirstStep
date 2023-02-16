import { useState } from 'react';
import axios from 'axios';

const Form = ({ setWorkouts }) => {
  const [muscleGroup, setMuscleGroup] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [workoutId, setWorkoutId] = useState(null);

  const handleWorkoutTypeChange = (e) => {
    setMuscleGroup(e.target.value);
  };

  const handleWorkoutNameChange = (e) => {
    setName(e.target.value);
  };

  const handleWorkoutDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workoutData = {
      muscleGroup: muscleGroup,
      name: name,
      description: description
    };
    const response = await axios.post(`http://localhost:3001/api/workouts`, workoutData);
    const newWorkout = response.data;
    setWorkoutId(newWorkout.id);
    setMuscleGroup('');
    setName('');
    setDescription('');
    setWorkouts(prevWorkouts => [...prevWorkouts, newWorkout]);
  };
  


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Workout Type:
        <select value={muscleGroup} onChange={handleWorkoutTypeChange}>
          <option value="">Select</option>
          <option value="Upper-Body">Upper body</option>
          <option value="Lower-Body">Lower body</option>
        </select>
      </label>
      <br />
      <label>
        Workout Name:
        <input type="text" value={name} onChange={handleWorkoutNameChange} />
      </label>
      <br />
      <label>
        Workout Instructions:
        <textarea value={description} onChange={handleWorkoutDescriptionChange} />
      </label>
      <br />
      <button type="submit">Create workout</button>
    </form>
  );
};

export default Form;
