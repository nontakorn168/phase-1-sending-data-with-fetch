function submitData(name, email) {
    // Making a POST request to the specified URL
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ name: name, email: email })
    })
    .then(response => response.json()) // Parsing the JSON from the response
    .then(data => {
        // Accessing the new object and appending the ID to the DOM
        const idElement = document.createElement('p');
        idElement.textContent = `New ID: ${data.id}`;
        document.body.appendChild(idElement);
    })
    .catch(error => {
        // Handling errors and appending the error message to the DOM
        const errorMessage = document.createElement('p');
        errorMessage.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorMessage);
    });
}
