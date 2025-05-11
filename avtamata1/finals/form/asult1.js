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

  // Save the form data to local storage
  localStorage.setItem('formAnswers', JSON.stringify(formData));

  // Optionally, you can log it to the console to check
  console.log("Form data saved to local storage:", formData);
}
