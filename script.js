document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio site loaded successfully!");

    // Smooth scrolling for navigation links (only on the home page)
    if (document.body.classList.contains("home-bg")) {
        document.querySelectorAll('nav ul li a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    e.preventDefault();
                    window.scrollTo({
                        top: targetElement.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            });
        });
    }

    // Lazy load images
    document.querySelectorAll('img').forEach(img => img.setAttribute("loading", "lazy"));

    // Responsive navbar toggle (for mobile)
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector("nav ul");

    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Dark/Light Mode toggle
    const themeToggle = document.querySelector(".theme-toggle");

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        themeToggle.innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });
});
document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'submit.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function() {
        if (xhr.status == 200) {
            document.getElementById('result').innerHTML = 'Data submitted successfully!';
        } else {
            document.getElementById('result').innerHTML = 'An error occurred!';
        }
    };

    xhr.send('name=' + name + '&email=' + email);  // Send form data to PHP
});
