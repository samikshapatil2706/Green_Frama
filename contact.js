const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (name && email && message) {
      formMessage.textContent = `Thanks for reaching out, ${name}! We'll get back to you soon.`;
      formMessage.style.color = 'green';
      contactForm.reset();
    } else {
      formMessage.textContent = 'Please fill in all fields.';
      formMessage.style.color = 'red';
    }

  });
  
}
