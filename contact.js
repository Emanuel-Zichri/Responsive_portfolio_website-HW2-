const contactForm = document.getElementById("contact-form");
contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefult();
  emailjs
    .sendForm(
      "service_9oj1ykg",
      "template_z39xg1s",
      "#contact-form",
      "Xh_A0vAQGUxZbt_GD"
    )
    .then(() => {
      contactMessage.textContact = "Message sent successfuly";
      setTimeout(() => {
        contactMessage.textContact = "";
      }, 5000);
    });
};
contactForm.addEventListener("submit", sendEmail);
