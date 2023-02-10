import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import ViewWorkoutPlans from './pages/ViewWorkoutPlans';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/workoutplans' element={<ViewWorkoutPlans />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
