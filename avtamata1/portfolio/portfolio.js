// BOND //
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

// EXCHANGE RATE //
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
document.addEventListener('DOMContentLoaded', function() {
    // Common values
    let nper = 10; // Number of periods
    let pv = 1927.00; // Present value
    let fv = 3412.00; // Future value
    let exchangeRate = calculateRate(nper, pv, fv) * 100;

    // BOND
    let bondInterest = 19;
    let bondExchange = 0;
    let bondInterestFinal = Number(calculateBondInterest(bondInterest, bondExchange)); // Calculate final bond interest
    document.querySelector(".bondInterest").innerText = bondInterestFinal;
    localStorage.setItem("bondInterestFinal", bondInterestFinal);

    // BITI
    let bitiInterest = 10;
    let bitiExchange = exchangeRate;
    let bitiInterestFinal = calculateBitiInterest(bitiInterest, bitiExchange); // Calculate final biti interest
    document.querySelector(".bitiInterest").innerText = bitiInterestFinal;

    // BABA
    let babaInterest = 9;
    let babaExchange = exchangeRate;
    let babaInterestFinal = calculateBabaInterest(babaInterest, babaExchange); // Calculate final baba interest
    document.querySelector(".babaInterest").innerText = babaInterestFinal;

    // TSLA
    let tslaInterest = 12;
    let tslaExchange = exchangeRate;
    let tslaInterestFinal = calculateTslaInterest(tslaInterest, tslaExchange); // Calculate final tsla interest
    document.querySelector(".tslaInterest").innerText = tslaInterestFinal;

    // Multiplied percentages
    let bondMultipliedPercentage = (bondInterestFinal * bondPercentage) / 100;
    let bitiMultipliedPercentage = (bitiInterestFinal * bitiPercentage) / 100;
    let babaMultipliedPercentage = (babaInterestFinal * babaPercentage) / 100;
    let tslaMultipliedPercentage = (tslaInterestFinal * tslaPercentage) / 100;

    // Overall and Multiplier
    let overallMultipliedPercentage = bondMultipliedPercentage + bitiMultipliedPercentage + babaMultipliedPercentage + tslaMultipliedPercentage;

    let multiplier = overallMultipliedPercentage !== 0 ? (1 / overallMultipliedPercentage) * 100 : 0; 

    let financialSecurityGoal = yearlySecurityExpense*multiplier;
document.querySelector(".financialSecurityGoal").innerText = financialSecurityGoal.toFixed(0);

let financialStabilityGoal = Number(yearlyStabilityExpense)*multiplier;
document.querySelector(".financialStabilityGoal").innerText = financialStabilityGoal.toFixed(0);

let financialFreedomGoal = Number(yearlyFreedomExpense)*multiplier;
document.querySelector(".financialFreedomGoal").innerText = financialFreedomGoal.toFixed(0);

let financialFreedomSuperGoal = Number(yearlyFreedomSuperExpense)*multiplier;
document.querySelector(".financialFreedomSuperGoal").innerText = financialFreedomSuperGoal.toFixed(0);


    // Update UI
    document.querySelector(".bondMultipliedPercentage").innerText = bondMultipliedPercentage.toFixed(3);
    document.querySelector(".bitiMultipliedPercentage").innerText = bitiMultipliedPercentage.toFixed(3);
    document.querySelector(".babaMultipliedPercentage").innerText = babaMultipliedPercentage.toFixed(3);
    document.querySelector(".tslaMultipliedPercentage").innerText = tslaMultipliedPercentage.toFixed(3);

    document.querySelector(".overallMultipliedPercentage").innerText = overallMultipliedPercentage.toFixed(5);
    document.querySelector(".multiplier").innerText = multiplier.toFixed(8);
});



// RISK SCORE //
let totalScore = localStorage.getItem("totalScore");
document.querySelector(".scoreDisplay").innerText = totalScore;

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

document.querySelector(".riskLevel").innerText = ` ${riskLevel}`;
  
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


let portfolio = getPortfolio(riskLevel);

if (portfolio) {
    document.querySelector(".bondPercentage").innerText = `${portfolio.bondPercentage}%`;
    document.querySelector(".bitiPercentage").innerText = `${portfolio.bitiPercentage}%`;
    document.querySelector(".babaPercentage").innerText = `${portfolio.babaPercentage}%`;
    document.querySelector(".tslaPercentage").innerText = `${portfolio.tslaPercentage}%`;
} else {
    console.error("Invalid risk level, cannot generate portfolio.");
}

// BOND FIRST BALANCE //
let incomeStatement = Number(localStorage.getItem("incomeStatement"));
document.querySelector(".incomeStatement").innerText = incomeStatement;

let totalInvestmentAsset = Number(localStorage.getItem("totalInvestmentAsset"));

let bondPercentage = Number(localStorage.getItem('bondPercentage')) || 0;
let bondFirstBalance = totalInvestmentAsset * (bondPercentage / 100);
document.querySelector(".bondFirstBalance").innerText = ` ${bondFirstBalance}`;


// BITI FIRST BALANCE //

let bitiPercentage = Number(localStorage.getItem('bitiPercentage')) || 0;
let bitiFirstBalance = totalInvestmentAsset * (bitiPercentage / 100);
document.querySelector(".bitiFirstBalance").innerText = ` ${bitiFirstBalance}`;

// BABA FIRST BALANCE //

let babaPercentage = Number(localStorage.getItem('babaPercentage')) || 0;
let babaFirstBalance = totalInvestmentAsset * (babaPercentage / 100);
document.querySelector(".babaFirstBalance").innerText = ` ${babaFirstBalance}`;

// TSLA FIRST BALANCE //

let tslaPercentage = Number(localStorage.getItem('tslaPercentage')) || 0;
let tslaFirstBalance = totalInvestmentAsset * (tslaPercentage / 100);
document.querySelector(".tslaFirstBalance").innerText = ` ${tslaFirstBalance}`;

// BALANCE //

let balance = Number(localStorage.getItem("balance"));
document.querySelector(".balance").innerText = balance;

// INCOME STATEMENT //

// DEBT CALCULATION //

let debtCalculation = balance/incomeStatement;
document.querySelector(".debtCalculation").innerText = debtCalculation;


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
document.querySelector(".debtCalculationScore").innerText = debtCalculationScore;

document.querySelector(".totalExpense").innerText = totalExpense();

// Display the total expense in an element with the class "totalExpense"

// DISPOSABLE INCOME //

let saving = incomeStatement-totalExpense();
let disposableIncome = (saving/incomeStatement);
document.querySelector(".disposableIncome").innerText = disposableIncome;

const disposableIncomeScore = disposableIncome >= 0.4 ? 10 :
disposableIncome >= 0.3 ? 8 :
disposableIncome >= 0.2 ? 6 :
disposableIncome >= 0.1 ? 4 :
disposableIncome >= 0 ? 2 : 0;

document.querySelector(".disposableIncomeScore").innerText = disposableIncomeScore;

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

document.querySelector(".currentSaving").innerText = currentSaving;
document.querySelector(".currentSavingScore").innerText = currentSavingScore;

// RANK SCORE //

let rankScore = debtCalculationScore + disposableIncomeScore + currentSavingScore;
document.querySelector(".rankScore").innerText = rankScore;

const investorRank = rankScore >= 27 ? "AA" :
rankScore >= 23 ? "A" :
rankScore >= 19 ? "B" :
rankScore >= 15 ? "C" :
rankScore > 10 ? "D" : "F";

document.querySelector(".investorRank").innerText = investorRank;

const rankText = rankScore >= 27 ? "🥇 Та мөнгөний менежментийг төгс эзэмшсэн байна! Та хамгийн өндөр үнэлгээ авлаа, та өөр түвшинд тоглож байгаа нь тодорхой. Үргэлжлүүлээд байгаарай—та бусдыг тэргүүлж байна!" :
rankScore >= 23 ? "💪 Та маш сайн ажиллаж байна! Дахиад жаахан л хичээхэд та хамгийн дээд түвшинд хүрнэ. Бариа ойрхон байна—Цааш нь үргэлжлүүлээд байгаарай!" :
rankScore >= 19 ? "👍 Таны санхүү тогтвортой бөгөөд сайн явж байна! Санхүүгийн төлөвлөгөө гаргаснаар та санхүүгээ маш хурдан сайжруулах боломжтой." :
rankScore >= 15 ? "⚖️ Таны санхүү дундаж түвшинд байна. Муугүй байгаа ч сайжруулах маш их боломж бий. Зорилгоо өндөр тавиарай!" :
rankScore > 10 ? "🔧 Таны санхүү бага зэрэг ганхсан байна. Одоо чангалах цаг болсон, гэхдээ санаа зоволтгүй—та санхүүгээ өөрчлөх боломжтой." : "🚨 Таны санхүүгийн байдал нилээн хэцүү харагдаж байна, гэхдээ сайн мэдээ гэвэл, урагшлах ганц л зам байна. Хамтдаа төлөвлөгөө гаргаад дээшлэх замаа эхлүүлье!";

document.querySelector(".rankText").innerText = rankText;

// FINANCIAL SECURITY //

let yearlyLoan = expense5*12;
let monthlyLoan = yearlyLoan/12;

document.querySelector(".yearlyLoan").innerText = yearlyLoan;
document.querySelector(".monthlyLoan").innerText = monthlyLoan;


let monthlyRent = Number(localStorage.getItem("answer2.3"));

let yearlyRent = monthlyRent*12;
document.querySelector(".yearlyRent").innerText = yearlyRent;
document.querySelector(".monthlyRent").innerText = monthlyRent;


let monthlyGrocery = Number(localStorage.getItem("answer2.1"));

let yearlyGrocery = monthlyGrocery*12;
document.querySelector(".yearlyGrocery").innerText = yearlyGrocery;
document.querySelector(".monthlyGrocery").innerText = monthlyGrocery;

let monthlyMaintenance = Number(localStorage.getItem("answer2.4"));

let yearlyMaintenance = monthlyMaintenance*12;
document.querySelector(".yearlyMaintenance").innerText = yearlyMaintenance;
document.querySelector(".monthlyMaintenance").innerText = monthlyMaintenance;

let monthlyTransportation = Number(localStorage.getItem("answer2.5"));

let yearlyTransportation = monthlyTransportation*12;
document.querySelector(".yearlyTransportation").innerText = yearlyTransportation;
document.querySelector(".monthlyTransportation").innerText = monthlyTransportation;

let monthlyHealth = Number(localStorage.getItem("answer2.6"));

let yearlyHealth = monthlyHealth*12;
document.querySelector(".yearlyHealth").innerText = yearlyHealth;
document.querySelector(".monthlyHealth").innerText = monthlyHealth;

let monthlySecurityExpense = monthlyLoan+monthlyRent+monthlyGrocery+monthlyMaintenance+monthlyTransportation+monthlyHealth;
let yearlySecurityExpense = yearlyLoan + yearlyRent + yearlyGrocery + yearlyMaintenance + yearlyTransportation +yearlyHealth;

let elements1 = document.querySelectorAll(".yearlySecurityExpense");

// Loop through each element and set the text
elements1.forEach(function (element) {
    element.innerText = yearlySecurityExpense;
});

let elements2 = document.querySelectorAll(".monthlySecurityExpense");

// Loop through each element and set the text
elements2.forEach(function (element) {
    element.innerText = monthlySecurityExpense;
});

// FINANCIAL STABILITY //

let yearlyClothes = Number(localStorage.getItem("answer3.1"));
let monthlyClothes = yearlyClothes/12;
let monthlyHalfClothes = monthlyClothes/2;
let yearlyHalfClothes = monthlyHalfClothes*12;

document.querySelector(".monthlyHalfClothes").innerText = monthlyHalfClothes;
document.querySelector(".yearlyHalfClothes").innerText = yearlyHalfClothes;

let monthlyEntertainment = Number(localStorage.getItem("answer3.2"));
let monthlyHalfEntertainment = monthlyEntertainment/2;
let yearlyHalfEntertainment = monthlyHalfEntertainment*12;

document.querySelector(".monthlyHalfEntertainment").innerText = monthlyHalfEntertainment;
document.querySelector(".yearlyHalfEntertainment").innerText = yearlyHalfEntertainment;

let monthlyLuxury = Number(localStorage.getItem("answer3.3"));
let monthlyHalfLuxury = monthlyEntertainment/2;
let yearlyHalfLuxury = monthlyHalfLuxury*12;

document.querySelector(".monthlyHalfLuxury").innerText = monthlyHalfLuxury;
document.querySelector(".yearlyHalfLuxury").innerText = yearlyHalfLuxury;

let yearlyEducation = Number(localStorage.getItem("answer2.2"));
let monthlyEducation = yearlyEducation/12;
let monthlyHalfEducation = monthlyEducation/2;
let yearlyHalfEducation = monthlyHalfEducation*12;

document.querySelector(".monthlyHalfEducation").innerText = monthlyHalfEducation.toFixed();
document.querySelector(".yearlyHalfEducation").innerText = yearlyHalfEducation.toFixed();

let monthlyPhone = Number(localStorage.getItem("answer3.4"));
let monthlyHalfPhone = monthlyPhone/2;
let yearlyHalfPhone = monthlyHalfPhone*12;

document.querySelector(".monthlyHalfPhone").innerText = monthlyHalfPhone;
document.querySelector(".yearlyHalfPhone").innerText = yearlyHalfPhone;

let monthlyTravel = Number(localStorage.getItem("answer2.7"));
let monthlyHalfTravel = monthlyTravel/2;
let yearlyHalfTravel = monthlyHalfTravel*12;

document.querySelector(".monthlyHalfTravel").innerText = monthlyHalfTravel;
document.querySelector(".yearlyHalfTravel").innerText = yearlyHalfTravel;

let monthlyStabilityExpense = (monthlyHalfClothes+monthlyHalfEntertainment+monthlyHalfLuxury+monthlyHalfEducation+monthlyHalfPhone+monthlyHalfTravel+monthlySecurityExpense).toFixed(0);
let yearlyStabilityExpense = (yearlyHalfClothes+yearlyHalfEntertainment+yearlyHalfLuxury+yearlyHalfEducation+yearlyHalfPhone+yearlyHalfTravel+yearlySecurityExpense).toFixed(0);

document.querySelector(".monthlyStabilityExpense").innerText = monthlyStabilityExpense;
document.querySelector(".yearlyStabilityExpense").innerText = yearlyStabilityExpense;


// FINANCIAL FREEDOM //

document.querySelector(".monthlyClothes").innerText = monthlyClothes;
document.querySelector(".yearlyClothes").innerText = yearlyClothes;

let yearlyEntertainment = Number(monthlyEntertainment)*12;

document.querySelector(".monthlyEntertainment").innerText = monthlyEntertainment;
document.querySelector(".yearlyEntertainment").innerText = yearlyEntertainment;

let yearlyLuxury = Number(monthlyLuxury)*12;

document.querySelector(".monthlyLuxury").innerText = monthlyLuxury;
document.querySelector(".yearlyLuxury").innerText = yearlyLuxury;

document.querySelector(".monthlyEducation").innerText = monthlyEducation.toFixed();
document.querySelector(".yearlyEducation").innerText = yearlyEducation.toFixed();

let yearlyPhone = Number(monthlyPhone)*12;

document.querySelector(".monthlyPhone").innerText = monthlyPhone;
document.querySelector(".yearlyPhone").innerText = yearlyPhone;

let yearlyTravel = Number(monthlyTravel)*12;

document.querySelector(".monthlyTravel").innerText = monthlyTravel;
document.querySelector(".yearlyTravel").innerText = yearlyTravel;

let monthlyFreedomExpense = monthlyClothes+monthlyEntertainment+monthlyLuxury+monthlyEducation+monthlyPhone+monthlyTravel+monthlySecurityExpense;
let yearlyFreedomExpense = yearlyClothes+yearlyEntertainment+yearlyLuxury+yearlyEducation+yearlyPhone+yearlyTravel+yearlySecurityExpense;

document.querySelector(".monthlyFreedomExpense").innerText = monthlyFreedomExpense;
document.querySelector(".yearlyFreedomExpense").innerText = yearlyFreedomExpense;

let elements3 = document.querySelectorAll(".monthlyFreedomExpense");

// Loop through each element and set the text
elements3.forEach(function (element) {
    element.innerText = monthlyFreedomExpense;
});

let elements4 = document.querySelectorAll(".yearlyFreedomExpense");

// Loop through each element and set the text
elements4.forEach(function (element) {
    element.innerText = yearlyFreedomExpense;
});

//FINANCIAL FREEDOM SUPER //
let FreedomCar = Number(localStorage.getItem("answer4.1"));
let monthlyCar = FreedomCar/60;
let yearlyCar = monthlyCar*12;

document.querySelector(".monthlyCar").innerText = monthlyCar;
document.querySelector(".yearlyCar").innerText = yearlyCar.toFixed(0);

let FreedomHouse = Number(localStorage.getItem("answer4.2"));
let monthlyHouse = FreedomHouse/120;
let yearlyHouse = monthlyHouse*12;

document.querySelector(".monthlyHouse").innerText = monthlyHouse.toFixed(0);
document.querySelector(".yearlyHouse").innerText = yearlyHouse.toFixed(0);

let yearlySuperTravel = Number(localStorage.getItem("answer4.3"));
let monthlySuperTravel = yearlySuperTravel/12;

document.querySelector(".monthlySuperTravel").innerText = monthlySuperTravel.toFixed(0);
document.querySelector(".yearlySuperTravel").innerText = yearlySuperTravel.toFixed(0);

let yearlyHobby = Number(localStorage.getItem("answer4.4"));
let monthlyHobby = yearlyHobby/12;

document.querySelector(".monthlyHobby").innerText = monthlyHobby.toFixed(0);
document.querySelector(".yearlyHobby").innerText = yearlyHobby.toFixed(0);

let yearlyOther = Number(localStorage.getItem("answer4.5"));
let monthlyOther = yearlyOther/12;

document.querySelector(".monthlyOther").innerText = monthlyOther.toFixed(0);
document.querySelector(".yearlyOther").innerText = yearlyOther.toFixed(0);

let monthlyFreedomSuperExpense = (monthlyCar+monthlyHouse+monthlySuperTravel+monthlyHobby+monthlyOther+Number(monthlyFreedomExpense)).toFixed(0);
let yearlyFreedomSuperExpense = Number((yearlyCar+yearlyHouse+yearlySuperTravel+yearlyHobby+yearlyOther+yearlyFreedomExpense)).toFixed(0);

document.querySelector(".monthlyFreedomSuperExpense").innerText = monthlyFreedomSuperExpense;
document.querySelector(".yearlyFreedomSuperExpense").innerText = yearlyFreedomSuperExpense;


// BALANCE REPORT //

let totalAsset = asset1+asset2;
document.querySelector(".totalAsset").innerText = totalAsset;

let ipotekLoan = Number(localStorage.getItem("answer5.1"));
let totalDebt = balance + ipotekLoan;

document.querySelector(".totalDebt").innerText = totalDebt;

let totalProfitableAsset = Number(localStorage.getItem("totalProfitableAsset"));
document.querySelector(".totalProfitableAsset").innerText = totalProfitableAsset;

let totalEquity = totalAsset-totalDebt;
document.querySelector(".totalEquity").innerText = totalEquity;

let workerAsset = (totalProfitableAsset/totalAsset)*100;
document.querySelector(".workerAsset").innerText = workerAsset.toFixed(2);

// DEBT/INCOME //

let savingIncomeCorrelation = disposableIncome*100;
document.querySelector(".savingIncomeCorrelation").innerText = savingIncomeCorrelation.toFixed(2);

const savingIncomeCorrelationText = savingIncomeCorrelation < 11 ? "Бидэнд маш том асуудал байна. Таны бүх орлого зардал болон гарч байна. Энэ нь дараах үр дагавартай: Сарын эцэст танд ямар ч хөрөнгө оруулах мөнгө үлдэхгүй. Та хөрөнгө оруулалт хийхгүй бол таны төлөө ажиллаж чадах хөрөнгө өө бүтээхгүй. Ингэснээр та өөрт ашигтай зүйлсд (таны төлөө унтаж байхад чинь ч ажиллах хөрөнгө)  хөрөнгө оруулахгүйгээр санхүүгийн эрх чөлөөнд хэзээ ч хүрэхгүй. Таны хийх ёстой хамгийн эхний алхам бол  a) Зардлаа дор хаяж 10-15% бууруулах. Бараг бүх хүн үүнийг хийж чадна. b) Орлогоо нэмэгдүүлэх арга зам олох. Жишээ нь: Сарынхаа цалинг хэрхэн нэмэгдүүлэх, эсвэл амралтын өдрүүдэд нэмэлт цагаар ажиллах талаар даргатайгаа ярилц. Та өөрийгөө компани гээд төсөөлчих. Яг одоо та 0% -ийн ашигтай компани гэсэн үг. Та өөрийнхөө одоогийн хувьцааг худалдаж авах уу? Бараг л үгүй байх. Тиймээс таныг маш их ажил хүлээж байна!" :
  (savingIncomeCorrelation > 10 && savingIncomeCorrelation < 21) ? "Та орлогынхоо маш бага хувийг хуримтлуулах боломжтой байна. Хадгаламж, хөрөнгө оруулалт хийх нь илүү сайхан ирээдүйн төлөө өнөөдрийг золиослох явдал юм. Хөрөнгө оруулалтын хамгийн сайхан нь нийлмэл өгөөж бий болох юм. Та өнөөдөр хичнээн их золиос гаргаж, хөрөнгө оруулалт хийнэ төдий хэмжээгээр ээ ирээдүйд илүү их өгөөж авах болно. Илүү ихээр, урт хугацаанд хөрөнгө оруулалт хийх тусам та илүү хурдан санхгүүгийн эрх чөлөөнд хүрэх боломжтой. Гэвч одоогийн орлогоосоо ийм бага хэмжээний мөнгийг хэмнэх нь хангалтгүй. Өнөөдрийн зардлыг тань хангах хөрөнгө оруулалтын багцыг бүрдүүлэхэд 10 гаруй жил шаардагдана. 10 жил гэдэг бол маш урт хугацаа! Таны хийх ёстой хамгийн эхний алхам бол a) Зардлаа дор хаяж 10%-иар бууруулах. Бараг бүх хүн үүнийг хийж чадна. b) Орлогоо нэмэгдүүлэх арга зам олох. Жишээ нь: Сарынхаа цалинг хэрхэн нэмэгдүүлэх, эсвэл амралтын өдрүүдэд нэмэлт цагаар ажиллах талаар даргатайгаа ярилц. Та өөрийгөө компани гээд төсөөлчих. Яг одоо та бараг ашиг олдоггүй компани юм.  Та өөрийнхөө одоогийн хувьцааг худалдаж авах уу? Бараг л үгүй байх. Тиймээс таныг маш их ажил хүлээж байна!" :
  (savingIncomeCorrelation > 20 && savingIncomeCorrelation < 31) ? "Юуны өмнө танд баяр хүргэе! Монголд орлогынхоо 20 -иос дээш хувийг хэмнэх боломжтой, сахилга баттай хүн маш цөөхөн байдаг. Та маш мундаг байна. Гэхдээ хоёулаа илүү сайн болж чадна гэж би бодож байна. Орлогынхоо 35 хувийг сар бүр хадгалж, хөрөнгө оруулалт хийснээр та ойролцоогоор 6  жилийн дотор санхүүгийн эрх чөлөөнд хүрнэ гэсэн үг юм. Энэ нь урт хугацаа хэвээр байна. Үүнийг 5 -аас доош болгох арга замыг хайж үзье! Таны хийх ёстой хамгийн эхний алхам бол a) Зардлаа дор хаяж 10%-иар бууруулах. Бараг бүх хүн үүнийг хийж чадна. b) Орлогоо нэмэгдүүлэх арга зам олох. Жишээ нь: Сарынхаа цалинг хэрхэн нэмэгдүүлэх, эсвэл амралтын өдрүүдэд нэмэлт цагаар ажиллах талаар даргатайгаа ярилц. Өөрийгөө компани гэж төсөөлөөд үз дээ. Яг одоо та боломжийн сайн ашигтай компани юм.  Гэхдээ таны эргэн тойронд илүү ашигтай ажилладаг компаниуд байгаа. Та хэдий сайн байгаа ч илүү сайжрах боломж байсаар байна." :
  (savingIncomeCorrelation > 30 && savingIncomeCorrelation < 41) ? "Юуны өмнө танд баяр хүргэе! Монголд орлогынхоо 30-аас дээш хувийг хэмнэх боломж, сахилга баттай хүн маш цөөхөн байдаг. Та аль хэдийнээ маш сайн ажиллаж байна. Санхүүгийн эрх чөлөө таны хувьд маш боломжтой. Гэхдээ хоёулаа санхүүгийн эрх чөлөөнд хүрэх хугацаагаа 6 жилээс 4 жил хүртэл богиносгож чадна гэж би бодож байна! Гайхалтай биш гэж үү? Өөрийгөө компани гэж төсөөлөөд үз дээ. Таны сарын ашгийн хэмжээ > 31%, энэ бол маш сайн. Гэсэн хэдий ч би таныг орлогоо 10-15% -иар нэмэгдүүлэх, эсвэл одоогийн зардлаасаа 10% -ийг хэмнэх арга замыг хайж олоосой гэж хүсч байна. Ингэснээр хоёулаа 40%-аас дээш хэмжээгээр хөрөнгө оруулалт хийх боломж бүрдэнэ. Жинхэнэ ид шид эндээс эхэлнэ! Юутай ч ингээд таны хийх ажил бол одоо энэ хөрөнгө оруулалтын хувийг аль болох өндөр байлгах явдал юм. Учир нь та хэдэн жилийн дараа санхүүгийн эрх чөлөөнд хүрэх баталгаатай замаар явж байна. Эрүүл мэнддээ анхаарч, одоогийн байр суурь, орлогын хэмжээгээ хадгалахын тулд чадах бүхнээ хийгээрэй. Мундаг байна шүү!" :
  (savingIncomeCorrelation > 40) ? "Гайхалтай! Өөрийгөө компани гэж төсөөлөөд үз дээ. Та бол сард 40 -өөс дээш хувийн ашигтай ажилладаг компани юм. Таны адил зарлагаа хяналтандаа байлгаж чаддаг хувь хүн тун цөөн. Ихэвчлэн хүмүүс цалингаа нэмэгдмэгц зардлаа мөн нэмэгдүүлдэг. Таны даалгавар бол энэ хөрөнгө оруулалтын хувийг аль болох өндөр байлгах явдал юм. Учир нь та хэдэн жилийн дараа санхүүгийн эрх чөлөөнд хүрэх баталгаатай замаар явж байна. Хэдийгээр та 5 жилийн дотор санхүүгийн эрх чөлөөнд хүрэх баталгаатай замаар явж байгаа ч гэсэн илүү хөрөнгө оруулалт хийх арга зам хайх нь буруутахгүй. Миний танд тавих сорилт юу вэ гэж үү? Ахиад зардлынхаа 5-10% -ийг хэмнэж, орлогоо 10% -иар нэмэгдүүлэх арга замыг эрэлхийл, тэгвэл та нэмээд орлогынхоо 10 хувийг хөрөнгө оруулах боломжтой болно. Хэрэв та энэ их мөнгийг хэмнэж, хөрөнгө оруулбал амьдрал тань гайхамшигтай болох болно! Эрүүл мэндээ анхаарч, одоогийн байр суурь, орлогын түвшингөө хадгалахын тулд чадах бүхнээ хийгээрэй. Мундаг байна шүү!": "";

document.querySelector(".savingIncomeCorrelationText").innerText = savingIncomeCorrelationText;
 
let debtIncomeCorrelation = Number(expense5)/incomeStatement;
document.querySelector(".debtIncomeCorrelation").innerText = debtIncomeCorrelation.toFixed(2);

const debtIncomeCorrelationText = debtIncomeCorrelation < 1 ? "Гайхалтай! Та ямар ч өр төлбөргүй байна. Хэрэглээ, машин болон цалингийн зээл нь биднийг ядуу байдалд хүлдэг гол зүйл бөгөөд та ийм өрнөөс хол байж чадсан байна. Энэ байдлаараа байгаарай! Амьдралын нөхцөлөө сайжруулахын тулд орон сууц худалдан авах гэх мэт материаллаг байдлаар таны амьдралын чанарыг үнэхээр дээшлүүлэх боломжтой үед л зээл аваарай. Гэхдээ 1-2 хон жилийг золиослоод, галзуу юм шиг хөрөнгө оруулалт хийчээд, дараа нь үнэтэй гэж бодож байсан зүйлс тань хямд мэт санагдах хүртэл хөрөнгөө өсөхийг харах нь хамгийн зөв сонголт юм." :
  (debtIncomeCorrelation > 0 && debtIncomeCorrelation < 21) ? "Сайн байна. Таны өр маш бага байна. Хэрэглээ, машин болон цалингийн зээл нь биднийг ядуу байдалд хүлдэг гол зүйл юм. Таны өр хийгээд зээлийн хүү орлогыг тань бодвол хамаагүй бага байгаа нь сайн хэрэг. Гэхдээ ингээд боддоо, энэ мөнгөө банкинд биш, өөртөө төлөх боломж байгаа гээд. Тэдэнд өөрийн орлогынхоо 10%-ийг тогтмол төлснөөс өрөө дарж дуусгаад өөрийн ирээдүй рүүгээ хөрөнгө оруулах хэрэгтэй шүү. Амьдралын нөхцөлөө сайжруулахын тулд орон сууц худалдан авах гэх мэт материаллаг байдлаар таны амьдралын чанарыг үнэхээр дээшлүүлэх боломжтой үед л зээл аваарай. Үүнийг мартаж болохгүй шүү. Гэхдээ 1-2 хон жилийг золиослоод, галзуу юм шиг хөрөнгө оруулалт хийчээд, дараа нь үнэтэй гэж бодож байсан зүйлс тань хямд мэт санагдах хүртэл хөрөнгөө өсөхийг харах нь хамгийн зөв сонголт юм." :
  (debtIncomeCorrelation > 20 && debtIncomeCorrelation < 41) ? "Таны орлогын хэтэрхий их хувь нь өр болон зээл рүү урсаад байна. Хэрэглээ, машин болон цалингийн зээл нь биднийг ядуу байдалд хүлдэг гол зүйл юм. Таны энэ өр, зээл бол өөр хэн нэгний орлого гэсэн үг. Хэн нэгэн мөнгөө танд хөрөнгө оруулалт хэлбэрээр зээл олгосон гэж ойлгож болно. Тиймээс та тэдэнд сар бүр хүү төлж байна. Таны зорилго бол өөр хүнд төлөхийн оронд өөртөө мөнгө төлж эхлэх явдал байх ёстой. Үүнд хүрэх хамгийн сайн арга бол сарын цалинтай харьцуулахад бага ч гэсэн яг одооноос л хөрөнгө оруулалт хийж эхлэх. Мөн зээлээ аль болох хурдан төлөхөд анхаарлаа хандуулах явдал юм. Өргүй болсон даруйд санхүүгийн эрх чөлөөнд хүрэх томоохон алхамуудыг хийж эхлэх боломжой болно. Амьдралын нөхцөлөө сайжруулахын тулд орон сууц худалдан авах гэх мэт материаллаг байдлаар таны амьдралын чанарыг үнэхээр дээшлүүлэх боломжтой үед л зээл аваарай. Үүнийг мартаж болохгүй шүү. Гэхдээ 1-2 хон жилийг золиослоод, галзуу юм шиг хөрөнгө оруулалт хийчээд, дараа нь үнэтэй гэж бодож байсан зүйлс тань хямд мэт санагдах хүртэл хөрөнгөө өсөхийг харах нь хамгийн зөв сонголт юм." :
  (debtIncomeCorrelation > 40) ? "Таны орлогын хэт их хувь нь хүү, өрийн төлбөрт урсаж байна. Таны орлогын талаас илүү хувь нь өөр хүний орлого болж байна! Хэрэглээ, машин болон цалингийн зээл нь биднийг ядуу байдалд хүлдэг гол зүйл гэдгийг санаарай. Танд байгаа өр бол үндсэндээ өөр хэн нэгний хөрөнгө юм. Хэн нэгэн мөнгөө танд хөрөнгө оруулалт хэлбэрээр зээл олгосон гэж ойлгож болно. Тиймээс та түүнд сар бүр хүү төлж байна. Таны зорилго бол өөр хүнд мөнгөө төлөхийн оронд өөртөө мөнгө төлж эхлэх явдал юм. Таны эхний алхам бол хамгийн бага өр төлбөрөөс эхлэн аль болох хурдан төлж эхлэх. Хамгийн бага өрнөөс эхэлснээр үлдсэн өрнүүдээ төлж дуусгахад хялбар байх болно. Бүх өр зээлээ барагдуулсны дараа та амжилтад хүрсэн мэт гайхалтай мэдрэгдэнэ. Өргүй болсон даруйд санхүүгийн эрх чөлөөнд хүрэх томоохон алхамуудыг хийж эхлэх боломжой болно. Амьдралын нөхцөлөө сайжруулахын тулд орон сууц худалдан авах гэх мэт материаллаг байдлаар таны амьдралын чанарыг үнэхээр дээшлүүлэх боломжтой үед л зээл аваарай. Үүнийг мартаж болохгүй шүү. Гэхдээ 1-2 хон жилийг золиослоод, галзуу юм шиг хөрөнгө оруулалт хийчээд, дараа нь үнэтэй гэж бодож байсан зүйлс тань хямд мэт санагдах хүртэл хөрөнгөө өсөхийг харах нь хамгийн зөв сонголт юм." : "";

document.querySelector(".debtIncomeCorrelationText").innerText = debtIncomeCorrelationText;

let debtAssetCorrelation = (totalAsset/balance)*100;

const debtAssetCorrelationText = debtAssetCorrelation < 11 ? "Таны хөрөнгийн маш бага хувь нь өр төлбөр эсвэл огт байхгүй байна. Таны эзэмшиж буй хөрөнгийн ихэнх нь таных! Баяр хүргэе. Энэ нь банкинд зээл төлөхийн оронд хадгалсан бүх мөнгөө хөрөнгө оруулах боломжийг олгож байна. Зорилго нь өрийн түвшинг аль болох бага байлгаж, илүү их мөнгөөр хөрөнгө оруулах явдал юм. Яагаад? Учир нь санхүүгийн эрх чөлөөнд зөвхөн таны төлөө ажиллах маш их хөрөнгийг эзэмшсэнээр хүрэх боломжтой бөгөөд хэрэв их хэмжээний өртэй бол энэ нь боломжгүй! Та гайхалтай замаар явж байна. Энэ хэвээрээ үргэлжлүүлээрэй!" :
  (debtAssetCorrelation > 10 && debtAssetCorrelation < 21) ? "Таны балансад маш бага өр төлбөр байна. Таны эзэмшиж буй хөрөнгийн ихэнх нь таных! Баяр хүргэе! Энэ нь банкинд мөнгө төлөхийн оронд хадгалсан бүх мөнгөө хөрөнгө оруулах боломжийг олгож байна. Зорилго нь өрийн түвшинг бага байлгах эсвэл өрийг бүрмөсөн арилгах хэрэгтэй. Яагаад? Учир нь санхүүгийн эрх чөлөөнд зөвхөн таны төлөө ажиллах маш их хөрөнгийг эзэмшсэнээр хүрэх боломжтой бөгөөд хэрэв их өртэй бол энэ нь боломжгүй! Та гайхалтай замаар явж байна. Энэ хэвээрээ үргэлжлүүлээрэй!" :
  (debtAssetCorrelation > 20 && debtAssetCorrelation < 31) ? "Таны балансад бага зэрэг өр байна. Зээлээр хөрөнгөө худалдаж авсан тул таны хөрөнгийн ихэнх хувь нь таных биш байна. Зээлсэн мөнгөө ирэх сар, жилүүдэд төлөх ёстой гэдэг нь өөртөө хөрөнгө оруулах мөнгө багасна гэсэн үг. Санхүүгийн эрх чөлөөнд хүрэх нь арай илүү хэцүү болно, учир нь та эхлээд банкинд өрөө төлөх ёстой. Шинэ зээл бүү ав. Таны зорилго бол өрөө аажмаар барагдуулж, эцэст нь бүх өрийг арилгах явдал юм. Яагаад? Учир нь санхүүгийн эрх чөлөөнд зөвхөн таны төлөө ажиллах маш их хөрөнгийг эзэмшсэнээр хүрэх боломжтой бөгөөд хэрэв их өртэй бол энэ нь боломжгүй! Хичээгээрэй" :
  (debtAssetCorrelation > 30 && debtAssetCorrelation < 41) ? "Таны балансад их хэмжээний өр байна. Зээлээр хөрөнгөө худалдаж авсан тул таны хөрөнгийн ихэнх хувь нь таных биш байна. Зээлсэн мөнгөө ирэх сар, жилүүдэд төлөх ёстой гэдэг нь өөртөө хөрөнгө оруулах мөнгө багасна гэсэн үг. Санхүүгийн эрх чөлөөнд хүрэх нь арай илүү хэцүү болно, учир нь та эхлээд банкинд өрөө төлөх ёстой. Шинэ зээл бүү ав. Таны зорилго бол өрөндөө анхаарлаа төвлөрүүлэн эрчимтэйгээр өрөө бууруулан барагдуулж, эцэст нь бүх өрийг арилгах явдал юм. Яагаад? Учир нь санхүүгийн эрх чөлөөнд зөвхөн таны төлөө ажиллах маш их хөрөнгийг эзэмшсэнээр хүрэх боломжтой бөгөөд хэрэв их өртэй бол энэ нь боломжгүй! Хичээгээрэй" :
  (debtAssetCorrelation > 40) ? "Таны балансад маш их өр байна. Зээлээр хөрөнгөө худалдаж авсан тул таны хөрөнгийн ихэнх хувь нь таных биш гэсэн үг. Зээлсэн мөнгөө ирэх сар, жилүүдэд төлөх ёстой гэдэг нь өөртөө хөрөнгө оруулах мөнгө багасна гэсэн үг. Санхүүгийн эрх чөлөөнд хүрэх нь арай илүү хэцүү болно, учир нь та эхлээд банкинд өрөө төлөх ёстой. Шинэ зээл бүү ав. Таны зорилго бол өрөндөө анхаарлаа төвлөрүүлэн эрчимтэйгээр өрөө бууруулан барагдуулж, эцэст нь бүх өрийг арилгах явдал юм. Яагаад? Учир нь санхүүгийн эрх чөлөөнд зөвхөн таны төлөө ажиллах маш их хөрөнгийг эзэмшсэнээр хүрэх боломжтой бөгөөд хэрэв их өртэй бол энэ нь боломжгүй! Хичээгээрэй!" : "";

document.querySelector(".debtAssetCorrelationText").innerText = debtAssetCorrelationText;

const workerAssetText = workerAsset < 11 ? "Та ажил хийх шаардлагагүй болох үед л санхүүгийн эрх чөлөөнд хүрэх боломжтой. Гэхдээ та одоо болтол цалингаа авсаар л байна. Санхүүгийн эрх чөлөөнд хүрэх цорын ганц арга бол аль нэг компанийг эзэмших, эсвэл хадгаламж, бондод хөрөнгө оруулах эсвэл хувьцаа, бонд, хадгаламжийн багцтай болох явдал юм. Эдгээр 3-ыг идэвхгүй орлого /passive income/ гэж нэрлэдэг. Таны хөрөнгийн 10-аас бага хувь нь танд орлого бүтээж байна. Юу гэсэн үг вэ гэвэл таны дийлэнх хөрөнгө чинь үхмэл хөрөнгө гэсэн үг. Би үүгээр юу гэж хэлж байна вэ? Хэрэв та том байшин эзэмшдэг гэтэл үүндээ амьдардаг бол та түрээсийн орлогоо үгүй хийж байна гэсэн үг. Түрээсээр та орлогын эх үүсвэр бүтээх боломжтой байтал тэгэж ашиглахгүй байна. Ядаж байшингаа зараад үүнээс олсон мөнгөө хувьцаа, бондод хөрөнгө оруулан өгөөж хүртэх боломжтой байтал та тэгэхгүй байна. Энэ бол үхмэл таны төлөө ажилдаггүй хөрөнгийн тод жишээ юм. Таны зорилго бол аль болох эртхэн хөрөнгө оруулалт хийн, өөрийн хөрөнгийн 50-иас илүү хувийг амьд болгон өөрийнхөө төлөө ажлуулах явдал юм. Яагаад гэж үү зөвхөн мөнгөний төлөө ажиллахгүй, дуртай ажил аа хийхийн төлөө :)" :
  (workerAsset > 10 && workerAsset < 21) ? "Та ажил хийх шаардлагагүй болох үед л санхүүгийн эрх чөлөөнд хүрэх боломжтой. Гэхдээ та одоо болтол цалингаа авсаар л байна. Санхүүгийн эрх чөлөөнд хүрэх цорын ганц арга бол аль нэг компанийг эзэмших, хадгаламж, хөрөнгө оруулах эсвэл хувьцаа, бонд, хадгаламжийн багцтай болох явдал юм. Эдгээр 3-ыг идэвхгүй орлого /passive income/ гэж нэрлэдэг. Таны хөрөнгийн 20-иос багагүй хувь нь таны төлөө орлого бүтээж байна. Ихэнх хүмүүсийг бодвол хамаагүй дээр байна (Дийлэнх хүмүүсийн хөрөнгийн 10-аас бага хувь нь л орлогын бүтээж байдаг). Гэхдээ энэ бол хангалтгүй. Таны баялгийн ихэнх хэсгийг үхмэл хөрөнгө бүрдээлж байна. Би үүгээр юу гэж хэлж байна вэ? Хэрэв та том байшин эзэмшдэг гэтэд үүндээ амьдардаг бол та түрээсийн орлогоо үгүй хийж байна. Түрээсээр та орлогын эх үүсвэр бүтээх боломжтой байтал тэгэж ашиглахгүй байна. Ядаж байшингаа зараад үүнээс олсон мөнгөө хувьцаа, бондод хөрөнгө оруулан өгөөж хүртэх боломжтой байтал та тэгэхгүй байна. Энэ бол үхмэл таны төлөө ажилдаггүй хөрөнгийн тод жишээ юм. Таны зорилго бол аль болох эртхэн хөрөнгө оруулалт хийн, өөрийн хөрөнгийн 50-иас илүү хувийг амьд болгон өөрийнхөө төлөө ажлуулах явдал юм. Яагаад гэж үү зөвхөн мөнгөний төлөө ажиллахгүй, дуртай ажил аа хийхийн төлөө :)" :
  (workerAsset > 20 && workerAsset < 31) ? "Та ажил хийх шаардлагагүй болох үед л санхүүгийн эрх чөлөөнд хүрэх боломжтой. Гэхдээ та одоо болтол цалингаа авсаар л байна. Санхүүгийн эрх чөлөөнд хүрэх цорын ганц арга бол аль нэг компанийг эзэмших, эсвэл хадгаламж, бондод маш их мөнгө хөрөнгө оруулах, өөрөөр хувьцаа, бонд, хадгаламжийн багцтай болох явдал юм. Эдгээр 3-ыг идэвхгүй орлого /passive income/ гэж нэрлэдэг. Сайн мэдээ нь та аль хэдийн өөрийн ирээдүй рүүгээ хөрөнгө оруулаад эхлэсэн байна. Мөн таны хөрөнгө боломжийн хэмжээ нь аль эрт таны төлөө ажиллаад эхэлжээ.  Хоёулаа одоо яах хэрэгтэй вэ гэвэл таны төлөө орлого бүтээж байгаа хөрөнгө рүүгээ хөрөнгө оруулсаар байх явдал.  Таны зорилго бол аль болох эртхэн хөрөнгө оруулалт хийн, өөрийн хөрөнгийн 50-иас илүү хувийг амьд болгон өөрийнхөө төлөө ажлуулах явдал юм. Яагаад гэж үү ажиллахгүйн төлөө шүү дээ." :
  (workerAsset > 30 && workerAsset < 51) ? "Та ажил хийх шаардлагагүй болох үед л санхүүгийн эрх чөлөөнд хүрэх боломжтой. Гэхдээ та одоо болтол цалингаа авсаар л байна. Санхүүгийн эрх чөлөөнд хүрэх цорын ганц арга бол аль нэг компанийг эзэмших, эсвэл хадгаламж, бондод маш их мөнгө хөрөнгө оруулах, өөрөөр хувьцаа, бонд, хадгаламжийн багцтай болох явдал юм. Эдгээр 3-ыг идэвхгүй орлого /passive income/ гэж нэрлэдэг. Сайн мэдээ нь таны хөрөнгийн томоохон хувь нь таны төлөө ажилладаг, таныг баяжуулдаг бодит хөрөнгө бөгөөд унтаж амарч, амралтад явах үед ч өдөр шөнөгүй ажиллаж байх юм. Хоёулангийнхан хийх ёстой зүйл бол одоо байгаа хөрөнгөө өсгөж, хувьцаа, бонд, хадгаламж гэх мэт өөр төрлөөр төрөлжүүлэн эрүүл багцтай байх явдал юм. Таны зорилго яах вэ гэж үү? Хөрөнгө оруулалтаа үргэлжлүүлж, баялгаа өсгө. Хэрэв та энэ маягаар үргэлжлүүлэн хөрөнгө оруулалт хийвэл санхүүгийн эрх чөлөө маш ойрхон байна. Таны зорилго бол хөрөнгийнхөө > 50 -иас дээш хувийг амьд хөрөнгө болгон танд хүү, ногдол ашиг эсвэл үнэ цэнийн өсөлт өгөхөөр байлгах юм. Яагаад гэж үү зөвхөн мөнгөний төлөө ажиллахгүй, дуртай ажил аа хийхийн төлөө :)" :
  (workerAsset > 50) ? "Та ажил хийх шаардлагагүй болох үед л санхүүгийн эрх чөлөөнд хүрэх боломжтой. Гэхдээ та одоо болтол цалингаа авсаар л байна. Санхүүгийн эрх чөлөөнд хүрэх цорын ганц арга бол аль нэг компанийг эзэмших, эсвэл хадгаламж, бондод маш их мөнгө хөрөнгө оруулах, өөрөөр хувьцаа, бонд, хадгаламжийн багцтай болох явдал юм. Эдгээр 3-ыг идэвхгүй орлого /passive income/ гэж нэрлэдэг. Таны хөрөнгийн 50-иас илүү хувь нь орлого үйлдэрлэж байна. Энэ хөрөнгө танд хүү, ногдол ашиг, эсвэл үнэ цэнийн өсөлт өгч байна. Гайхалтай! Таны хөрөнгө таны төлөө ажиллаж, унтаж амарч байсан ч гэсэн таныг илүү баян болгосоор байна. Бидний хийх ёстой зүйл бол одоо байгаа хөрөнгөө ерөнхийд нь өсгөж, хувьцаа, бонд, хадгаламж гэх мэт өөр өөр төрлийн хөрөнгийн эрүүл багцтай байлгах явдал юм. Таны зорилго яах вэ гэж үү? Ихэнх хөрөнгөө аль болох амьд байлгаж, ашигтай байлгаарай. Үүнийгээ хийнгээ эрүүл мэнддээ анхаарч, санхүүгийн эрх чөлөөнд хүрч чадвал эд хөрөнгөө алдах эрсдэлд оруулахгүйн тулд эрүүл мэндийнхээ даатгалд хамрагдаарай. Яагаад гэж үү? Учир нь амьдрал үргэлж ажиллахад зориулагдаагүй! :)" : "";

document.querySelector(".workerAssetText").innerText = workerAssetText;

// 5 YEARS INCOMES //
document.addEventListener('DOMContentLoaded', function() {
    function calculateFutureValue(initialValue, inflationRate, years) {
        return initialValue * Math.pow(1 + inflationRate, years);
    }

    let inflationRate = 0.08; // 3% inflation
    let years = 5;

    let monthlySalary = Number(localStorage.getItem("answer6.1")) || 0; 
    let monthlyRent = Number(localStorage.getItem("answer6.2")) || 0; 
    let monthlyOtherIncome = Number(localStorage.getItem("answer6.4")) || 0; 
    let monthlyBusiness = Number(localStorage.getItem("answer6.3")) || 0; 
    let monthlyYield = Number(localStorage.getItem("answer6.5")) || 0; 

    let monthlySalary5years = calculateFutureValue(monthlySalary, inflationRate, years);
    let monthlyRent5years = calculateFutureValue(monthlyRent, inflationRate, years);
    let monthlyOtherIncome5years = calculateFutureValue(monthlyOtherIncome, inflationRate, years);
    let monthlyBusiness5years = calculateFutureValue(monthlyBusiness, inflationRate, years);
    let monthlyYield5years = calculateFutureValue(monthlyYield, inflationRate, years);

    document.querySelector(".monthlySalary5years").innerText = Math.round(monthlySalary5years);
    document.querySelector(".monthlyRent5years").innerText = Math.round(monthlyRent5years);
    document.querySelector(".monthlyOtherIncome5years").innerText = Math.round(monthlyOtherIncome5years);
    document.querySelector(".monthlyBusiness5years").innerText = Math.round(monthlyBusiness5years);
    document.querySelector(".monthlyYield5years").innerText = Math.round(monthlyYield5years);

});

// 5 YEARS EXPENSES //


function calculateExpenses5years() {
    let monthlyMortgageLoan = Number(localStorage.getItem("answer5.5")) || 0; 
    let monthlyCarLoan = Number(localStorage.getItem("answer5.10")) || 0; 
    let monthlySalaryLoan = Number(localStorage.getItem("answer5.15")) || 0; 
    let monthlyConsumerLoan = Number(localStorage.getItem("answer5.20")) || 0; 
    let monthlyOtherLoan = Number(localStorage.getItem("answer5.25")) || 0; 

    let years = 5;
    let monthsLimit = years * 12;

    let monthMortgageLoan = Number(localStorage.getItem("loanMonth1")) || 0; 
    let monthCarLoan = Number(localStorage.getItem("loanMonth2")) || 0; 
    let monthSalaryLoan = Number(localStorage.getItem("loanMonth3")) || 0; 
    let monthConsumerLoan = Number(localStorage.getItem("loanMonth4")) || 0; 
    let monthOtherLoan = Number(localStorage.getItem("loanMonth5")) || 0; 

    // Check each loan, if its duration is less than 5 years, set monthly payment to 0
    if (monthMortgageLoan <= monthsLimit) {
        monthlyMortgageLoan = 0;
    }
    if (monthCarLoan <= monthsLimit) {
        monthlyCarLoan = 0;
    }
    if (monthSalaryLoan <= monthsLimit) {
        monthlySalaryLoan = 0;
    }
    if (monthConsumerLoan <= monthsLimit) {
        monthlyConsumerLoan = 0;
    }
    if (monthOtherLoan <= monthsLimit) {
        monthlyOtherLoan = 0;
    }

    // Update the page (for mortgage loan as an example)
    document.querySelector(".monthlyMortgageLoan").innerText = monthlyMortgageLoan;
}

  
// function calculateBondCompound(PV, PMT, interest, numberOfMonths2) {
//     let PV = bondFirstBalance;
//     let PMT = ;
//     let bondInterestFinal = Number(localStorage.getItem("bondInterestFinal"));
//     let interest = (bondInterestFinal/12)/100;
//     let n = 5;
  
//     let FV = (PMT * ((1 + r) ** n - 1)) / r;
//     return FV.toFixed(0);
//   }
 
// FINANCIAL GOALS //


