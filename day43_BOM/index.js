const questions = [
    {
        question: "Who is the Prime Minister of Pakistan?",
        options: ["Narendra Modi", "Virat Kohli", "Imran Khan"],
        answer: "Imran Khan"
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe"],
        answer: "Blue Whale"
    },
    {
        question: "What is the boiling point of water?",
        options: ["90°C", "100°C", "110°C"],
        answer: "100°C"
    }
];

let currentQuestionIndex = 0;
let score = 0;
const userAnswers = [];

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const scoreContainer = document.getElementById('score-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    feedbackContainer.textContent = '';
    
    currentQuestion.options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.onclick = () => selectOption(option);
        optionsContainer.appendChild(optionButton);
    });
    
    updateNavigationButtons();
}

function selectOption(option) {
    userAnswers[currentQuestionIndex] = option;
    
    if (option === questions[currentQuestionIndex].answer) {
        feedbackContainer.textContent = 'Correct!';
        feedbackContainer.style.color = 'green';
    } else {
        feedbackContainer.textContent = 'Wrong!';
        feedbackContainer.style.color = 'red';
    }
    
    document.querySelectorAll('#options-container button').forEach(button => {
        button.disabled = true;
    });
}

function nextQuestion() {
    if (userAnswers[currentQuestionIndex] === questions[currentQuestionIndex].answer) {
        score++;
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function prevQuestion() {
    currentQuestionIndex--;
    loadQuestion();
}

function updateNavigationButtons() {
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.textContent = currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next';
    nextBtn.onclick = currentQuestionIndex === questions.length - 1 ? showScore : nextQuestion;
}

function showScore() {
    questionContainer.textContent = 'Quiz Completed!';
    optionsContainer.innerHTML = '';
    feedbackContainer.innerHTML = '';
    scoreContainer.textContent = `Your score is: ${score} out of ${questions.length}`;
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
}

loadQuestion();
