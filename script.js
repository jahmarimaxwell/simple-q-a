let questions = [

    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyperlink Text Management",
            "Home Tool Markup Language"
        ],
        correctAnswer: "Hyper Text Markup Language"
    },

    {
        question: "What does CSS stand for?",
        answers: [
            "Cascading Style Sheets",
            "Computer Style System",
            "Creative Style Syntax",
            "Colorful Style Sheets"
        ],
        correctAnswer: "Cascading Style Sheets"
    },

    {
        question: "Which language makes a webpage interactive?",
        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        correctAnswer: "JavaScript"
    }

];

let currentQuestion = 0;

let score = 0;

let questionElement = document.getElementById("question");

let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");

questionElement.textContent = questions[currentQuestion].question;

answer1.textContent = questions[currentQuestion].answers[0];
answer2.textContent = questions[currentQuestion].answers[1];
answer3.textContent = questions[currentQuestion].answers[2];
answer4.textContent = questions[currentQuestion].answers[3];

function checkAnswer(answer) {

    if (answer == questions[currentQuestion].correctAnswer) {
        score++;
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }

    console.log("Score:", score);
}

function showQuestion() {
    questionElement.textContent = questions[currentQuestion].question;

    answer1.textContent = questions[currentQuestion].answers[0];
    answer2.textContent = questions[currentQuestion].answers[1];
    answer3.textContent = questions[currentQuestion].answers[2];
    answer4.textContent = questions[currentQuestion].answers[3];

}

nextButton.addEventListener("click", function() {
    currentQuestion++
    showQuestion();
});

answer1.addEventListener("click", function() {
    checkAnswer(answer1.textContent);
});

answer2.addEventListener("click", function() {
    checkAnswer(answer2.textContent);
});

answer3.addEventListener("click", function() {
    checkAnswer(answer3.textContent);
});

answer4.addEventListener("click", function() {
    checkAnswer(answer4.textContent);
});

