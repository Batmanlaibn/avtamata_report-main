document.querySelectorAll("input[type='text']").forEach(input => {
    input.addEventListener("input", function (e) {
        let rawValue = e.target.value.replace(/[₮,]/g, ""); // Remove ₮ and commas
        if (!isNaN(rawValue) && rawValue !== "") {
            e.target.dataset.raw = rawValue; // Store raw number
            e.target.value = "₮ " + Number(rawValue).toLocaleString();
        }
    });

    input.addEventListener("blur", function (e) {
        if (e.target.value === "₮ ") e.target.value = "";
    });
});

function saveAllAnswers() {
    let incomeStatement = 0;  

    let inputs = document.querySelectorAll("input[type='text']");
    inputs.forEach(input => {
        let rawValue = input.dataset.raw ? Number(input.dataset.raw) : 0;
        localStorage.setItem(input.name, rawValue);
        console.log(`Saved ${input.name}:`, rawValue);

        if (["answer6.1", "answer6.2", "answer6.3", "answer6.4"].includes(input.name)) {
            incomeStatement += rawValue;
        }
    });

    localStorage.setItem("incomeStatement", incomeStatement);
    console.log(`incomeStatement saved: ${incomeStatement}`);

    window.location.href = "asult7.html";
}

document.getElementById("continue-btn").addEventListener("click", function (event) {
    event.preventDefault();
    saveAllAnswers();
});

