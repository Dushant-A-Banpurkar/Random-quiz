function randomQuiz() {
  let random1 = Math.floor(Math.random() * 100);
  let random2 = Math.floor(Math.random() * 100);
  document.getElementById("random1").textContent = random1;
  document.getElementById("random2").textContent = random2;
  return random1 + random2;
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  const correctAnswer =
    parseInt(document.getElementById("random1").textContent) +
    parseInt(document.getElementById("random2").textContent);
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = "";
  if (userAnswer === correctAnswer) {
    resultDiv.textContent = "Correct! Well done.";
  } else {
    resultDiv.textContent = `Incorrect. The correct answer is ${correctAnswer}. Try again.`;
  }
  document.getElementById("answer").value = "";
  randomQuiz();
}
