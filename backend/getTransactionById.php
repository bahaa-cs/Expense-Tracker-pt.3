<?php

include ("connection.php");


$id = $_POST['id'];

$response = [];

if ($id != null) {
    $query = $connection->prepare("SELECT * FROM transactions WHERE id = ?");
    
    if ($query) {
        $query->bind_param("i", $id);
        
        if ($query->execute()) {
            $result = $query->get_result();
            
            if ($result->num_rows > 0) {
                $response = $result->fetch_assoc();
            } else {
                $response = ["message" => "No ID"];
            }
        } else {
            $response = ["message" => "Error executing query", "error" => $query->error];
        }
    } else {
        $response = ["message" => "Error preparing query", "error" => $connection->error];
    }
} else {
    $response = ["message" => "ID null"];
}

echo json_encode($response);

