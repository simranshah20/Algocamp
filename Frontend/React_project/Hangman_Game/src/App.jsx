import { Routes, Route } from 'react-router-dom';
import './App.css';
import StartGame from './pages/startGame';
import PlayGame from './pages/playGame';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/start' element={<StartGame />} />
      <Route path='/play' element={<PlayGame />} />
      <Route path='/' element={<Home/>} />
    </Routes>
  );
}

export default App;