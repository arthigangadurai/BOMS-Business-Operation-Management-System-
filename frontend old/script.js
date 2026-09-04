const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const formData = new URLSearchParams();

    formData.append("username", email);
    formData.append("password", password);

    try {
        const response = await fetch("http://127.0.0.1:8000/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formData
        });

        const data = await response.json();

        if (response.ok) {

            // Save JWT token
            localStorage.setItem("access_token", data.access_token);

            message.textContent = "Login successful!";

            console.log("Access Token:", data.access_token);

            // Go to dashboard
            window.location.href = "dashboard.html";

        } else {
            message.textContent = data.detail || "Login failed";
        }

    } catch (error) {
        console.error(error);
        message.textContent = "Cannot connect to the server.";
    }
});
