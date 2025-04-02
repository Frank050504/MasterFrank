<?php
// Database connection details
$servername = "localhost";
$username = "app_user"; // Use the user you created in PhpMyAdmin
$password =" renREN05!"; // Your database password
$dbname = "my_database"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
// Connection successful
?>
