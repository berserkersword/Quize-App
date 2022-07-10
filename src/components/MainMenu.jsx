import { useContext } from 'react'
import { QuizeContext } from '../helpers/Contexts';
import "../App.css";

const MainMenu = () => {
    const { setGameState } = useContext(QuizeContext);
    return (
        <div className='container'>

            <button className='start-button' onClick={() => setGameState('quiz')}>Start</button>
        </div>
    )
}

export default MainMenu