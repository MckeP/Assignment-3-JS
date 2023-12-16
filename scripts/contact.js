// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// Get the button with the ID "submit-button" and do something when it's clicked
document.getElementById('submit-button').addEventListener('click', function() {
    const contactPage = document.getElementById('contact-page');
    // Change what's shown on the webpage inside "contact-page" to say "Thank you for your message"
    contactPage.innerHTML = '<p style="font-size: 24px; margin-left: 90px;">Thank you for your message</p>';
});
