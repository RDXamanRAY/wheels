document.getElementById('myform').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 

    if(username ==="" || email === "" || password === ""){
        alert("Please enter all the fields");
    }else if(!emailPattern.test(email)){
        alert("Enter a vaild email address like xyz09@gmail.com");
    }else if (password.length < 6 || password.length > 8) {
        alert("Password must be between 6 and 8 characters long");
    }else{
        alert("Logged in successfully");
        window.location.href = "main.html"
    }
});