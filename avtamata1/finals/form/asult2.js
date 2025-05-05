function saveAllAnswers() {
    let expense2 = 0;  // Variable to store the expense2

    // Iterate over all input fields (both text and email inputs)
    const inputs = document.querySelectorAll("input[type='text'], input[type='email']");
    inputs.forEach(input => {
        let rawValue = input.dataset.raw ? Number(input.dataset.raw) : 0;

        // Ensure that rawValue is a valid number
        console.log(`Raw value for ${input.name}:`, rawValue);

        // Store the raw value directly in localStorage
        localStorage.setItem(input.name, rawValue);

        // Add relevant inputs to the expense2
        if (["answer2.1", "answer2.3", "answer2.4", "answer2.5", "answer2.6", "answer2.7"].includes(input.name)) {
            expense2 += rawValue;
        }
    });

    // Handling answer2.2 to divide by 12
    const sariinSurgaltiinTulbur = localStorage.getItem("answer2.2");  // Get value of answer2.2 from localStorage
    if (sariinSurgaltiinTulbur) {
        const dividedValue = Number(sariinSurgaltiinTulbur) / 12;
        expense2 += dividedValue;
        console.log(`answer2.2 divided by 12: ${dividedValue}`);
    }

    // Save the expense2  in localStorage
    localStorage.setItem("expense2", expense2);
    console.log(`expense2 saved: ${expense2}`);

    // Navigate to another page (for example, "asult3.html")
    window.location.href = "asult3.html";
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
