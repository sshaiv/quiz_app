const questions = [
    {
      question: "What is the capital of India?",
      options: ["London", "Delhi", ],
      answer: "Delhi",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars"],
      answer: "Mars",
    },
    {
        question: "How many bones are their in human body?",
        options: ["206", "207", ],
        answer: "206",
      },
      {
        question: "who is known as Missile Man of India?",
        options: ["APJ KALAM", "Jawaharlal Nehru",],
        answer: "APJ KALAM",
      },
      {
        question: "Largest Statue in world?",
        options: ["Statue of Unity", "Statue of Liberty", ],
        answer: "Statue of Unity",
      },
      {
        question: "Pet of Mickey Mouse is?",
        options: ["Pluto", "Spike", ],
        answer: "Pluto",
      },
      {
        question: "Total District in Madhya Pradesh?",
        options: ["51", "52", ],
        answer: "52",
      },
      {
        question: "colour of leaf is green due to?",
        options: ["Chlorophyl", "mitochondriya", ],
        answer: "Chlorophyl",
      },
      {
        question: "National vegetable of India?",
        options: ["potato", "Pumpkin",],
        answer: "Pumpkin",
      },
      {
        question: "Color of peace ?",
        options: ["white", "RED", ],
        answer: "RED",
      },
    // Add more questions here...
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");
  const submitButton = document.getElementById("submit-btn");
  const resultContainer = document.getElementById("result-container");
  
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
  
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option) => {
      const optionElement = document.createElement("button");
      optionElement.textContent = option;
      optionElement.addEventListener("click", () => checkAnswer(option));
      optionsContainer.appendChild(optionElement);
    });
  }
  
  function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      score++;
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionContainer.style.display = "none";
    optionsContainer.style.display = "none";
    submitButton.style.display = "none";
  
    const resultText = `You scored ${score} out of ${questions.length}.`;
    resultContainer.textContent = resultText;
  }
  
  submitButton.addEventListener("click", showQuestion);
  