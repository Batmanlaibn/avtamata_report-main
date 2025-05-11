const users = [
  ["user1", "user1@mail.com", "99999999", "300k", "4m", "500k", "100k", "50k", "70k", "100k", "1m", "50k", "70k", "3m", "Тийм", "Үгүй", "Япон", "Тамир", "Бусад", "Орон сууц", "Зуслан", "Tesla", "10m", "NFT", "50m", "2m", "20m", "5m", "3m", "7m", "5m", "2m", "Байхгүй", "1m", "2m", "Тийм", "10 жил", "16", "Анхан шат", "10%", "5%", "Хувьцаа унах", "Хүлээцтэй"],
  ["user2", "user2@mail.com", "88888888", "400k", "3m", "600k", "150k", "70k", "60k", "90k", "2m", "80k", "60k", "2m", "Үгүй", "Тийм", "Франц", "Зурах", "Гэр бүл", "Орон сууц", "Байшин", "Prius", "12m", "Crypto", "60m", "2.5m", "15m", "6m", "4m", "6m", "5m", "2.5m", "Байхгүй", "1.5m", "3m", "Тийм", "5 жил", "20", "Дунд шат", "15%", "10%", "Эрсдэл", "Сандарна"]
];

// HTML table-д мөр нэмэх
const table = document.getElementById("user-table"); // Corrected the id to match the HTML

users.forEach(userData => {
  const row = document.createElement("tr");
  userData.forEach(cellData => {
    const td = document.createElement("td");
    td.textContent = cellData;
    row.appendChild(td);
  });
  table.appendChild(row);
});
// Searching function
function searchUsers() {
  const input = document.getElementById("search").value.toLowerCase();
  const rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) { // Start from 1 to skip the header row
    const cells = rows[i].getElementsByTagName("td");
    let found = false;

    for (let j = 0; j < cells.length; j++) {
      const cell = cells[j];
      const text = cell.textContent;
      const lowerText = text.toLowerCase();

      if (lowerText.includes(input)) {
        found = true;
        const regex = new RegExp(`(${input})`, "gi");
        cell.innerHTML = text.replace(regex, '<span class="highlight">$1</span>');
      } else {
        cell.innerHTML = text; // Reset if no match
      }
    }

    rows[i].style.display = found ? "" : "none";
  }
}

// Add event listener to the search button
document.getElementById("search-button").addEventListener("click", searchUsers);