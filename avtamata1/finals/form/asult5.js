
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
    let asset1 = 0;
    let asset2 =0;
    let totalProfitableAsset =0;
    let totalInvestmentAsset = 0;
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

        // Only add specific values to balance

        if (["answer5.1.4", "answer5.1.5", "answer5.1.6", "answer5.1.7"].includes(input.name)) {
            asset2 += rawValue;
        }if (["answer5.1.1", "answer5.1.2", "answer5.1.3"].includes(input.name)) {
            asset1 += rawValue;
        }if (["answer5.1.2", "answer5.1.4", "answer5.1.5", "answer5.1.6"].includes(input.name)) {
            totalProfitableAsset += rawValue;
        }
        if (["answer5.1.4", "answer5.1.5", "answer5.1.6"].includes(input.name)) {
            totalInvestmentAsset += rawValue;
        }
    });

    // Store the balance and months difference in localStorage

    localStorage.setItem("asset2", asset2);
    localStorage.setItem("asset1", asset1);    
    localStorage.setItem("totalProfitableAsset", totalProfitableAsset);
    localStorage.setItem("totalInvestmentAsset", totalInvestmentAsset);

    // Navigate to the next page
    window.location.href = "asult6.html";
}

// Add event listener to the continue button
document.getElementById("continue-btn").addEventListener("click", function (event) {
    event.preventDefault();  // Prevent the default link behavior
    saveAllAnswers();  // Save the answers when clicking the button
});
