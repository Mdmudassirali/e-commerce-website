function validate() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(u => u.username === username && u.password === password);
    
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        alert ("Login successfully");
        window.location = "./newhome.html";
    } else {
        alert ("Invalid username or password.")
    }
}

function register() {
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find(u => u.username === username)) {
        alert ("Username already taken.");
    } else {
        users.push({ username, password }); 
        localStorage.setItem('users', JSON.stringify(users));
        window.location = "./success.html";
    }
}