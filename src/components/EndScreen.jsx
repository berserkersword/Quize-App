import { useContext } from 'react'
import { QuizeContext } from '../helpers/Contexts';
import { Questions } from '../helpers/Question.bank';
import { BiHappyAlt } from 'react-icons/bi';
import { FaSadCry } from 'react-icons/fa'

const EndScreen = () => {
    const { score } = useContext(QuizeContext);
    const prots = Math.trunc((score / Questions.length) * 100);
    const emoji = () => {
        if (prots > 50) {
            return <BiHappyAlt className='emoji' />
        }
        if (prots < 50) {
            return <FaSadCry className='emoji' />
        }
    }

    return (
        <div className='score'>
            Your Resoult is: <span> {score}</span>
            {emoji()}
        </div>
    )
}

export default EndScreen