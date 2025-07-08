const toggleBtn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
} else {
  body.classList.add("dark-mode");
  icon.classList.remove("fa-sun");
  icon.classList.add("fa-moon");
}

toggleBtn.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    localStorage.setItem("theme", "light");

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");

    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});

// EmailJS configuration

emailjs.init("j0jkSldMn50FZmL1O");

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_0zfvf4o', 'template_eq5e1fq', this) 
    .then(function() {
        alert('Message sent successfully!');
    }, function(error) {
        alert('Failed to send message: ' + JSON.stringify(error));
    });
});
