document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get form values
    var loginValue = document.getElementById('login').value;
    var emailValue = document.getElementById('email').value;
    var phoneValue = document.getElementById('phone').value;
    var passwordValue = document.getElementById('password').value;
  
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    
    // Configure it: POST request, endpoint, async
    xhr.open('POST', 'http://localhost:8080/insert-data', true);
    
    // Set the request header
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    // Define what happens on successful data submission
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert('Data inserted successfully');
      } else {
        alert('Failed to insert data');
      }
    };
    
    // Define what happens in case of error
    xhr.onerror = function() {
      console.error('Error submitting data');
    };
    
    // Convert data to JSON format
    var data = JSON.stringify({
      login: loginValue,
      email: emailValue,
      phone: phoneValue,
      password: passwordValue
    });
    
    // Send the request with the form data
    xhr.send(data);
  });