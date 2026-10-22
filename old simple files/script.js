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

]

let currentQuestion = 0;

let score = 0;

let selectedAnswers = Array(questions.length).fill(null);

let questionElement = document.querySelector(".question");

let answer1 = document.querySelector(".answer1");
let answer2 = document.querySelector(".answer2");
let answer3 = document.querySelector(".answer3");
let answer4 = document.querySelector(".answer4");

questionElement.textContent = questions[currentQuestion].question;

answer1.textContent = questions[currentQuestion].answers[0];
answer2.textContent = questions[currentQuestion].answers[1];
answer3.textContent = questions[currentQuestion].answers[2];
answer4.textContent = questions[currentQuestion].answers[3];

let nextButton = document.querySelector(".nextButton");

let backButton = document.querySelector(".backButton");

let answerButtons = [answer1, answer2, answer3, answer4];

function checkAnswer(answer) {
    // Save the selected answer for this question
    selectedAnswers[currentQuestion] = answer;

    // Recalculate score from all selected answers
    score = selectedAnswers.reduce((total, selected, index) => {
        if (selected === questions[index].correctAnswer) {
            return total + 1;
        }
        return total;
    }, 0);

    console.log("Score:", score);
}

function showQuestion() {
    questionElement.textContent = questions[currentQuestion].question;

    answer1.textContent = questions[currentQuestion].answers[0];
    answer2.textContent = questions[currentQuestion].answers[1];
    answer3.textContent = questions[currentQuestion].answers[2];
    answer4.textContent = questions[currentQuestion].answers[3];

    // Remove previous highlights
    answer1.style.boxShadow = "none";
    answer2.style.boxShadow = "none";
    answer3.style.boxShadow = "none";
    answer4.style.boxShadow = "none";

    const savedAnswer = selectedAnswers[currentQuestion];

    const selectedButton = answerButtons.find(
    button => button.textContent === savedAnswer
    );

    highlightAnswer(selectedButton);
}

function highlightAnswer(selectedButton) {
    answerButtons.forEach(button => {
        button.style.boxShadow = "none";
    });

    if (selectedButton) {
        selectedButton.style.boxShadow = `
            0 0 10px rgba(0, 242, 254, 0.5),
            0 0 30px rgba(0, 242, 254, 0.3),
            0 0 60px rgba(0, 242, 254, 0.1)
        `;
    }
}

nextButton.addEventListener("click", function() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        console.log("Quiz Finished!");
        console.log("Final Score:", score);
};
});

backButton.addEventListener("click", function() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
});

answerButtons.forEach(button => {
    button.addEventListener("click", function() {
        checkAnswer(button.textContent);
        highlightAnswer(button);
    });
});
