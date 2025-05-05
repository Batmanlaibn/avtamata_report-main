document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle");
    const subMenu = document.querySelector(".sub-menu");

    toggleButton.addEventListener("click", function () {
        subMenu.classList.toggle("active"); // active классыг нэмж/хасна
    });
});
const ctx = document.getElementById('investmentChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: [0, 5, 10, 15, 20, 25, 30],
        datasets: [{
            label: 'Хуримтлуулсан мөнгө',
            data: [0, 1000000000, 3500000000, 9800000000, 26000000000, 70000000000, 172000000000],
            borderColor: 'blue',
            fill: false
        }, {
            label: 'Өсөлт',
            data: [0, 1200000000, 4800000000, 15000000000, 40000000000, 90000000000, 210000000000],
            borderColor: 'green',
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle");
    const subMenu = document.querySelector(".sub-menu");

    toggleButton.addEventListener("click", function () {
        subMenu.classList.toggle("active"); // active классыг нэмж/хасна
    });
});