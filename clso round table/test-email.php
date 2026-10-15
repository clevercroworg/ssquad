<?php
// test-email.php - TEMPORARY DIAGNOSTIC - DELETE AFTER TESTING
header('Content-Type: text/html; charset=UTF-8');

echo "<h2>Email Diagnostic Test</h2>";

// 1. Check WordPress
$wp_found = false;
$wp_path = "Not found";
$paths = [
    __DIR__ . '/wp-load.php',
    __DIR__ . '/../wp-load.php',
    __DIR__ . '/../../wp-load.php',
    __DIR__ . '/../../../wp-load.php'
];
foreach ($paths as $p) {
    if (file_exists($p)) {
        $wp_found = true;
        $wp_path = realpath($p);
        require_once $p;
        break;
    }
}

echo "<p><b>WordPress found:</b> " . ($wp_found ? "YES at $wp_path" : "NO") . "</p>";
echo "<p><b>wp_mail exists:</b> " . (function_exists('wp_mail') ? "YES" : "NO") . "</p>";
echo "<p><b>Current dir:</b> " . __DIR__ . "</p>";

// 2. Try sending a test email
$test_to = 'sanjay@clevercrow.in';
$test_subject = 'CISO Diagnostic Test - ' . date('H:i:s');
$test_message = 'If you receive this, email is working from the WordPress server.';

echo "<hr><p>Attempting to send test email to <b>$test_to</b>...</p>";

if ($wp_found && function_exists('wp_mail')) {
    $headers = array('Content-Type: text/plain; charset=UTF-8');
    $result = wp_mail($test_to, $test_subject, $test_message, $headers);
    echo "<p><b>wp_mail result:</b> " . ($result ? "SUCCESS (email sent)" : "FAILED") . "</p>";
} else {
    $result = @mail($test_to, $test_subject, $test_message, "From: sales@ssquad.com");
    echo "<p><b>PHP mail() result:</b> " . ($result ? "SUCCESS (email queued)" : "FAILED") . "</p>";
}

echo "<hr><p style='color:red'><b>DELETE THIS FILE AFTER TESTING!</b></p>";
?>
