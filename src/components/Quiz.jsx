import { useContext, useState } from 'react'
import { QuizeContext } from '../helpers/Contexts';
import { Questions } from '../helpers/Question.bank';
import "./style.scss"

const Quiz = () => {
    const { setScore, score, setGameState } = useContext(QuizeContext)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChoosen, setOptionChoosen] = useState('')
    const nextQuestion = () => {
        if (Questions[currentQuestion].answer === optionChoosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    }
    const finishQuiz = () => {
        if (Questions[currentQuestion].answer === optionChoosen) {
            setScore(score + 1);
        }
        setGameState('endScreen')
    }

    return (
        <div className='screen'>
            <h1 className='question-title'>{Questions[currentQuestion].prompt}</h1>
            <h2 style={{ width: '100%' }}>Your Answer:{optionChoosen}<span style={{ marginLeft: '2rem' }}>{currentQuestion + 1} / {Questions.length}</span></h2>
            <div className='btns'>
                A<button className='main-btn' onClick={(e) => { setOptionChoosen('A') }}>{Questions[currentQuestion].OptionA}</button>
                B<button className='main-btn' onClick={(e) => { setOptionChoosen('B') }}>{Questions[currentQuestion].OptionB}</button>
                C<button className='main-btn' onClick={(e) => { setOptionChoosen('C') }}>{Questions[currentQuestion].OptionC}</button>
                D<button className='main-btn' onClick={(e) => { setOptionChoosen('D') }}>{Questions[currentQuestion].OptionD}</button>
            </div>
            {currentQuestion === Questions.length - 1 ? (
                <button className="login__submit" onClick={finishQuiz}>Finish Quiz</button>
            ) : (
                <button className='login__submit' onClick={nextQuestion}>Next Question</button>
            )}
        </div>
    )
}

export default Quiz