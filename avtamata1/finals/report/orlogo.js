let monthlySalary = Number(localStorage.getItem("answer6.1")) || 0; 
let formattedSalary = new Intl.NumberFormat().format(monthlySalary);

let monthlyRent = Number(localStorage.getItem("answer6.2")) || 0; 
let formattedRent = new Intl.NumberFormat().format(monthlyRent);

let monthlyBusiness = Number(localStorage.getItem("answer6.3")) || 0; 
let formattedBusiness = new Intl.NumberFormat().format(monthlyBusiness);

let monthlyOtherIncome = Number(localStorage.getItem("answer6.4")) || 0; 
let formattedOtherIncome = new Intl.NumberFormat().format(monthlyOtherIncome);

let incomeStatement = monthlySalary+monthlyRent+monthlyBusiness+monthlyOtherIncome;
let formattedincomeStatement = new Intl.NumberFormat().format(incomeStatement);

let monthlySalaryPercentage = (monthlySalary*100)/incomeStatement;
let monthlyRentPercentage = (monthlyRent*100)/incomeStatement;
let monthlyBusinessPercentage = (monthlyBusiness*100)/incomeStatement;
let monthlyOtherIncomePercentage = (monthlyOtherIncome*100)/incomeStatement;

let monthlyGrocery = Number(localStorage.getItem("answer2.1"));
let formattedmonthlyGrocery = new Intl.NumberFormat().format(monthlyGrocery);

let monthlyMaintenance = Number(localStorage.getItem("answer2.4"));
let formattedmonthlyMaintenance = new Intl.NumberFormat().format(monthlyMaintenance);

let monthlyTransportation = Number(localStorage.getItem("answer2.5"));
let formattedmonthlyTransportation = new Intl.NumberFormat().format(monthlyTransportation);

let monthlyHealth = Number(localStorage.getItem("answer2.6"));
let formattedmonthlyHealth = new Intl.NumberFormat().format(monthlyHealth);

let yearlyClothes = Number(localStorage.getItem("answer3.1"));
let monthlyClothes = yearlyClothes/12;
let formattedmonthlyClothes = new Intl.NumberFormat().format(monthlyClothes);

let monthlyEntertainment = Number(localStorage.getItem("answer3.2"));
let formattedmonthlyEntertainment = new Intl.NumberFormat().format(monthlyEntertainment);

let monthlyLuxury = Number(localStorage.getItem("answer3.3"));
let formattedmonthlyLuxury = new Intl.NumberFormat().format(monthlyLuxury);

let yearlyTravel = Number(localStorage.getItem("answer3.4"));
let monthlyTravel = yearlyTravel/12;
let formattedmonthlyTravel = new Intl.NumberFormat().format(monthlyTravel);

let monthlyPhone = Number(localStorage.getItem("answer2.7"));
let formattedmonthlyPhone = new Intl.NumberFormat().format(monthlyPhone);

let yearlyEducation = Number(localStorage.getItem("answer2.2"));
let monthlyEducation = yearlyEducation / 12;
let formattedMonthlyEducation = new Intl.NumberFormat().format(Math.round(monthlyEducation));

let monthlyRental = Number(localStorage.getItem("answer2.3"));
let formattedmonthlyRental = new Intl.NumberFormat().format(monthlyRental);

let monthlyMortgageLoan = Number(localStorage.getItem("answer5.5"));
let formattedmonthlyMortgageLoan = new Intl.NumberFormat().format(monthlyMortgageLoan);

let monthlyCarLoan = Number(localStorage.getItem("answer5.10")) || 0; 
let monthlySalaryLoan = Number(localStorage.getItem("answer5.15")) || 0; 
let monthlyConsumerLoan = Number(localStorage.getItem("answer5.20")) || 0; 
let monthlyOtherLoan = Number(localStorage.getItem("answer5.25")) || 0; 

let monthlyLoans = monthlyCarLoan+monthlySalaryLoan+monthlyConsumerLoan+monthlyOtherLoan;
let formattedmonthlyLoans = new Intl.NumberFormat().format(monthlyLoans);

let expenseStatement = monthlyGrocery+monthlyMaintenance+monthlyTransportation+monthlyHealth+monthlyClothes+monthlyEntertainment+monthlyLuxury+monthlyTravel+monthlyPhone+monthlyEducation+monthlyRental+monthlyMortgageLoan+monthlyLoans;

let monthlyGroceryPercentage = (monthlyGrocery*100)/expenseStatement;
let monthlyMaintenancePercentage = (monthlyMaintenance*100)/expenseStatement;
let monthlyTransportationPercentage = (monthlyTransportation*100)/expenseStatement;
let monthlyHealthPercentage = (monthlyHealth*100)/expenseStatement;
let monthlyClothesPercentage = (monthlyClothes*100)/expenseStatement;
let monthlyEntertainmentPercentage = (monthlyEntertainment*100)/expenseStatement;
let monthlyLuxuryPercentage = (monthlyLuxury*100)/expenseStatement;
let monthlyTravelPercentage = (monthlyTravel*100)/expenseStatement;
let monthlyPhonePercentage = (monthlyPhone*100)/expenseStatement;
let monthlyEducationPercentage = (monthlyEducation*100)/expenseStatement;
let monthlyRentalPercentage = (monthlyRental*100)/expenseStatement;
let monthlyMortgageLoanPercentage = (monthlyMortgageLoan*100)/expenseStatement;
let monthlyLoansPercentage = (monthlyLoans*100)/expenseStatement;

document.querySelector(".monthlySalary").innerText = formattedSalary;
document.querySelector(".monthlyRent").innerText = formattedRent;
document.querySelector(".monthlyBusiness").innerText = formattedBusiness;
document.querySelector(".monthlyOtherIncome").innerText = formattedOtherIncome;


window.addEventListener('load', function() {
    const data = {
      labels: ['Цалингийн орлого', 'Түрээсийн орлого', 'Бизнесийн орлого', 'Бусад'],
      datasets: [{
        data: [monthlySalary,monthlyRent,monthlyBusiness,monthlyOtherIncome],
        backgroundColor: [
          '#372776',
          '#a2c4c9',
          '#fac858',
          '#ef6666'
        ],
        hoverOffset: 4
      }]
    };
  
    const config = {
      type: 'doughnut',
      data: data,
      options: {

            plugins: {
                legend: {
                    display: false,
                },
            },
            elements: {
              arc: {
                borderWidth: 0 // removes the gap between slices
              }
            }
    },
};
    const incomeChart = new Chart(document.querySelector('.incomeChart'), config);
  });

document.querySelector(".monthlySalaryPercentage").innerText = monthlySalaryPercentage.toFixed(2);
document.querySelector(".monthlyRentPercentage").innerText = monthlyRentPercentage.toFixed(2);
document.querySelector(".monthlyBusinessPercentage").innerText = monthlyBusinessPercentage.toFixed(2);
document.querySelector(".monthlyOtherIncomePercentage").innerText = monthlyOtherIncomePercentage.toFixed(2);

// document.querySelector(".incomeStatement").innerText = formattedincomeStatement;

document.querySelector(".monthlyGrocery").innerText = formattedmonthlyGrocery;
document.querySelector(".monthlyMaintenance").innerText = formattedmonthlyMaintenance;
document.querySelector(".monthlyTransportation").innerText = formattedmonthlyTransportation;
document.querySelector(".monthlyHealth").innerText = formattedmonthlyHealth;
document.querySelector(".monthlyClothes").innerText = formattedmonthlyClothes;
document.querySelector(".monthlyEntertainment").innerText = formattedmonthlyEntertainment;
document.querySelector(".monthlyLuxury").innerText = formattedmonthlyLuxury;
document.querySelector(".monthlyTravel").innerText = formattedmonthlyTravel;
document.querySelector(".monthlyPhone").innerText = formattedmonthlyPhone;
document.querySelector(".monthlyEducation").innerText = formattedMonthlyEducation;
document.querySelector(".monthlyRental").innerText = formattedmonthlyRental;
document.querySelector(".monthlyMortgageLoan").innerText = formattedmonthlyMortgageLoan;
document.querySelector(".monthlyLoans").innerText = formattedmonthlyLoans;




window.addEventListener('load', function() {
    const data = {
      labels: ['Хоол хүнс', 'Тог, ус, цахилгаан, СӨХ', 'Унаа, тээврийн зардал', 'Эрүүл мэнд', 'Хувцас, гоёл, эдлэл', 'Энтертайнмент, зугаа цэнгэл', 'Бага зэрэг тансаглал', 'Амралт, зугаалга', 'Бусад зардал', 'Хүүхдийн боловсрол', 'Орон сууцны түрээс', 'Ипотекийн зээл', 'Бусад зээл'],
      datasets: [{
        data: [monthlyGrocery,monthlyMaintenance,monthlyTransportation,monthlyHealth,monthlyClothes,monthlyEntertainment,monthlyLuxury,monthlyTravel,monthlyPhone,monthlyEducation,monthlyRental,monthlyMortgageLoan,monthlyLoans],
        backgroundColor: [
          '#372776',
          '#545091',
          '#6054af',
          '#674ea7',
          '#948bc8',
          '#b2a9d5',
          '#bbaacf',
          '#f4cccc',
          '#ea9999',
          '#ef6666',
          '#45818e',
          '#c0d7d2',
          '#f8cbad',
        ],
        hoverOffset: 4
      }]
    };
  
    const config = {
      type: 'doughnut',
      data: data,
      options: {

            plugins: {
                legend: {
                    display: false,
                },
            },
            elements: {
              arc: {
                borderWidth: 0 // removes the gap between slices
              }
            }
    },
};
    const expenseChart = new Chart(document.querySelector('.expenseChart'), config);
  });

document.querySelector(".monthlyGroceryPercentage").innerText = monthlyGroceryPercentage.toFixed(2);
document.querySelector(".monthlyMaintenancePercentage").innerText = monthlyMaintenancePercentage.toFixed(2);
document.querySelector(".monthlyTransportationPercentage").innerText = monthlyTransportationPercentage.toFixed(2);
document.querySelector(".monthlyHealthPercentage").innerText = monthlyHealthPercentage.toFixed(2);
document.querySelector(".monthlyClothesPercentage").innerText = monthlyClothesPercentage.toFixed(2);
document.querySelector(".monthlyEntertainmentPercentage").innerText = monthlyEntertainmentPercentage.toFixed(2);
document.querySelector(".monthlyLuxuryPercentage").innerText = monthlyLuxuryPercentage.toFixed(2);
document.querySelector(".monthlyTravelPercentage").innerText = monthlyTravelPercentage.toFixed(2);
document.querySelector(".monthlyPhonePercentage").innerText = monthlyPhonePercentage.toFixed(2);
document.querySelector(".monthlyEducationPercentage").innerText = monthlyEducationPercentage.toFixed(2);
document.querySelector(".monthlyRentalPercentage").innerText = monthlyRentalPercentage.toFixed(2);
document.querySelector(".monthlyMortgageLoanPercentage").innerText = monthlyMortgageLoanPercentage.toFixed(2);
document.querySelector(".monthlyLoansPercentage").innerText = monthlyLoansPercentage.toFixed(2);

let formattedexpenseStatement = new Intl.NumberFormat().format(Math.round(expenseStatement));
// document.querySelector(".expenseStatement").innerText = formattedexpenseStatement;

let expense2 = Number(localStorage.getItem("expense2"));
let expense3 = Number(localStorage.getItem("expense3"));
let expense5 = Number(localStorage.getItem("expense5"));

let formattedexpense5 = new Intl.NumberFormat().format(Math.round(expense5));
document.querySelector(".expense5").innerText = formattedexpense5;

let otherExpense = monthlyGrocery+monthlyMaintenance+monthlyTransportation+monthlyHealth+monthlyClothes+monthlyEntertainment+monthlyLuxury+monthlyTravel+monthlyPhone+monthlyEducation+monthlyRental;
let totalExpense = expense2+expense3+expense5;

let formattedOtherExpense = new Intl.NumberFormat().format(Math.round(otherExpense));
document.querySelector(".otherExpense").innerText = formattedOtherExpense;

window.addEventListener('load', function() {
    const data = {
      labels: ['Зээл төлөлт', 'Үндсэн зардал'],
      datasets: [{
        data: [expense5,otherExpense],
        backgroundColor: [
          '#372776',
          '#a2c4c9',
        ],
        hoverOffset: 4
      }]
    };
  
    const config = {
      type: 'bar',
      data: data,
      options: {
        indexAxis: 'y', // horizontal bar
        plugins: {
            
          legend: {
            display: false,
          },
          datalabels: {
            // anchor: 'start',  // stick to the start (left side)
            // align: 'start',   // align text to the left
            color: '#fff',    // text color (black)
            formatter: function(value) {
              return '₮ ' + value.toLocaleString(); // format with commas
            },
            font: {
              weight: 'bold',
              size: 12,

            },
            padding: {
                left: 10 // push it inside
              }
          },
        },
        scales: {
          x: {
            ticks: {
              callback: function(value) {
                if (value === 0) return '₮ 0';
                if (value === 1000000) return '₮ 1,000,000';
                if (value === 2000000) return '₮ 2,000,000';
                return ''; // hide other numbers
              },
            },
            min: 0,
            max: 2000000, // so the axis stretches to 2M
          },
        },
      },    
        
};
    const expenseBarChart = new Chart(document.querySelector('.expenseBarChart'), config);
  });

let saving = incomeStatement-totalExpense;
let disposableIncome = (saving/incomeStatement);

let savingIncomeCorrelation = disposableIncome*100;
document.querySelector(".savingIncomeCorrelation").innerText = savingIncomeCorrelation.toFixed(2);

const savingIncomeCorrelationText = savingIncomeCorrelation < 11 ? "Бидэнд маш том асуудал байна. Таны бүх орлого зардал болон гарч байна. Энэ нь дараах үр дагавартай: Сарын эцэст танд ямар ч хөрөнгө оруулах мөнгө үлдэхгүй. Та хөрөнгө оруулалт хийхгүй бол таны төлөө ажиллаж чадах хөрөнгө өө бүтээхгүй. Ингэснээр та өөрт ашигтай зүйлсд (таны төлөө унтаж байхад чинь ч ажиллах хөрөнгө)  хөрөнгө оруулахгүйгээр санхүүгийн эрх чөлөөнд хэзээ ч хүрэхгүй. Таны хийх ёстой хамгийн эхний алхам бол  \n\n a) Зардлаа дор хаяж 10-15% бууруулах. Бараг бүх хүн үүнийг хийж чадна. \n b) Орлогоо нэмэгдүүлэх арга зам олох. \n\nЖишээ нь: Сарынхаа цалинг хэрхэн нэмэгдүүлэх, эсвэл амралтын өдрүүдэд нэмэлт цагаар ажиллах талаар даргатайгаа ярилц. Та өөрийгөө компани гээд төсөөлчих. Яг одоо та 0% -ийн ашигтай компани гэсэн үг. Та өөрийнхөө одоогийн хувьцааг худалдаж авах уу? Бараг л үгүй байх. Тиймээс таныг маш их ажил хүлээж байна!" :
  (savingIncomeCorrelation > 10 && savingIncomeCorrelation < 21) ? "Та орлогынхоо маш бага хувийг хуримтлуулах боломжтой байна. Хадгаламж, хөрөнгө оруулалт хийх нь илүү сайхан ирээдүйн төлөө өнөөдрийг золиослох явдал юм. Хөрөнгө оруулалтын хамгийн сайхан нь нийлмэл өгөөж бий болох юм. Та өнөөдөр хичнээн их золиос гаргаж, хөрөнгө оруулалт хийнэ төдий хэмжээгээр ээ ирээдүйд илүү их өгөөж авах болно. Илүү ихээр, урт хугацаанд хөрөнгө оруулалт хийх тусам та илүү хурдан санхгүүгийн эрх чөлөөнд хүрэх боломжтой. \n\n Гэвч одоогийн орлогоосоо ийм бага хэмжээний мөнгийг хэмнэх нь хангалтгүй. Өнөөдрийн зардлыг тань хангах хөрөнгө оруулалтын багцыг бүрдүүлэхэд 10 гаруй жил шаардагдана. 10 жил гэдэг бол маш урт хугацаа! Таны хийх ёстой хамгийн эхний алхам бол a) Зардлаа дор хаяж 10%-иар бууруулах. Бараг бүх хүн үүнийг хийж чадна. b) Орлогоо нэмэгдүүлэх арга зам олох. Жишээ нь: Сарынхаа цалинг хэрхэн нэмэгдүүлэх, эсвэл амралтын өдрүүдэд нэмэлт цагаар ажиллах талаар даргатайгаа ярилц. Та өөрийгөө компани гээд төсөөлчих. Яг одоо та бараг ашиг олдоггүй компани юм.  Та өөрийнхөө одоогийн хувьцааг худалдаж авах уу? Бараг л үгүй байх. Тиймээс таныг маш их ажил хүлээж байна!" :
  (savingIncomeCorrelation > 20 && savingIncomeCorrelation < 31) ? "Юуны өмнө танд баяр хүргэе! Монголд орлогынхоо 20 -иос дээш хувийг хэмнэх боломжтой, сахилга баттай хүн маш цөөхөн байдаг. Та маш мундаг байна. Гэхдээ хоёулаа илүү сайн болж чадна гэж би бодож байна. Орлогынхоо 35 хувийг сар бүр хадгалж, хөрөнгө оруулалт хийснээр та ойролцоогоор 6  жилийн дотор санхүүгийн эрх чөлөөнд хүрнэ гэсэн үг юм. Энэ нь урт хугацаа хэвээр байна. Үүнийг 5 -аас доош болгох арга замыг хайж үзье! Таны хийх ёстой хамгийн эхний алхам бол \n\na) Зардлаа дор хаяж 10%-иар бууруулах. Бараг бүх хүн үүнийг хийж чадна. \nb) Орлогоо нэмэгдүүлэх арга зам олох. Жишээ нь: Сарынхаа цалинг хэрхэн нэмэгдүүлэх, эсвэл амралтын өдрүүдэд нэмэлт цагаар ажиллах талаар даргатайгаа ярилц. Өөрийгөө компани гэж төсөөлөөд үз дээ. Яг одоо та боломжийн сайн ашигтай компани юм.  Гэхдээ таны эргэн тойронд илүү ашигтай ажилладаг компаниуд байгаа. Та хэдий сайн байгаа ч илүү сайжрах боломж байсаар байна." :
  (savingIncomeCorrelation > 30 && savingIncomeCorrelation < 41) ? "Юуны өмнө танд баяр хүргэе! Монголд орлогынхоо 30-аас дээш хувийг хэмнэх боломж, сахилга баттай хүн маш цөөхөн байдаг. Та аль хэдийнээ маш сайн ажиллаж байна. Санхүүгийн эрх чөлөө таны хувьд маш боломжтой. Гэхдээ хоёулаа санхүүгийн эрх чөлөөнд хүрэх хугацаагаа 6 жилээс 4 жил хүртэл богиносгож чадна гэж би бодож байна! Гайхалтай биш гэж үү? Өөрийгөө компани гэж төсөөлөөд үз дээ. Таны сарын ашгийн хэмжээ > 31%, энэ бол маш сайн. \n\n Гэсэн хэдий ч би таныг орлогоо 10-15% -иар нэмэгдүүлэх, эсвэл одоогийн зардлаасаа 10% -ийг хэмнэх арга замыг хайж олоосой гэж хүсч байна. Ингэснээр хоёулаа 40%-аас дээш хэмжээгээр хөрөнгө оруулалт хийх боломж бүрдэнэ. Жинхэнэ ид шид эндээс эхэлнэ! Юутай ч ингээд таны хийх ажил бол одоо энэ хөрөнгө оруулалтын хувийг аль болох өндөр байлгах явдал юм. Учир нь та хэдэн жилийн дараа санхүүгийн эрх чөлөөнд хүрэх баталгаатай замаар явж байна. Эрүүл мэнддээ анхаарч, одоогийн байр суурь, орлогын хэмжээгээ хадгалахын тулд чадах бүхнээ хийгээрэй. Мундаг байна шүү!" :
  (savingIncomeCorrelation > 40) ? "Гайхалтай! Өөрийгөө компани гэж төсөөлөөд үз дээ. Та бол сард 40 -өөс дээш хувийн ашигтай ажилладаг компани юм. Таны адил зарлагаа хяналтандаа байлгаж чаддаг хувь хүн тун цөөн. Ихэвчлэн хүмүүс цалингаа нэмэгдмэгц зардлаа мөн нэмэгдүүлдэг. Таны даалгавар бол энэ хөрөнгө оруулалтын хувийг аль болох өндөр байлгах явдал юм. Учир нь та хэдэн жилийн дараа санхүүгийн эрх чөлөөнд хүрэх баталгаатай замаар явж байна. \n\n Хэдийгээр та 5 жилийн дотор санхүүгийн эрх чөлөөнд хүрэх баталгаатай замаар явж байгаа ч гэсэн илүү хөрөнгө оруулалт хийх арга зам хайх нь буруутахгүй. Миний танд тавих сорилт юу вэ гэж үү? Ахиад зардлынхаа 5-10% -ийг хэмнэж, орлогоо 10% -иар нэмэгдүүлэх арга замыг эрэлхийл, тэгвэл та нэмээд орлогынхоо 10 хувийг хөрөнгө оруулах боломжтой болно. \n\nХэрэв та энэ их мөнгийг хэмнэж, хөрөнгө оруулбал амьдрал тань гайхамшигтай болох болно! Эрүүл мэндээ анхаарч, одоогийн байр суурь, орлогын түвшингөө хадгалахын тулд чадах бүхнээ хийгээрэй. Мундаг байна шүү!": "";

document.querySelector(".savingIncomeCorrelationText").innerText = savingIncomeCorrelationText;
  
let debtIncomeCorrelation = (expense5/incomeStatement)*100;
document.querySelector(".debtIncomeCorrelation").innerText = debtIncomeCorrelation.toFixed(2);

const debtIncomeCorrelationText = debtIncomeCorrelation < 1 ? "Гайхалтай! Та ямар ч өр төлбөргүй байна. Хэрэглээ, машин болон цалингийн зээл нь биднийг ядуу байдалд хүлдэг гол зүйл бөгөөд та ийм өрнөөс хол байж чадсан байна. Энэ байдлаараа байгаарай! Амьдралын нөхцөлөө сайжруулахын тулд орон сууц худалдан авах гэх мэт материаллаг байдлаар таны амьдралын чанарыг үнэхээр дээшлүүлэх боломжтой үед л зээл аваарай. \n\nГэхдээ 1-2 хон жилийг золиослоод, галзуу юм шиг хөрөнгө оруулалт хийчээд, дараа нь үнэтэй гэж бодож байсан зүйлс тань хямд мэт санагдах хүртэл хөрөнгөө өсөхийг харах нь хамгийн зөв сонголт юм." :
  (debtIncomeCorrelation > 0 && debtIncomeCorrelation < 21) ? "Сайн байна. Таны өр маш бага байна. Хэрэглээ, машин болон цалингийн зээл нь биднийг ядуу байдалд хүлдэг гол зүйл юм. Таны өр хийгээд зээлийн хүү орлогыг тань бодвол хамаагүй бага байгаа нь сайн хэрэг. Гэхдээ ингээд боддоо, энэ мөнгөө банкинд биш, өөртөө төлөх боломж байгаа гээд. Тэдэнд өөрийн орлогынхоо 10%-ийг тогтмол төлснөөс өрөө дарж дуусгаад өөрийн ирээдүй рүүгээ хөрөнгө оруулах хэрэгтэй шүү. \n\nАмьдралын нөхцөлөө сайжруулахын тулд орон сууц худалдан авах гэх мэт материаллаг байдлаар таны амьдралын чанарыг үнэхээр дээшлүүлэх боломжтой үед л зээл аваарай. Үүнийг мартаж болохгүй шүү. Гэхдээ 1-2 хон жилийг золиослоод, галзуу юм шиг хөрөнгө оруулалт хийчээд, дараа нь үнэтэй гэж бодож байсан зүйлс тань хямд мэт санагдах хүртэл хөрөнгөө өсөхийг харах нь хамгийн зөв сонголт юм." :
  (debtIncomeCorrelation > 20 && debtIncomeCorrelation < 41) ? "Таны орлогын хэтэрхий их хувь нь өр болон зээл рүү урсаад байна. Хэрэглээ, машин болон цалингийн зээл нь биднийг ядуу байдалд хүлдэг гол зүйл юм. Таны энэ өр, зээл бол өөр хэн нэгний орлого гэсэн үг. Хэн нэгэн мөнгөө танд хөрөнгө оруулалт хэлбэрээр зээл олгосон гэж ойлгож болно. Тиймээс та тэдэнд сар бүр хүү төлж байна. Таны зорилго бол өөр хүнд төлөхийн оронд өөртөө мөнгө төлж эхлэх явдал байх ёстой. \n\nҮүнд хүрэх хамгийн сайн арга бол сарын цалинтай харьцуулахад бага ч гэсэн яг одооноос л хөрөнгө оруулалт хийж эхлэх. Мөн зээлээ аль болох хурдан төлөхөд анхаарлаа хандуулах явдал юм. Өргүй болсон даруйд санхүүгийн эрх чөлөөнд хүрэх томоохон алхамуудыг хийж эхлэх боломжой болно. Амьдралын нөхцөлөө сайжруулахын тулд орон сууц худалдан авах гэх мэт материаллаг байдлаар таны амьдралын чанарыг үнэхээр дээшлүүлэх боломжтой үед л зээл аваарай. Үүнийг мартаж болохгүй шүү. Гэхдээ 1-2 хон жилийг золиослоод, галзуу юм шиг хөрөнгө оруулалт хийчээд, дараа нь үнэтэй гэж бодож байсан зүйлс тань хямд мэт санагдах хүртэл хөрөнгөө өсөхийг харах нь хамгийн зөв сонголт юм." :
  (debtIncomeCorrelation > 40) ? "Таны орлогын хэт их хувь нь хүү, өрийн төлбөрт урсаж байна. Таны орлогын талаас илүү хувь нь өөр хүний орлого болж байна! Хэрэглээ, машин болон цалингийн зээл нь биднийг ядуу байдалд хүлдэг гол зүйл гэдгийг санаарай. Танд байгаа өр бол үндсэндээ өөр хэн нэгний хөрөнгө юм. Хэн нэгэн мөнгөө танд хөрөнгө оруулалт хэлбэрээр зээл олгосон гэж ойлгож болно. Тиймээс та түүнд сар бүр хүү төлж байна. Таны зорилго бол өөр хүнд мөнгөө төлөхийн оронд өөртөө мөнгө төлж эхлэх явдал юм. \n\nТаны эхний алхам бол хамгийн бага өр төлбөрөөс эхлэн аль болох хурдан төлж эхлэх. Хамгийн бага өрнөөс эхэлснээр үлдсэн өрнүүдээ төлж дуусгахад хялбар байх болно. Бүх өр зээлээ барагдуулсны дараа та амжилтад хүрсэн мэт гайхалтай мэдрэгдэнэ. Өргүй болсон даруйд санхүүгийн эрх чөлөөнд хүрэх томоохон алхамуудыг хийж эхлэх боломжой болно. Амьдралын нөхцөлөө сайжруулахын тулд орон сууц худалдан авах гэх мэт материаллаг байдлаар таны амьдралын чанарыг үнэхээр дээшлүүлэх боломжтой үед л зээл аваарай. Үүнийг мартаж болохгүй шүү. Гэхдээ 1-2 хон жилийг золиослоод, галзуу юм шиг хөрөнгө оруулалт хийчээд, дараа нь үнэтэй гэж бодож байсан зүйлс тань хямд мэт санагдах хүртэл хөрөнгөө өсөхийг харах нь хамгийн зөв сонголт юм." : "";

document.querySelector(".debtIncomeCorrelationText").innerText = debtIncomeCorrelationText;

window.addEventListener('load', function() {
  const data = {
    labels: ['Зээл төлөлт', 'Үндсэн зардал', 'Хуримтлал'],
    datasets: [{
      data: [expense5,otherExpense,saving],
      backgroundColor: [
        '#d1e0e4',
        '#382579',
        '#9189c2',
      ],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
    options: {

          plugins: {
              legend: {
                  display: false,
              },
          },
          elements: {
            arc: {
              borderWidth: 0 // removes the gap between slices
            }
          }
  },
};
  const expenseChart = new Chart(document.querySelector('.expenseChart2'), config);
});

window.addEventListener('load', function() {
  const data = {
    labels: ['Зардал', 'Хуримтлал'],
    datasets: [{
      data: [expenseStatement,saving],
      backgroundColor: [
        '#382579',
        '#9189c2',
      ],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
    options: {

          plugins: {
              legend: {
                  display: false,
              },
          },
          elements: {
            arc: {
              borderWidth: 0 // removes the gap between slices
            }
          }
  },
};
  const expenseChart = new Chart(document.querySelector('.savingChart'), config);
});

window.addEventListener('load', function() {
  const data = {
    labels: ['Бусад', 'Зээл төлөлт'],
    datasets: [{
      data: [expense5, incomeStatement],
      backgroundColor: [
        '#382579',
        '#9189c2',
      ],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
    options: {

          plugins: {
              legend: {
                  display: false,
              },
          },
          elements: {
            arc: {
              borderWidth: 0 // removes the gap between slices
            }
          }
  },
};
  const expenseChart = new Chart(document.querySelector('.debtChart'), config);
});

let elements1 = document.querySelectorAll(".incomeStatement");  
elements1.forEach(function (element) {
    element.innerText = formattedincomeStatement;
});

let elements2 = document.querySelectorAll(".expenseStatement");
elements2.forEach(function (element) {
    element.innerText = formattedexpenseStatement;
});

