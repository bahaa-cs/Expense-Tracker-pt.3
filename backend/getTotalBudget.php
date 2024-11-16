<?php

include ("connection.php");


$query = $connection->prepare("select (ifnull(sum(price),0) - (select ifnull(sum(price),0) from transactions where type='expense')) as budget from transactions where type='income'
");
$query->execute();

$result = $query->get_result();
$resultObject = $result->fetch_assoc();


echo json_encode($resultObject);
