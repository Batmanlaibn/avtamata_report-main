function saveAllAnswers() {
  // Get the form data
  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  const phoneNumber = document.getElementById('utas_dugar').value;

  // Create an object to store the answers
  const formData = {
      email: email,
      name: name,
      phoneNumber: phoneNumber
  };

const fs = require('fs');

let myObj = { name: "Chris", age: 38 };

// Convert the object to a JSON string
let jsonData = JSON.stringify(myObj, null, 2); // `null, 2` formats the JSON

// Write the JSON string to a file
fs.writeFile('../../zmanlai_huseeld/data.json', jsonData, (err) => {
  if (err) throw err;
  console.log('Data written to data.json');
});
}

async function handleContinue() {
  await saveAllAnswers(); // wait for save
  window.location.href = "asult2.html"; // go to next page
}

async function saveAllAnswers() {
  const formData = {
    email: document.getElementById('email').value,
    name: document.getElementById('name').value,
    phoneNumber: document.getElementById('utas_dugar').value
  };

  const jsonData = JSON.stringify(formData, null, 2);
  const blob = new Blob([jsonData], { type: 'application/json' });

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'data.json';

  // Wait until file download is triggered
  a.click();
  URL.revokeObjectURL(url);
}