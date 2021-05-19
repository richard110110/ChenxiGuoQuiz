import React, {Component} from 'react';

const Button = ({answer, className}) => (
    <button className={`bg-white p-4 text-purple-800 font-semibold rounded shadown ${className}`}>{answer}</button>

)

const Questionaire = ({
    showAnswers,
  handleAnswer, 
  handleNextQuestion,
  viewAnsweredQuestion,
  data: {
        question,
        correct_answer,
        incorrect_answers
    },
    
}) =>  {
    const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(()=>Math.random() - 0.5);

    return (
  
        <div className='flex flex-col'>
            <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
                <h2
                    className="text-2xl"
                    dangerouslySetInnerHTML={{
                    __html: question
                }}></h2>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6"> 
            {shuffledAnswers.map((answer, id) => {
                const textcolor = showAnswers ? answer === correct_answer ? 'text-green-500' : 'text-red-500' : 'text-purple-500';
             //   const textcolor = showAnswers ? 'text-white' : 'text-purple-800';
                return (
                    <button key={id} className={`bg-white ${textcolor} p-4 font-semibold rounded shadow`} onClick={() => handleAnswer(answer)} dangerouslySetInnerHTML={{__html:answer}}/>
                )
              
            })}
              
    
    
            </div>

            {showAnswers && (
            <button onClick={handleNextQuestion} className={`ml-auto bg-purple-700 text-white p-4 font-semibold rounded shadow`}>Next Question</button>


            )}

            <button onClick={viewAnsweredQuestion} className={`ml-auto bg-red-700 text-white p-4 font-semibold rounded shadow`}>previous Question</button>


        </div>
    
    );
}

export default Questionaire;
