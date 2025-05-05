
let incomeStatement = Number(localStorage.getItem("incomeStatement")) || 0;
let balance = Number(localStorage.getItem("balance"));

// INCOME STATEMENT //

// DEBT CALCULATION //

let debtCalculation = balance/incomeStatement;

const debtCalculationScore = debtCalculation <= 1 ? 10 :
              debtCalculation <= 3 ? 8 :
              debtCalculation <= 6 ? 6 :
              debtCalculation <= 18 ? 4 :
              debtCalculation <= 24 ? 2 : 0;

// TOTAL EXPENSE //

let expense2 = localStorage.getItem("expense2");
let expense3 = localStorage.getItem("expense3");
let expense5 = Number(localStorage.getItem("expense5"));

function totalExpense() {
    // Convert the stored values to numbers (they are stored as strings in localStorage)
    let total = (parseFloat(expense2) || 0) + (parseFloat(expense3) || 0) + (parseFloat(expense5) || 0);

    return total.toFixed(0);
}

// Display the total expense in an element with the class "totalExpense"

// DISPOSABLE INCOME //

let saving = incomeStatement-totalExpense();
let disposableIncome = (saving/incomeStatement);

const disposableIncomeScore = disposableIncome >= 0.4 ? 10 :
disposableIncome >= 0.3 ? 8 :
disposableIncome >= 0.2 ? 6 :
disposableIncome >= 0.1 ? 4 :
disposableIncome >= 0 ? 2 : 0;


// CURRENT SAVING //
let asset1 = parseFloat(localStorage.getItem("asset1")) || 0;
let asset2 = parseFloat(localStorage.getItem("asset2")) || 0;


asset2 = parseFloat(asset2) || 0;

let currentSaving = 0;
if (totalExpense() !== 0) {
    currentSaving = (asset2 / totalExpense()).toFixed(2);  // You can use .toFixed(2) if you want two decimal places
} else {
    currentSaving = "0";  // If total expense is zero, set currentSaving to 0
}

const currentSavingScore = currentSaving >= 12 ? 10 :
currentSaving >= 6 ? 8 :
currentSaving >= 3 ? 6 :
currentSaving >= 1 ? 4 :
currentSaving > 0 ? 2 : 0;

// RANK SCORE //

let rankScore = debtCalculationScore + disposableIncomeScore + currentSavingScore;

const investorRank = rankScore >= 27 ? "AA" :
rankScore >= 23 ? "A" :
rankScore >= 19 ? "B" :
rankScore >= 15 ? "C" :
rankScore > 10 ? "D" : "F";


const rankText = rankScore >= 27 ? "🥇 Та мөнгөний менежментийг төгс эзэмшсэн байна! Та хамгийн өндөр үнэлгээ авлаа, та өөр түвшинд тоглож байгаа нь тодорхой. Үргэлжлүүлээд байгаарай—та бусдыг тэргүүлж байна!" :
rankScore >= 23 ? "💪 Та маш сайн ажиллаж байна! Дахиад жаахан л хичээхэд та хамгийн дээд түвшинд хүрнэ. Бариа ойрхон байна—Цааш нь үргэлжлүүлээд байгаарай!" :
rankScore >= 19 ? "👍 Таны санхүү тогтвортой бөгөөд сайн явж байна! Санхүүгийн төлөвлөгөө гаргаснаар та санхүүгээ маш хурдан сайжруулах боломжтой." :
rankScore >= 15 ? "⚖️ Таны санхүү дундаж түвшинд байна. Муугүй байгаа ч сайжруулах маш их боломж бий. Зорилгоо өндөр тавиарай!" :
rankScore > 10 ? "🔧 Таны санхүү бага зэрэг ганхсан байна. Одоо чангалах цаг болсон, гэхдээ санаа зоволтгүй—та санхүүгээ өөрчлөх боломжтой." : "🚨 Таны санхүүгийн байдал нилээн хэцүү харагдаж байна, гэхдээ сайн мэдээ гэвэл, урагшлах ганц л зам байна. Хамтдаа төлөвлөгөө гаргаад дээшлэх замаа эхлүүлье!";

document.querySelector(".investorRank").innerText = investorRank;
document.querySelector(".rankText").innerText = rankText;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function calculateBondInterest(bondInterest, bondExchange) {
    return (bondInterest + bondExchange);
}

function calculateBitiInterest(bitiInterest, bitiExchange) {
    return (bitiInterest + bitiExchange);
}

function calculateBabaInterest(babaInterest, babaExchange) {
    return (babaInterest + babaExchange);
}

function calculateTslaInterest(tslaInterest, tslaExchange) {
    return (tslaInterest + tslaExchange);
}

function calculateRate(nper, pv, fv, guess = 0.1, maxIterations = 100, tolerance = 1e-6) {
    let rate = guess;
    for (let i = 0; i < maxIterations; i++) {
        let f = pv * Math.pow(1 + rate, nper) - fv; 
        let fPrime = nper * pv * Math.pow(1 + rate, nper - 1);
        let newRate = rate - f / fPrime;
        if (Math.abs(newRate - rate) < tolerance) return newRate; 
        rate = newRate;
    }
    return rate;
}

wlet nper = 10; // Number of periods
let pv = 1927.00; // Present value
let fv = 3412.00; // Future value

// Calculate Exchange Rate
let exchangeRate = calculateRate(nper, pv, fv);
if (isNaN(exchangeRate)) {
    console.error("Exchange rate calculation failed.");
} else {
    exchangeRate *= 100;  // Convert to percentage
    console.log(`Exchange Rate: ${exchangeRate.toFixed(2)}%`);

    // BOND
    let bondInterest = 19;
    let bondExchange = 0;
    let bondInterestFinal = calculateBondInterest(bondInterest, bondExchange); // Calculate final bond interest
    console.log(`Bond Interest Final: ${bondInterestFinal}%`);

    // BITI
    let bitiInterest = 10;
    let bitiExchange = exchangeRate;
    let bitiInterestFinal = calculateBitiInterest(bitiInterest, bitiExchange); // Calculate final biti interest
    console.log(`BITI Interest Final: ${bitiInterestFinal}%`);

    // BABA
    let babaInterest = 9;
    let babaExchange = exchangeRate;
    let babaInterestFinal = calculateBabaInterest(babaInterest, babaExchange); // Calculate final baba interest
    console.log(`Baba Interest Final: ${babaInterestFinal}%`);

    // TSLA
    let tslaInterest = 12;
    let tslaExchange = exchangeRate;
    let tslaInterestFinal = calculateTslaInterest(tslaInterest, tslaExchange); // Calculate final tsla interest
    console.log(`TSLA Interest Final: ${tslaInterestFinal}%`);
}

// RISK SCORE //
let totalScore = localStorage.getItem("totalScore");
// document.querySelector(".scoreDisplay").innerText = totalScore;

// RISK LEVEL //

function getRiskLevel(score) {
    if (score > 0 && score <= 16) {
        return "1";
    } else if (score > 16 && score <= 22) {
        return "2";
    } else if (score > 22 && score <= 28) {
        return "3";
    } else if (score > 28 && score <= 34) {
        return "4";
    } else if (score > 34 && score <= 44) {
        return "5";
    } else {
        return "Invalid score"; 
    }
}

let riskLevel = getRiskLevel(totalScore);

// document.querySelector(".riskLevel").innerText = ` ${riskLevel}`;
  
// PORTFOLIO //
function getPortfolio(level) {
    const portfolios = {
        1: { bondPercentage: 65, bitiPercentage: 2.5, babaPercentage: 2.5, tslaPercentage: 5 },
        2: { bondPercentage: 60, bitiPercentage: 2.5, babaPercentage: 2.5, tslaPercentage: 5 },
        3: { bondPercentage: 65, bitiPercentage: 5, babaPercentage: 2.5, tslaPercentage: 5 },
        4: { bondPercentage: 60, bitiPercentage: 5, babaPercentage: 5, tslaPercentage: 5 },
        5: { bondPercentage: 55, bitiPercentage: 5, babaPercentage: 5, tslaPercentage: 5 }
    };

    const portfolio = portfolios[level] || 0;

    if (portfolio) {
        // Save each property individually
        localStorage.setItem('bondPercentage', portfolio.bondPercentage);
        localStorage.setItem('bitiPercentage', portfolio.bitiPercentage);
        localStorage.setItem('babaPercentage', portfolio.babaPercentage);
        localStorage.setItem('tslaPercentage', portfolio.tslaPercentage);

    }

    return portfolio;
}

getPortfolio(riskLevel);

let bondPercentage = Number(localStorage.getItem('bondPercentage')) || 0;
    let bitiPercentage = Number(localStorage.getItem('bitiPercentage')) || 0;
    let babaPercentage = Number(localStorage.getItem('babaPercentage')) || 0;
    let tslaPercentage = Number(localStorage.getItem('tslaPercentage')) || 0;

    let bondFirstBalance = incomeStatement * (bondPercentage / 100);
    let bitiFirstBalance = incomeStatement * (bitiPercentage / 100);
    let babaFirstBalance = incomeStatement * (babaPercentage / 100);
    let tslaFirstBalance = incomeStatement * (tslaPercentage / 100);

    let bondMultipliedPercentage = (bondInterestFinal * bondPercentage) / 100;
    let bitiMultipliedPercentage = (bitiInterestFinal * bitiPercentage) / 100;
    let babaMultipliedPercentage = (babaInterestFinal * babaPercentage) / 100;
    let tslaMultipliedPercentage = (tslaInterestFinal * tslaPercentage) / 100;

    let overallMultipliedPercentage = bondMultipliedPercentage + bitiMultipliedPercentage + babaMultipliedPercentage + tslaMultipliedPercentage;
    let multiplier = overallMultipliedPercentage !== 0 ? (1 / overallMultipliedPercentage) * 100 : 0;


let yearlyLoan = expense5*12;
let monthlyLoan = yearlyLoan/12;

let monthlyRent = Number(localStorage.getItem("answer2.3"));
let yearlyRent = monthlyRent*12;

let monthlyGrocery = Number(localStorage.getItem("answer2.1"));
let yearlyGrocery = monthlyGrocery*12;

let monthlyMaintenance = Number(localStorage.getItem("answer2.4"));
let yearlyMaintenance = monthlyMaintenance*12;

let monthlyTransportation = Number(localStorage.getItem("answer2.5"));
let yearlyTransportation = monthlyTransportation*12;

let monthlyHealth = Number(localStorage.getItem("answer2.6"));
let yearlyHealth = monthlyHealth*12;

let monthlySecurityExpense = monthlyLoan+monthlyRent+monthlyGrocery+monthlyMaintenance+monthlyTransportation+monthlyHealth;
let yearlySecurityExpense = yearlyLoan + yearlyRent + yearlyGrocery + yearlyMaintenance + yearlyTransportation +yearlyHealth;

// FINANCIAL STABILITY //

let yearlyClothes = Number(localStorage.getItem("answer3.1"));
let monthlyClothes = yearlyClothes/12;
let monthlyHalfClothes = monthlyClothes/2;
let yearlyHalfClothes = monthlyHalfClothes*12;

let monthlyEntertainment = Number(localStorage.getItem("answer3.2"));
let monthlyHalfEntertainment = monthlyEntertainment/2;
let yearlyHalfEntertainment = monthlyHalfEntertainment*12;

let monthlyLuxury = Number(localStorage.getItem("answer3.3"));
let monthlyHalfLuxury = monthlyEntertainment/2;
let yearlyHalfLuxury = monthlyHalfLuxury*12;

let yearlyEducation = Number(localStorage.getItem("answer2.2"));
let monthlyEducation = yearlyEducation/12;
let monthlyHalfEducation = monthlyEducation/2;
let yearlyHalfEducation = monthlyHalfEducation*12;

let monthlyPhone = Number(localStorage.getItem("answer2.7"));
let monthlyHalfPhone = monthlyPhone/2;
let yearlyHalfPhone = monthlyHalfPhone*12;

let yearlyTravel = Number(localStorage.getItem("answer3.4"));
let yearlyHalfTravel = yearlyTravel/2;
let monthlyHalfTravel = (yearlyTravel/12)/2;

let monthlyStabilityExpense = (monthlyHalfClothes+monthlyHalfEntertainment+monthlyHalfLuxury+monthlyHalfEducation+monthlyHalfPhone+monthlyHalfTravel+monthlySecurityExpense);
let yearlyStabilityExpense = (yearlyHalfClothes+yearlyHalfEntertainment+yearlyHalfLuxury+yearlyHalfEducation+yearlyHalfPhone+yearlyHalfTravel+yearlySecurityExpense);

// FINANCIAL FREEDOM //
let yearlyEntertainment = Number(monthlyEntertainment)*12;
let yearlyLuxury = Number(monthlyLuxury)*12;
let yearlyPhone = Number(monthlyPhone)*12;

let monthlyFreedomExpense = monthlyClothes+monthlyEntertainment+monthlyLuxury+monthlyEducation+monthlyPhone+monthlyTravel+monthlySecurityExpense;
let yearlyFreedomExpense = yearlyClothes+yearlyEntertainment+yearlyLuxury+yearlyEducation+yearlyPhone+yearlyTravel+yearlySecurityExpense;

//FINANCIAL FREEDOM SUPER //
let FreedomCar = Number(localStorage.getItem("answer4.1"));
let monthlyCar = FreedomCar/60;
let yearlyCar = monthlyCar*12;

let FreedomHouse = Number(localStorage.getItem("answer4.2"));
let monthlyHouse = FreedomHouse/120;
let yearlyHouse = monthlyHouse*12;

let yearlySuperTravel = Number(localStorage.getItem("answer4.3"));
let monthlySuperTravel = yearlySuperTravel/12;

let yearlyHobby = Number(localStorage.getItem("answer4.4"));
let monthlyHobby = yearlyHobby/12;

let yearlyOther = Number(localStorage.getItem("answer4.5"));
let monthlyOther = yearlyOther/12;

let monthlyFreedomSuperExpense = (monthlyCar+monthlyHouse+monthlySuperTravel+monthlyHobby+monthlyOther+Number(monthlyFreedomExpense));
let yearlyFreedomSuperExpense = yearlyCar+yearlyHouse+yearlySuperTravel+yearlyHobby+yearlyOther+yearlyFreedomExpense;

let financialSecurityGoal = yearlySecurityExpense*multiplier;
let financialStabilityGoal = Number(yearlyStabilityExpense)*multiplier;
let financialFreedomGoal = Number(yearlyFreedomExpense)*multiplier;
let financialFreedomSuperGoal = Number(yearlyFreedomSuperExpense)*multiplier;











document.querySelector(".financialSecurityGoal").innerText = financialSecurityGoal.toFixed(0);
document.querySelector(".financialStabilityGoal").innerText = financialStabilityGoal.toFixed(0);
document.querySelector(".financialFreedomGoal").innerText = financialFreedomGoal.toFixed(0);
document.querySelector(".financialFreedomSuperGoal").innerText = financialFreedomSuperGoal.toFixed(0);








// document.querySelector(".yearlyLoan").innerText = yearlyLoan;
// document.querySelector(".monthlyLoan").innerText = monthlyLoan;
// document.querySelector(".yearlyRent").innerText = yearlyRent;
// document.querySelector(".monthlyRent").innerText = monthlyRent;
// document.querySelector(".yearlyGrocery").innerText = yearlyGrocery;
// document.querySelector(".monthlyGrocery").innerText = monthlyGrocery;
// document.querySelector(".yearlyMaintenance").innerText = yearlyMaintenance;
// document.querySelector(".monthlyMaintenance").innerText = monthlyMaintenance;
// document.querySelector(".yearlyTransportation").innerText = yearlyTransportation;
// document.querySelector(".monthlyTransportation").innerText = monthlyTransportation;
// document.querySelector(".yearlyHealth").innerText = yearlyHealth;
// document.querySelector(".monthlyHealth").innerText = monthlyHealth;
// let elements1 = document.querySelectorAll(".yearlySecurityExpense");

// // Loop through each element and set the text
// elements1.forEach(function (element) {
//     element.innerText = yearlySecurityExpense;
// });

// let elements2 = document.querySelectorAll(".monthlySecurityExpense");

// // Loop through each element and set the text
// elements2.forEach(function (element) {
//     element.innerText = monthlySecurityExpense;
// });
// document.querySelector(".monthlyHalfClothes").innerText = monthlyHalfClothes;
// document.querySelector(".yearlyHalfClothes").innerText = yearlyHalfClothes;
// document.querySelector(".monthlyHalfEntertainment").innerText = monthlyHalfEntertainment;
// document.querySelector(".yearlyHalfEntertainment").innerText = yearlyHalfEntertainment;
// document.querySelector(".monthlyHalfLuxury").innerText = monthlyHalfLuxury;
// document.querySelector(".yearlyHalfLuxury").innerText = yearlyHalfLuxury;
// document.querySelector(".monthlyHalfEducation").innerText = monthlyHalfEducation.toFixed();
// document.querySelector(".yearlyHalfEducation").innerText = yearlyHalfEducation.toFixed();
// document.querySelector(".monthlyHalfPhone").innerText = monthlyHalfPhone;
// document.querySelector(".yearlyHalfPhone").innerText = yearlyHalfPhone;
// document.querySelector(".monthlyHalfTravel").innerText = monthlyHalfTravel;
// document.querySelector(".yearlyHalfTravel").innerText = yearlyHalfTravel;
// document.querySelector(".monthlyStabilityExpense").innerText = monthlyStabilityExpense;
// document.querySelector(".yearlyStabilityExpense").innerText = yearlyStabilityExpense;
// document.querySelector(".monthlyClothes").innerText = monthlyClothes;
// document.querySelector(".yearlyClothes").innerText = yearlyClothes;
// document.querySelector(".monthlyEntertainment").innerText = monthlyEntertainment;
// document.querySelector(".yearlyEntertainment").innerText = yearlyEntertainment;
// document.querySelector(".monthlyLuxury").innerText = monthlyLuxury;
// document.querySelector(".yearlyLuxury").innerText = yearlyLuxury;
// document.querySelector(".monthlyEducation").innerText = monthlyEducation.toFixed();
// document.querySelector(".yearlyEducation").innerText = yearlyEducation.toFixed();
// document.querySelector(".monthlyPhone").innerText = monthlyPhone;
// document.querySelector(".yearlyPhone").innerText = yearlyPhone;
// document.querySelector(".monthlyTravel").innerText = monthlyTravel;
// document.querySelector(".yearlyTravel").innerText = yearlyTravel;
// document.querySelector(".monthlyFreedomExpense").innerText = monthlyFreedomExpense;
// document.querySelector(".yearlyFreedomExpense").innerText = yearlyFreedomExpense;

// let elements3 = document.querySelectorAll(".monthlyFreedomExpense");

// // Loop through each element and set the text
// elements3.forEach(function (element) {
//     element.innerText = monthlyFreedomExpense;
// });

// let elements4 = document.querySelectorAll(".yearlyFreedomExpense");

// // Loop through each element and set the text
// elements4.forEach(function (element) {
//     element.innerText = yearlyFreedomExpense;
// });
// document.querySelector(".monthlyCar").innerText = monthlyCar;
// document.querySelector(".yearlyCar").innerText = yearlyCar.toFixed(0);
// document.querySelector(".monthlyHouse").innerText = monthlyHouse.toFixed(0);
// document.querySelector(".yearlyHouse").innerText = yearlyHouse.toFixed(0);
// document.querySelector(".monthlySuperTravel").innerText = monthlySuperTravel.toFixed(0);
// document.querySelector(".yearlySuperTravel").innerText = yearlySuperTravel.toFixed(0);
// document.querySelector(".monthlyHobby").innerText = monthlyHobby.toFixed(0);
// document.querySelector(".yearlyHobby").innerText = yearlyHobby.toFixed(0);
// document.querySelector(".monthlyOther").innerText = monthlyOther.toFixed(0);
// document.querySelector(".yearlyOther").innerText = yearlyOther.toFixed(0);
// document.querySelector(".monthlyFreedomSuperExpense").innerText = monthlyFreedomSuperExpense;
// document.querySelector(".yearlyFreedomSuperExpense").innerText = yearlyFreedomSuperExpense;


window.onload = function() {
    console.log("Page loaded and script running!");
    // your other code...
};
