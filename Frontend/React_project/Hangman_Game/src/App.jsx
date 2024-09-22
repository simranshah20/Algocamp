import { Routes, Route } from 'react-router-dom';
import './App.css';
import StartGame from './pages/startGame';
import PlayGame from './pages/playGame';

function App() {
  return (
    <Routes>
      <Route path='/start' element={<StartGame />} />
      <Route path='/play' element={<PlayGame />} />
    </Routes>
  );
}

export default App;