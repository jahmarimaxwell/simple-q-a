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

function highlightAnswer() {
    

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

answer1.addEventListener("click", function() {
    checkAnswer(answer1.textContent);
    answer1.style.boxShadow = `
        0 0 10px rgba(0, 242, 254, 0.5),
        0 0 30px rgba(0, 242, 254, 0.3),
        0 0 60px rgba(0, 242, 254, 0.1)
    `;
})

answer2.addEventListener("click", function() {
    checkAnswer(answer2.textContent);
    answer2.style.boxShadow = `
        0 0 10px rgba(0, 242, 254, 0.5),
        0 0 30px rgba(0, 242, 254, 0.3),
        0 0 60px rgba(0, 242, 254, 0.1)
    `;
});

answer3.addEventListener("click", function() {
    checkAnswer(answer3.textContent);
    answer3.style.boxShadow = `
        0 0 10px rgba(0, 242, 254, 0.5),
        0 0 30px rgba(0, 242, 254, 0.3),
        0 0 60px rgba(0, 242, 254, 0.1)
    `;
});

answer4.addEventListener("click", function() {
    checkAnswer(answer4.textContent);
    answer4.style.boxShadow = `
        0 0 10px rgba(0, 242, 254, 0.5),
        0 0 30px rgba(0, 242, 254, 0.3),
        0 0 60px rgba(0, 242, 254, 0.1)
    `;
});

