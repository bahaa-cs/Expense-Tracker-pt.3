<?php

include("connection.php");

$id = $_POST['id'];
$price = $_POST['price'];
$type = $_POST['type'];
$date = $_POST['date'];
$notes = $_POST['notes'];
$users_id = $_POST['users_id'];

$query = $connection->prepare("UPDATE transactions
                                SET price = ?, type=?, date=? , notes = ?, users_id = ?
                                WHERE id=?");
$query->bind_param("isssii",$price,$type,$date,$notes,$users_id,$id);

if($query){

    if($query->execute())
        echo json_encode(["message" => "Updated Successfully!"]);
    else
        echo json_encode(["message" => "Error executing update query: " . $query->error]);

}
else
echo json_encode(["message" => "Error preparing update query: " . $query->error]);
