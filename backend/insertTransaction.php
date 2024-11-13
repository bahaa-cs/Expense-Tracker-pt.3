<?php

include ("connection.php");

$price = $_POST['price'];
$type = $_POST['type'];
$date = $_POST['date'];
$notes = $_POST['notes'];
$users_id = $_POST['users_id'];



$query = $connection->prepare(
    "INSERT INTO transactions (price, type , date, notes, users_id)
VALUES (?,?,?,?, ?)"
);
$query->bind_param("isssi", $price,$type,$date,$notes, $users_id);

if ($query) {
    if ($query->execute())
        echo json_encode(["message"=>"Inserted successfully"]);
    else
        echo json_encode(["message"=>"Error executing insert query: " . $query->error]);
} else
    echo json_encode(["message"=>"Error preparing insert query: ".$connect->error]);