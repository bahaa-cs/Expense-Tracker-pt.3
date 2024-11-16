<?php

include ("connection.php");


$id = $_POST['id'];

$response = [];

if ($id != null) {
    $query = $connection->prepare("SELECT * FROM transactions WHERE id = ?");
    

    $query->bind_param("i", $id);
    $query->execute()

    $result = $query->get_result();
    
    if ($result->num_rows > 0) {
        $response = $result->fetch_assoc();
    } else {
        $response = ["message" => "No ID"];
    }


    }
} else {
    $response = ["message" => "ID null"];
}

echo json_encode($response);

