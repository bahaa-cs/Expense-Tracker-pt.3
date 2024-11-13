<?php

include ("connection.php");

$users_id = $_POST["users_id"];
$id = $_POST["id"];

$query = $connection->prepare("DELETE from transactions WHERE users_id = ? and id = ?");

$query->bind_param("ii",$users_id,$id);

$response = [];

$response = [];

if ($query) {
    if ($query->execute()) {
        $response = ["message" => "Deleted successfully"];
    } else {
        $response = ["message" => "Error executing delete query", "error" => $query->error];
    }
} else {
    $response = ["message" => "Error preparing delete query", "error" => $connect->error];
}

echo json_encode($response);

