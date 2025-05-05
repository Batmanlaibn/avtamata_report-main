function saveAllAnswers() {
    let answers = {}; // Object to store all answers

    for (let i = 4; i <= 12; i++) {
        let selectedAnswer = document.querySelector(`input[name="answer${i}"]:checked`);
        answers[`answer${i}`] = selectedAnswer ? parseInt(selectedAnswer.value) : 0; // Store value or 0
        console.log(`Saved answer${i}: ${answers[`answer${i}`]}`);
    }

    // Save the entire answers object as a JSON string in localStorage
    localStorage.setItem("answers", JSON.stringify(answers));

    // Calculate total score and save it
    let totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);
    localStorage.setItem("totalScore", totalScore);
    console.log(`Total score saved: ${totalScore}`);

    alert("All answers have been saved!");

    // Redirect after saving
    window.location.href = "../medeelel_haruulah_heseg/index.html";
}
