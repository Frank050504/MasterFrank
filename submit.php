<?php
// Include the database connection
include('connect.php');

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Sanitize and get the input values
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['password']);
    
    // SQL query to insert data
    $sql = "INSERT INTO users (name, password) VALUES ('$name', '$password')";
    password
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    // Close the connection
    $conn->close();
}
?>
