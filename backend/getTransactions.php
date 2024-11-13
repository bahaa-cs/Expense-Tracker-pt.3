<?php

include("connection.php");


    $query = $connection->prepare("SELECT * FROM transactions");
    
    $query->execute();
    
    $result = $query->get_result();

    if ($result->num_rows > 0) {
        $transactions_array = [];
        while ($resultObject = $result->fetch_assoc()) {
            $transactions_array[] = $resultObject;
        }

        echo json_encode($transactions_array);
    } else {
        echo json_encode(["message"=>"no records returned"]);
    }
