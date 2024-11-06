document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");
    const usernameInput = document.getElementById("username");
    const errorMessage = document.getElementById("errorMessage");

    // Toggle password visibility
    togglePassword.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.innerHTML = '<i class="fas fa-eye-slash"></i>';
        } else {
            passwordInput.type = "password";
            togglePassword.innerHTML = '<i class="fas fa-eye"></i>';
        }
    });

    // Username validation for "@" symbol
    usernameInput.addEventListener("input", () => {
        if (!usernameInput.value.includes("@")) {
            errorMessage.textContent = "Username must contain an '@' symbol.";
        } else {
            errorMessage.textContent = "";
        }
    });

    // Generate a simple captcha
    const captchaCode = document.getElementById("captchaCode");
    const refreshCaptcha = document.getElementById("refreshCaptcha");
    function generateCaptcha() {
        const captcha = Math.random().toString(36).substring(2, 8).toUpperCase();
        captchaCode.textContent = captcha;
    }
    generateCaptcha();

    refreshCaptcha.addEventListener("click", generateCaptcha);

    // Handle form submission
    document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault();
        if (!usernameInput.value.includes("@")) {
            errorMessage.textContent = "Username must contain an '@' symbol.";
            return;
        }
        errorMessage.textContent = "";
        alert("Form submitted successfully!");
    });
});
