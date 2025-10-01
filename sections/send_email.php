<?php

if (isset($_POST['name'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = 'contact@oliviaduyen.com';
    $headers = "From: {$name} <{$mailFrom}>";
    $txt = "You have received an email from " . $name . ".\n\n" . $message;


    if (mail($mailTo, $subject, $txt, $headers)) {
        echo "Mail sent successfully!";
    } else {
        echo "Mail failed to send.";
    }

    header("Location: index.php?mailsend");

}
