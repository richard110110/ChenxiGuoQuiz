import React, {useState, useEffect, useReducer} from 'react';

import {
  SET_ANSWERS,
  SET_CURRENT_QUESTION,
  SET_CURRENT_ANSWER,
  SET_ERROR,
  SET_SHOW_RESULTS,
  RESET_QUIZ,
} from './reducers/QuizReducer';
import quizReducer from './reducers/QuizReducer';

import {Questionaire} from './components';
const API_URL = 'https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multipl' +
        'e';

function App() {

    const [questions,
        setQuestions] = useState([]);
    
    const [currentIndex, setCurrentIndex] = useState(0)

    const [score, setScore] = useState(0);

    const [gameEnded, setGameEnded] = useState(false);

    const [showAnswers, setShowAnswers] = useState(false);

    useEffect(() => {
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

      setCurrentIndex(currentIndex + 1);
    }

    const viewAnsweredQuestion = () => {
      if(currentIndex > 0){
        setShowAnswers(true);

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
