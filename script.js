// Initialize EmailJS
(function() {
    emailjs.init("7ek66i9u82OPGZ2l5"); // Replace with your EmailJS user ID
})();

document.getElementById('supportForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    emailjs.send("service_i3lzkks", "template_u68va7g", {
        name: name,
        email: email,
        message: message
    })
    .then(function(response) {
        alert('Message sent successfully!');
        document.getElementById('supportForm').reset();
    }, function(error) {
        alert('Error sending message: ' + JSON.stringify(error));
    });
});
