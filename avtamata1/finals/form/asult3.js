function saveAllAnswers() {
    let expense3 = 0;  // Variable to store the expense3

    // Iterate over all input fields (both text and email inputs)
    const inputs = document.querySelectorAll("input[type='text'], input[type='email']");
    inputs.forEach(input => {
        let rawValue = input.dataset.raw ? Number(input.dataset.raw) : 0;

        // Ensure that rawValue is a valid number
        console.log(`Raw value for ${input.name}:`, rawValue);

        // Store the raw value directly in localStorage
        localStorage.setItem(input.name, rawValue);

        // Add relevant inputs to the expense3
        if (["answer3.2", "answer3.3"].includes(input.name)) {
            expense3 += rawValue;
        }
    });

    // Handling answer2.2 to divide by 12
    const sariinhuvtsas = localStorage.getItem("answer3.1");  // Get value of answer2.2 from localStorage
    if (sariinhuvtsas) {
        const dividedValue1 = Number(sariinhuvtsas) / 12;
        expense3 += dividedValue1;
        console.log(`answer2.2 divided by 12: ${dividedValue1}`);
    }
    const sariinamralt = localStorage.getItem("answer3.4");  // Get value of answer2.2 from localStorage

    if (sariinamralt) {
        const dividedValue2 = Number(sariinamralt) / 12;
        expense3 += dividedValue2;
        console.log(`answer2.2 divided by 12: ${dividedValue2}`);
    }

    // Save the expense3  in localStorage
    localStorage.setItem("expense3", expense3);
    console.log(`expense3 saved: ${expense3}`);

    // Navigate to another page (for example, "asult3.html")
    window.location.href = "asult4.html";
}

// Format inputs on 'input' event, removing any non-numeric characters and storing raw numbers
document.querySelectorAll("input[type='text']").forEach(input => {
    input.addEventListener("input", function (e) {
        let rawValue = e.target.value.replace(/[₮,]/g, ""); // Remove ₮ and commas
        if (!isNaN(rawValue) && rawValue !== "") {
            e.target.dataset.raw = rawValue; // Store raw number
            e.target.value = "₮ " + Number(rawValue).toLocaleString(); // Format value with ₮ and commas
        }
    });

    // Remove formatting when the input loses focus
    input.addEventListener("blur", function (e) {
        if (e.target.value === "₮ ") e.target.value = "";
    });
});

// Add event listener to the continue button to trigger saveAllAnswers()
document.getElementById("continue-btn").addEventListener("click", function (event) {
    event.preventDefault();  // Prevent the default link behavior
    saveAllAnswers();  // Save the answers when clicking the button
});
