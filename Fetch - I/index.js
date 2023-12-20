function saveUserData() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if (name && age) {
        const userData = {
            name: name,
            age: age
        };

        localStorage.setItem('userData', JSON.stringify(userData));
        alert('User data has been saved to Local Storage.');
    } else {
        alert('Please fill in both name and age fields.');
    }
}

function retrieveAndDisplayData() {
    const userDataString = localStorage.getItem('userData');

    if (userDataString) {
        const userData = JSON.parse(userDataString);
        const displayArea = document.getElementById('userDataDisplay');

        // Clear previous data
        displayArea.innerHTML = '';

        // Create a table to display user data
        const table = document.createElement('table');
        table.classList.add('userDataTable');

        // Create table rows
        for (const key in userData) {
            const row = table.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);

            cell1.textContent = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize the key
            cell2.textContent = userData[key];
        }

        displayArea.appendChild(table);
    } else {
        alert('No user data found in Local Storage.');
    }
}
