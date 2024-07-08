const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "What does CSS stand for?",
        options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "What does HTML stand for?",
        options: ["Hypertext Markup Language", "Hypertext Markdown Language", "Hyperloop Machine Language", "Helicopters Terminals Motorboats Lamborghinis"],
        answer: "Hypertext Markup Language"
    },
    {
        question: "What year was JavaScript launched?",
        options: ["1996", "1995", "1994", "none of the above"],
        answer: "1995"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionContainer.innerHTML = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.innerHTML = `
            <input type="radio" name="option" value="${option}">
            <label>${option}</label>
        `;
        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === quizData[currentQuestionIndex].answer) {
            score++;
        }
    }
}

function showResult() {
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
    resultContainer.style.display = 'block';
}

nextBtn.addEventListener('click', () => {
    checkAnswer();
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        questionContainer.style.display = 'none';
        optionsContainer.style.display = 'none';
        nextBtn.style.display = 'none';
        showResult();
    }
});

loadQuestion();
