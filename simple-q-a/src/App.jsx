import './App.css'
import './script.js'

function App() {

  return (
    <>
      <body>
        <div className="main-container">
            <h1 className="main-quiz-title">JavaScript Quiz</h1>

            <div className="quiz">

                <h2 className="question"></h2>

                <div className="answer-container">

                <button className="answer1"></button>
                <button className="answer2"></button>
                <button className="answer3"></button>
                <button className="answer4"></button>

                </div>

                <div className="button-container">
                    <button className="nextButton">Next</button>

                    <button className="backButton">Back</button>
                </div>

            </div>
        </div>
        
        </body>
    </>
  )
}

export default App
