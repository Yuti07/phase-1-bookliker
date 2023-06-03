document.addEventListener("DOMContentLoaded", function() {});
// Function to update the DOM with fetched data
function updateDOMWithData(data) {
    // Access the DOM element where you want to display the data
    const element = document.getElementById('dataElement');

    // Update the inner HTML of the element with the fetched data
    element.innerHTML = data;
  }

  // Make a GET request to the API
  fetch('https://api.example.com/data', {
    method: 'GET',
  })
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
      // Call the function to update the DOM with the fetched data
      updateDOMWithData(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
// Add event listener to a button
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  // Update the DOM with new data
  fetch('https://api.example.com/data', {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {
      updateDOMWithData(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
// Data to be sent in the PATCH request
const newData = {
    property1: 'new value 1',
    property2: 'new value 2',
  };

  // Make a PATCH request to the API
  fetch('https://api.example.com/data', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newData), // Convert data to JSON string
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response if needed
    })
    .catch(error => {
      console.error('Error:', error);
    });
