document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Get form values
    var reason = document.getElementById('reason').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var comment = document.getElementById('comment').value;

    // Save to localstorage
    localStorage.setItem('reason', reason);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('comment', comment);

    // user alert
    alert('Form data saved!');

    // reset
    event.target.reset();
});
