import { Routes, Route } from 'react-router-dom';
import './App.css';
import StartGame from './pages/startGame';
import PlayGame from './pages/playGame';
import Home from './pages/Home';
import { WordContext } from './Context/WordContext.js'
import { useState } from 'react';

function App() {
  const [wordList,setWordList]=useState([]);
  const [word,setWord]=useState("");

  return (
      //WordContext.provider wrape all application and also knoen as context api setup
    <WordContext.Provider value={{wordList,setWordList,word,setWord }}>  
     <Routes>
      <Route path='/start' element={<StartGame />} />
      <Route path='/play' element={<PlayGame />} />
      <Route path='/' element={<Home/>} />
     </Routes>
    </WordContext.Provider>
  );
}

export default App;