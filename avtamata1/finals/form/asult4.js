
// Format the inputs for currency (₮) on 'input' event
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

// Function to save all answers
function saveAllAnswers() {

    let inputs = document.querySelectorAll("input[type='text']");
    
    // Loop through each input to store values in localStorage
    inputs.forEach(input => {
        let rawValue = input.dataset.raw ? Number(input.dataset.raw) : 0;
        if (rawValue !== 0) {
            localStorage.setItem(input.name, rawValue); // Save raw values in localStorage
            console.log(`Saved ${input.name}:`, rawValue); // Log the saved value for debugging
        } else {
            console.log(`Skipping ${input.name} because it has no valid raw value.`);
        }
    });

    // Store the balance and months difference in localStorage
    
    // Navigate to the next page
    window.location.href = "asult5.html";
}

// Add event listener to the continue button
document.getElementById("continue-btn").addEventListener("click", function (event) {
    event.preventDefault();  // Prevent the default link behavior
    saveAllAnswers();  // Save the answers when clicking the button
});
