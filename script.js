const contactForm = document.getElementById('contact-form');
const responseMessage = document.getElementById('response-message');

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  try {
    // Check if the Email API is supported
    if (!navigator.canShare) {
      throw new Error('Email sharing is not supported by this browser.');
    }

    // Create the email data
    const shareData = {
      title: 'Contact Form Submission',
      text: `To: your_email@example.com\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Attempt to share the email data
    await navigator.share(shareData);

    responseMessage.innerHTML = '<p>Your message has been sent successfully!</p>';
  } catch (error) {
    responseMessage.innerHTML = `<p>An error occurred while sending the message: ${error.message}</p>`;
    console.error('Email sharing failed:', error);
  }
});