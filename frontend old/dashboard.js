const token = localStorage.getItem("access_token");

if (!token) {
    window.location.href = "login.html";
}

fetch("http://127.0.0.1:8000/users/me", {
    method: "GET",
    headers: {
        "Authorization": "Bearer " + token
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error("Unauthorized");
    }
    return response.json();
})
.then(user => {

    document.getElementById("userDetails").innerHTML = `
        <p><strong>ID:</strong> ${user.id}</p>
        <p><strong>Name:</strong> ${user.full_name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Role:</strong> ${user.role}</p>
        <p><strong>Active:</strong> ${user.is_active}</p>
    `;

})
.catch(error => {
    console.error(error);
    localStorage.removeItem("access_token");
    window.location.href = "login.html";
});

function logout() {
    localStorage.removeItem("access_token");
    window.location.href = "login.html";
}