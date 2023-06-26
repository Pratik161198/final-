// Sample user data with activities
var users = [
    {
        username: "admin",
        password: "password",
        name: "Vishal Chavan",
        activities: [
            "Task 1: Review project proposal",
            "Task 2: Prepare presentation",
            "Task 3: Schedule meeting"
        ]
    },
    {
        username: "user1",
        password: "pass123",
        name: "Jane Smith",
        activities: [
            "Task 1: Complete market research",
            "Task 2: Update financial records",
            "Task 3: Attend client meeting"
        ]
    }
];

// Handle form submission
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform login authentication
    var user = users.find(function(user) {
        return user.username === username && user.password === password;
    });

    if (user) {
        // Successful login, display home page
        document.getElementById("welcome-message").textContent = "Welcome, " + user.name +
