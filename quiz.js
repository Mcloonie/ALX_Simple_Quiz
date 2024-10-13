function checkAnswer() {
    // Step 1: Define the correct answer
    const correctAnswer = "4";

    // Step 2: Retrieve the user's answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = selectedOption ? selectedOption.value : null;

    // Step 3: Compare user's answer with the correct answer
    const feedbackElement = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Step 4: Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);

if (userAnswer === correctAnswer) {
    feedbackElement.textContent = "Correct! Well done.";
    feedbackElement.classList.add('correct');
    feedbackElement.classList.remove('incorrect');
} else {
    feedbackElement.textContent = "That's incorrect. Try again!";
    feedbackElement.classList.add('incorrect');
    feedbackElement.classList.remove('correct');
}
