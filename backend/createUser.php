<?php

include ("connection.php");


$username = $_POST['username'];

if ($username != null) {
    $query = $connection->prepare("INSERT INTO users (username) VALUES(?)");
    $query->bind_param("s", $username);
    
    if ($query->execute()) {
        echo json_encode([
            "message" => "User added successfully"
        ]);
    } else {
        echo json_encode([
            "message" => "Error adding user"
        ]);
    }
} else {
    echo json_encode(["message" => "Username cannot be null"]);
}
