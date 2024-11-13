<?php

include ("connection.php");

$users_id = $_POST["users_id"];


$query = $connection->prepare("SELECT type , price FROM transactions WHERE users_id = ?");
$query->bind_param("i",$users_id);
$query->execute();

$result = $query->get_result();


$transactions_array = [];

if ($result->num_rows > 0) {
    while ($resultObject = $result->fetch_assoc()) {
        $transactions_array[] = $resultObject;
    }
}

echo json_encode($transactions_array);
