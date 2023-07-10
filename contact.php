<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the form input values
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Validate the form input
    if (empty($name) || empty($email) || empty($message)) {
        echo 'Please fill in all the fields.';
        exit;
    }

    // Set up the email recipient and subject
    $to = 'gjaspermike@gmail.com'; // Replace with your own email address
    $subject = 'New Message from Contact Form';

    // Compose the email body
    $emailBody = "Name: $name\n";
    $emailBody .= "Email: $email\n\n";
    $emailBody .= "Message:\n$message";

    // Set the email headers
    $headers = "From: $name <$email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";

    // Send the email
    if (mail($to, $subject, $emailBody, $headers)) {
        echo 'Message sent successfully!';
    } else {
        echo 'An error occurred while sending the message. Please try again later.';
    }
}
?>
