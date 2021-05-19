import React, {useState, useEffect, useReducer} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {Questionaire} from './components';

import {previousQuestion, nextQuestion, currentQuestion, currentScore} from './store/features/counterSlice';




const API_URL = `https://opentdb.com/api.php?amount=10&category=${Math.floor(Math.random()*32) + 9}&difficulty=medium&type=multiple`;



function App() {

    const {count} = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const [questions,
        setQuestions] = useState([]);
    
    const [currentIndex, setCurrentIndex] = useState(0)

    const [score, setScore] = useState(0);

    const [gameEnded, setGameEnded] = useState(false);

    const [showAnswers, setShowAnswers] = useState(false);

    useEffect(() => {
      dispatch(currentQuestion({question: questions[currentIndex]}));

        fetch(API_URL).then((res) => res.json()).then((data) => {
            setQuestions(data.results);

         //   setCurrentIndex(data.results[0])
        });
    }, []);

    const handleAnswer = (answer) => {

      // const newIndex = currentIndex + 1;

      // setCurrentIndex(newIndex);
      if(!showAnswers){
        if(answer === questions[currentIndex].correct_answer){
          setScore(score+1);
        }
      }
    

      setShowAnswers(true);

      // if(newIndex >= questions.length){
      //   setGameEnded(true);
      // }
    };

    const handleNextQuestion = () => {
      setShowAnswers(false);
      dispatch(nextQuestion({question: questions[currentIndex + 1]}));
      dispatch(currentScore({score}));


      setCurrentIndex(currentIndex + 1);
    }

    const viewAnsweredQuestion = () => {
      if(currentIndex > 0){
        setShowAnswers(true);
        dispatch(previousQuestion({question: questions[currentIndex - 1]}));

        setCurrentIndex(currentIndex - 1);
      } else{
        alert("no previous question"); 
      }
      

    }

    return questions.length > 0 ? (
      <div className="container">
        {currentIndex >= questions.length ? (
          <h1 className="text-3xl text-white font-bold">
            Game ended! Your score was {score}/10;
          </h1>
        ) : (
          <Questionaire
          data={questions[currentIndex]}
          showAnswers={showAnswers}
          handleNextQuestion={handleNextQuestion}
          viewAnsweredQuestion={viewAnsweredQuestion}
          handleAnswer={handleAnswer}
          />
        )}
      </div>
    ) : (
      <h2 className='text-2xl text-white font-bold'>Loading/</h2>
    );
}

export default App;
