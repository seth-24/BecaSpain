document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        document.getElementById('statusMessage').textContent = 'All fields are required.';
        document.getElementById('statusMessage').style.color = 'red';
        return;
    }

    document.getElementById('submitBtn').disabled = true;
    document.getElementById('submitBtn').textContent = 'Submitting...';

    emailjs.init("F4EeSwc-2E4XSFbZu"); 

    const templateParams = {
        name: name,
        email: email,
        message: message
    };

    emailjs.send('service_rez79rl', 'template_8lvxnzo', templateParams) 
        .then(function(response) {
            document.getElementById('statusMessage').textContent = 'Your message has been sent!';
            document.getElementById('statusMessage').style.color = 'green';
        }, function(error) {
            document.getElementById('statusMessage').textContent = 'Error sending message. Please try again later.';
            document.getElementById('statusMessage').style.color = 'red';
        });

    setTimeout(() => {
        document.getElementById('statusMessage').textContent = 'Thank you for your message!';
        document.getElementById('statusMessage').style.color = 'green';

        document.getElementById('contactForm').reset();
        document.getElementById('submitBtn').disabled = false;
        document.getElementById('submitBtn').textContent = 'Submit';
    }, 2000);
});
