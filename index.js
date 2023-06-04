
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var message = document.getElementById("message").value;
    var mailtoLink = "mailto:alanjoshy517@gmail.com?body=" + encodeURIComponent(message);
    window.location.href = mailtoLink;
});
