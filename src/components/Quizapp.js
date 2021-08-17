import React, { Fragment, useState } from "react";
import "./css/styles.css";
export const Quizapp = () => {
  const [score, setScore] = useState(0); //state to store our total score
  const [currentQuestion, setCurrentQuestion] = useState(0); // state to hold our current question number from array ie 1 to 4
  const [displayAnswerScore, setDisplayAnswerScore] = useState(false); //when the quiz is completed this  is set to true and the score is shown to the user

  //add more data later or use api to fetch form database
  const questions = [
    {
      question: "What is full form of MRI?",
      answerOptions: [
        { answertext: "Memory Reference Instruction", isTrue: true },
        { answertext: "Memory Register Instruction", isTrue: false },
        { answertext: "Memory Render Instruction", isTrue: false },
        { answertext: "Memory Random Instruction", isTrue: false },
      ],
      index: 1,
    },
    {
      question: "Which is not a programming language?",
      answerOptions: [
        { answertext: "C++", isTrue: false },
        { answertext: "Python", isTrue: false },
        { answertext: "C#", isTrue: false },
        { answertext: "HTML", isTrue: true },
      ],
      index: 2,
    },
    {
      question: "Which of these is not a javascript framework?",
      answerOptions: [
        { answertext: "React", isTrue: false },
        { answertext: "Vue", isTrue: false },
        { answertext: "Angular", isTrue: false },
        { answertext: "Laravel", isTrue: true },
      ],
      index: 3,
    },
    {
      question: "Which of these is not a linux?",
      answerOptions: [
        { answertext: "Ubuntu", isTrue: false },
        { answertext: "Windows", isTrue: true },
        { answertext: "Garuda", isTrue: false },
        { answertext: "Fedora", isTrue: false },
      ],
      index: 4,
    },
    // {
    //   question: "Cookies are not stored in ...?",
    // },
  ];
  const answerClickHandler = (isTrue) => {
    const nextQuestion = currentQuestion + 1;
    if (isTrue === true) {
      //we have is true property in answeroptions array with arraytext
      const newScore = score + 1;
      setScore(newScore);
    }
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setDisplayAnswerScore(true);
    }

    // if(currentQuestion.length )
  };
  //when user clicks retry button everything is set to 0 or false and restarted from top
  const ResetHandler = () => {
    setScore(0);
    setCurrentQuestion(0);
    setDisplayAnswerScore(false);
  };
  return (
    <div className="container">
      <div className="qncard">
        {displayAnswerScore ? (
          <Fragment>
            <h3 className="h3style">
              Congrats. Your Score is {score} out of {questions.length}!!
            </h3>
            <button className="btn1" onClick={ResetHandler}>
              Retry
            </button>
          </Fragment>
        ) : (
          <Fragment>
            {" "}
            <h3 className="h3style">
              (Qn.{questions[currentQuestion].index}/{questions.length}). &nbsp;
              {questions && questions[currentQuestion].question}
            </h3>
            {questions &&
              questions[currentQuestion].answerOptions.map((option, i) => (
                <button
                  className="btn"
                  key={i}
                  onClick={() => answerClickHandler(option.isTrue)}
                >
                  {i + 1 + ".  " + option.answertext}
                </button>
              ))}
          </Fragment>
        )}
      </div>
    </div>
  );
};
