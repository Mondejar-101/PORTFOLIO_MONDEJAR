
// Simple JS function to show alert on form submission
document.querySelector('form[name="submit-to-google-sheet"]').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been submitted successfully.");
});
