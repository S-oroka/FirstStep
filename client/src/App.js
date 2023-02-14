import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import ViewWorkoutPlans from './pages/ViewWorkoutPlans';
import Navbar from './components/Navbar'
import WorkoutPlanDetails from './pages/WorkoutPlanDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/workoutplans' element={<ViewWorkoutPlans />} />
          <Route path='/workoutplans/details/:planLink' element={<WorkoutPlanDetails />} />
          
        </Routes>
      </main>
    </div>
  );
}

export default App;
