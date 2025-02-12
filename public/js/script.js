// js for popover
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

// form validation
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();




    const themeToggle = document.getElementById("theme-toggle"); // Targeting the button
    const rootElement = document.documentElement;

    // Function to set the theme
    function setTheme(mode) {
        rootElement.setAttribute("data-bs-theme", mode);
        localStorage.setItem("theme", mode);
    }

    // Check for saved theme, or default to "light"
    const savedTheme = localStorage.getItem("theme");

    // If savedTheme exists, apply it, else set default to "light"
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme("light");
    }

    // Set the button's icon based on the saved theme
    if (savedTheme === "dark") {
        themeToggle.innerHTML = "🌙"; // Dark mode icon
    } else {
        themeToggle.innerHTML = "☀️"; // Light mode icon
    }

    // Toggle event listener for button
    themeToggle.addEventListener("click", function () {
        const currentTheme = localStorage.getItem("theme");

        // Toggle between light and dark
        if (currentTheme === "dark") {
            setTheme("light");
            themeToggle.innerHTML = "☀️"; // Change the icon to light mode
        } else {
            setTheme("dark");
            themeToggle.innerHTML = "🌙"; // Change the icon to dark mode
        }
    });

    // Get the sidebar and toggle button
const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('#sidebar-toggle');

// Add event listener to the toggle button
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open'); // Toggle 'open' class to slide it in/out
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach(element => {
      element.classList.add('fade-in');
  });
});


