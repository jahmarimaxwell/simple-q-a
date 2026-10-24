
import { useState } from "react";
import questions from "./questions";
import "./App.css";

function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(
        Array(questions.length).fill(null)
    );

    const currentQuizQuestion = questions[currentQuestion];

    // Calculate the score from the saved answers
    const score = selectedAnswers.reduce((total, answer, index) => {
        return answer === questions[index].correctAnswer
            ? total + 1
            : total;
    }, 0);

    function checkAnswer(answer) {
        setSelectedAnswers(previousAnswers => {
            const updatedAnswers = [...previousAnswers];
            updatedAnswers[currentQuestion] = answer;
            return updatedAnswers;
        });
    }

    function nextQuestion() {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            console.log("Quiz Finished!");
            console.log("Final Score:", score);
        }
    }

    function previousQuestion() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    return (
        <div className="main-container">
            <h1 className="main-quiz-title">JavaScript Quiz</h1>

            <div className="quiz">

                <p className="score">Score: {score}</p>
                <p className="question-number">
                    Question {currentQuestion + 1} / {questions.length}
                </p>
                
                <h2 className="question">
                    {currentQuizQuestion.question}
                </h2>

                <div className="answer-container">
                    {currentQuizQuestion.answers.map((answer, index) => (
                        <button
                            key={index}
                            className={`answer${index + 1} ${
                                selectedAnswers[currentQuestion] === answer
                                    ? "selected"
                                    : ""
                            }`}
                            onClick={() => checkAnswer(answer)}
                        >
                            {answer}
                        </button>
                    ))}
                </div>

                <div className="button-container">
                    <button
                        className="nextButton"
                        onClick={nextQuestion}
                    >
                        Next
                    </button>

                    <button
                        className="backButton"
                        onClick={previousQuestion}
                        disabled={currentQuestion === 0}
                    >
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
