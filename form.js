document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const messageEl = document.getElementById('formMessage');

  function isValidEmail(email) {
    // simple email check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      messageEl.textContent = 'Please fill out all fields.';
      messageEl.style.color = 'crimson';
      return;
    }
    if (!isValidEmail(email)) {
      messageEl.textContent = 'Please enter a valid email address.';
      messageEl.style.color = 'crimson';
      return;
    }

    // In this static demo we just show a success state.
    messageEl.textContent = 'Thanks, your message is ready to be sent (demo).';
    messageEl.style.color = 'green';
    form.reset();
  });
});
