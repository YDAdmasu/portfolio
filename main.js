document.addEventListener("DOMContentLoaded", () => {
const form = document.querySelector(".contact__form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
      }
      emailjs
        .send("service_c1kbbsc", "template_gswje4d", {
          from_name: name,
          from_email: email,
          message: message
        })
        .then(
          function () {
            alert("Message sent successfully!");
            form.reset();
          },
          function (error) {
            console.error("EmailJS Error:", error);
            alert("There was an error sending your message.");
          }
        );
    });
});

