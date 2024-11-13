<?php

include ("connection.php");


$username = $_POST['username'];

if($username != null){
    $query = $connection->prepare("SELECT id,username FROM users WHERE username = ?");
    $query->bind_param("s",$username);
    $query->execute();

    $result = $query->get_result();

    
    $resultObject = $result->fetch_assoc();

    $json_result = json_encode($resultObject);
    echo $json_result;
    }
else{
    echo json_encode(["error"=>"username is null"]);
}
