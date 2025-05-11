document.addEventListener('DOMContentLoaded', function() {
    // Load user data from server
    loadUserData();

    // Add event listeners
    document.getElementById('search-button').addEventListener('click', searchUsers);
    document.getElementById('search').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            searchUsers();
        }
    });

    document.getElementById('logout-button').addEventListener('click', function() {
        window.location.href = 'login.html';
    });

    // Add refresh button
    const refreshButton = document.createElement('button');
    refreshButton.textContent = 'Дахин ачаалах';
    refreshButton.id = 'refresh-button';
    refreshButton.addEventListener('click', function() {
        loadUserData();
    });
    document.querySelector('header').appendChild(refreshButton);
});

// Function to load user data from server
function loadUserData() {
    fetch('http://localhost:3000/api/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data && data.users) {
                populateTable(data.users);
            }
        })
        .catch(error => {
            console.error('Error loading user data:', error);
            // Fallback to hardcoded data
            const users = [
                {
                    personalInfo: { name: "user1", email: "user1@mail.com", phoneNumber: "99999999" },
                    expenses: { monthlyFood: "300k", yearlyEducation: "4m", monthlyRent: "500k", /* ... */ },
                    // ... бусад мэдээлэл
                },
                // ...
            ];
            populateTable(users);
        });
}

// Function to populate table from JSON data
function populateTable(users) {
    const table = document.getElementById('user-table');

    // Clear existing rows except header
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.setAttribute('data-email', user.personalInfo.email);

        // Add checkbox
        const checkboxCell = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'user-select';
        checkboxCell.appendChild(checkbox);
        row.appendChild(checkboxCell);

        // Add personal info
        addCell(row, user.personalInfo.name, 'personalInfo.name');
        addCell(row, user.personalInfo.email, 'personalInfo.email');
        addCell(row, user.personalInfo.phoneNumber, 'personalInfo.phoneNumber');
        // ... бусад талбарууд (expenses, assets, liabilities, income, investmentProfile)

        // Add action buttons
        const actionsCell = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.textContent = 'Засах';
        editButton.className = 'edit-user-btn';
        editButton.setAttribute('data-email', user.personalInfo.email);
        editButton.onclick = function() { openEditModal(user.personalInfo.email); };

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Устгах';
        deleteButton.className = 'delete-user-btn';
        deleteButton.setAttribute('data-email', user.personalInfo.email);
        deleteButton.onclick = function() { deleteUser(user.personalInfo.email); };

        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);
        row.appendChild(actionsCell);

        table.appendChild(row);
    });
}

// Helper function to add a cell to a row
function addCell(row, content, fieldName) {
    const cell = document.createElement('td');
    cell.textContent = content || '-';
    cell.setAttribute('data-field', fieldName);

    if (fieldName) {
        const editButton = document.createElement('button');
        editButton.innerHTML = '✏️';
        editButton.className = 'edit-button';
        editButton.onclick = function(e) {
            e.stopPropagation();
            editCellInline(cell, fieldName, row.getAttribute('data-email'));
        };
        cell.appendChild(editButton);
    }

    row.appendChild(cell);
    return cell;
}

// Function to edit a cell inline
function editCellInline(cell, fieldName, userEmail) {
    const currentValue = cell.textContent.trim();
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentValue === '-' ? '' : currentValue;
    const originalContent = cell.innerHTML;

    cell.innerHTML = '';
    cell.appendChild(input);
    input.focus();

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Хадгалах';
    saveButton.onclick = function() {
        saveInlineEdit(cell, input.value, fieldName, userEmail);
    };

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Цуцлах';
    cancelButton.onclick = function() {
        cell.innerHTML = originalContent;
    };

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'edit-controls';
    buttonContainer.appendChild(saveButton);
    buttonContainer.appendChild(cancelButton);
    cell.appendChild(buttonContainer);

    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            saveInlineEdit(cell, input.value, fieldName, userEmail);
        } else if (e.key === 'Escape') {
            cell.innerHTML = originalContent;
        }
    });
}

// Function to save inline edit
function saveInlineEdit(cell, newValue, fieldName, userEmail) {
    cell.textContent = newValue || '-';

    const editButton = document.createElement('button');
    editButton.innerHTML = '✏️';
    editButton.className = 'edit-button';
    editButton.onclick = function(e) {
        e.stopPropagation();
        editCellInline(cell, fieldName, userEmail);
    };
    cell.appendChild(editButton);

    // Send update to server
    fetch(`http://localhost:3000/api/users/${userEmail}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ field: fieldName, value: newValue })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Update success:', data);
    })
    .catch(error => {
        console.error('Error updating data:', error);
        alert('Мэдээлэл шинэчлэхэд алдаа гарлаа.');
    });
}

// Function to delete user
function deleteUser(email) {
    if (confirm('Энэ хэрэглэгчийг устгахдаа итгэлтэй байна уу?')) {
        fetch(`http://localhost:3000/api/users/${email}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(data => {
            console.log('Delete success:', data);
            loadUserData(); // Refresh table
        })
        .catch(error => {
            console.error('Error deleting user:', error);
            alert('Хэрэглэгч устгахад алдаа гарлаа.');
        });
    }
}

// Function to search users
function searchUsers() {
    const input = document.getElementById('search').value.toLowerCase();
    const table = document.getElementById('user-table');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let found = false;

        for (let j = 0; j < cells.length; j++) {
            const cell = cells[j];
            const text = cell.textContent;
            const lowerText = text.toLowerCase();

            if (lowerText.includes(input)) {
                found = true;
                const regex = new RegExp(`(${input})`, 'gi');
                cell.innerHTML = text.replace(regex, '<span class="highlight">$1</span>');
            } else {
                cell.innerHTML = text;
            }
        }

        rows[i].style.display = found ? '' : 'none';
    }
}