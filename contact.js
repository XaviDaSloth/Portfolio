const form = document.getElementById('contact-form');
const responseDiv = document.getElementById('response');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name == '' || email == '' || message==''){
        alert('Please fill in all fields');
        event.preventDefault();
    }else{
        alert('Form submitted successfully!');
    }

    // TO DO: implement form submission logic here
    // For example, you can send an AJAX request to a server-side script
    // or use a library like EmailJS to send an email

});