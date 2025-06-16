// scripts.js

// Example: Show alert on form submission
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.custom-plan form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you! We will get in touch soon.');
        form.reset();
      });
    }
  });

  