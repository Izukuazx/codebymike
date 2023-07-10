// Get the form element
const form = document.querySelector('.contact-form');

// Add submit event listener to the form
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the user input values
  const name = form.querySelector('input[name="name"]').value;
  const email = form.querySelector('input[name="email"]').value;
  const message = form.querySelector('textarea[name="message"]').value;

  // Perform basic validation
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all the fields.'); // Show an alert if any field is empty
    return;
  }

  // Prepare the data to be sent
  const data = {
    name: name,
    email: email,
    message: message
  };

  // Simulate form submission and show success message
  simulateFormSubmission(data);
});

// Function to simulate form submission
function simulateFormSubmission(data) {
  // Show a loading spinner or any other feedback to indicate form submission is in progress
  showLoadingSpinner();

  // Simulate an asynchronous request to the server
  setTimeout(function () {
    // Clear the form inputs
    form.reset();

    // Hide the loading spinner
    hideLoadingSpinner();

    // Show a success message to the user
    showSuccessMessage();
  }, 2000); // Simulating a 2-second delay
}

// Function to show a loading spinner
function showLoadingSpinner() {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.textContent = 'Submitting...';

  form.appendChild(spinner);
}

// Function to hide the loading spinner
function hideLoadingSpinner() {
  const spinner = form.querySelector('.spinner');
  if (spinner) {
    form.removeChild(spinner);
  }
}

// Function to show a success message
function showSuccessMessage() {
  const successMessage = document.createElement('div');
  successMessage.classList.add('success-message');
  successMessage.textContent = 'Message sent successfully!';

  form.appendChild(successMessage);

  // Remove the success message after 3 seconds
  setTimeout(function () {
    form.removeChild(successMessage);
  }, 3000);
}
