document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("name");
    const saveBtn = document.getElementById("save-btn");
    const greetingDiv = document.getElementById("greeting");

    // Load name from local storage if available
    const savedName = localStorage.getItem("name");
    if (savedName) {
        greetingDiv.textContent = `Hello, ${savedName}!`;
    }

    // Event listener for Save button
    saveBtn.addEventListener("click", function() {
        const name = nameInput.value.trim();

        if (name !== "") {
            localStorage.setItem("name", name);
            greetingDiv.textContent = `Hello, ${name}!`;
            nameInput.value = "";
        } else {
            alert("Please enter your name.");
        }
    });
});
