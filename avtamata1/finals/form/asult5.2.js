document.querySelectorAll("input[type='text']").forEach(input => {
    input.addEventListener("input", function (e) {
        let rawValue = e.target.value.replace(/[₮,]/g, ""); 
        if (!isNaN(rawValue) && rawValue !== "") {
            e.target.dataset.raw = rawValue; 
            e.target.value = "₮ " + Number(rawValue).toLocaleString(); 
        }
    });

    input.addEventListener("blur", function (e) {
        if (e.target.value === "₮ ") e.target.value = "";
    });
});

function calculateMonthsDifference(userDate1) {
    const today = new Date(); 
    const userInputDate1 = new Date(userDate1.year, userDate1.month - 1, userDate1.day); 

    if (isNaN(userInputDate1)) {
        console.error('Invalid date provided:', userDate1);
        return 0; 
    }

    let yearsDifference1 = today.getFullYear() - userInputDate1.getFullYear();  
    let monthsDifference1 = today.getMonth() - userInputDate1.getMonth(); 

    if (monthsDifference1 < 0) {
        yearsDifference1--; 
        monthsDifference1 += 12; 
    }
    let totalMonths1 = yearsDifference1 * 12 + monthsDifference1;  

    if (today.getDate() < userInputDate1.getDate()) {
        totalMonths1--;  
    }

    console.log('Total months difference:', totalMonths1);
    return totalMonths1;
}

function saveAllAnswers() {
    let balance = 0;  
    let expense5 = 0;
    let inputs = document.querySelectorAll("input[type='text']");
    
    inputs.forEach(input => {
        let rawValue = input.dataset.raw ? Number(input.dataset.raw) : 0;
        if (rawValue !== 0) {
            localStorage.setItem(input.name, rawValue); 
        } 
        if (["answer5.6", "answer5.11", "answer5.16", "answer5.21"].includes(input.name)) {
            balance += rawValue;
        }
        if (["answer5.5", "answer5.10", "answer5.15", "answer5.20", "answer5.25"].includes(input.name)) {
            expense5 += rawValue;
        }
    });

    const userDate1 = {
        year: parseInt(document.getElementById("year1").value),  
        month: parseInt(document.getElementById("month1").value),
        day: parseInt(document.getElementById("day1").value)
    };

    const totalMonths1 = calculateMonthsDifference(userDate1);
    
    const negativeTotalMonth1 = totalMonths1 * -1;

    // Store the balance and months difference in localStorage
    localStorage.setItem("balance", balance);
    localStorage.setItem("expense5", expense5);
    localStorage.setItem("monthDiff1", negativeTotalMonth1);

    window.location.href = "asult6.html";
}

document.getElementById("continue-btn").addEventListener("click", function (event) {
    event.preventDefault();  
    saveAllAnswers(); 
});
