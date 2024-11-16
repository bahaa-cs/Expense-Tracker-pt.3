<?php

include ("connection.php");

$users_id = $_POST["users_id"] ?? 1;


$query = $connection->prepare("select (sum(price) - (select sum(price) from transactions where type='expense')) as budget from transactions where type='income'");
$query->execute();

$result = $query->get_result();
$resultObject = $result->fetch_assoc();


echo json_encode($resultObject);
