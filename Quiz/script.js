function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let questions = [];

fetch("questions.json")
  .then((response) => response.json())
  .then((data) => {
    questions = data.questions;
    shuffleArray(questions);
    loadQuestion();
  })
  .catch((error) => console.error("Error fetching questions:", error));

let currentQuestionIndex = 0;

const questionElement = document.querySelector(".question");
const optionsContainer = document.querySelector(".options");
const resultElement = document.querySelector(".result");
const nextButton = document.querySelector(".next");

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  optionsContainer.innerHTML = "";

  for (let i = 0; i < currentQuestion.options.length; i++) {
    const option = document.createElement("div");
    option.textContent = currentQuestion.options[i];
    option.classList.add("option");

    optionsContainer.appendChild(option);
  }

  optionsContainer.addEventListener("click", checkAnswer);
}

function checkAnswer(event) {
  const selectedOption = event.target.textContent;
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedOption === currentQuestion.answer) {
    resultElement.textContent = "Correct!";
  } else {
    resultElement.textContent =
      "Wrong! The correct answer is: " + currentQuestion.answer;
  }

  optionsContainer.removeEventListener("click", checkAnswer);

  setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      loadQuestion();
      resultElement.textContent = "";
    } else {
      questionElement.textContent = "Quiz completed!";
      optionsContainer.innerHTML = ""; // Clear options
      resultElement.textContent = "You have completed the quiz!";
      nextButton.style.display = "none";
    }

    setTimeout(() => {
      optionsContainer.addEventListener("click", checkAnswer);
    }, 500);
  }, 1000);
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    resultElement.textContent = "";
    nextButton.style.display = "none";
  } else {
    questionElement.textContent = "Quiz completed!";
    optionsContainer.innerHTML = "";
    resultElement.textContent = "You have completed the quiz!";
    nextButton.style.display = "none";
  }
});

// Load the first question
loadQuestion();
