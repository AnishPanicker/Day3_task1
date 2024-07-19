document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Get the values of the input fields
    const userid = document.getElementById('userid').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    // Define a regular expression for password validation
    const passwordcheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    
    // Check if the password matches the regex
    if (passwordcheck.test(password)) {
        message.textContent = 'Login successful!';
        message.style.color = 'green'; 
        window.location.href = 'file:///C:/Users/hp%201/OneDrive/Desktop/clay/clay2/css/index.html';
        
    } else {
        message.style.color = 'red'; 
        message.textContent = 'Password must include uppercase, lowercase letters,sepcial char and numbers, and be at least 8 characters long.';
    }
});
