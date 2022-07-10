import './App.css';
import { useState } from 'react';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';

import { QuizeContext } from './helpers/Contexts';
import Navbar from './components/Navbar';

function App() {
  const [score, setScore] = useState(0)
  const [gameState, setGameState] = useState('menu');
  return (
    <div className="App">
      <div className='container'>
        <Navbar />
        <QuizeContext.Provider value={{ gameState, setGameState, score, setScore }}>
          {gameState === 'menu' && <MainMenu />}
          {gameState === 'quiz' && <Quiz />}
          {gameState === 'endScreen' && <EndScreen />}
        </QuizeContext.Provider>
      </div>
    </div>
  );
}

export default App;
