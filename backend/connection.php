<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


$host = "localhost";
$dbuser = "root";
$pass = "";
$dbname = "expense-trackerdb";

$connection = new mysqli($host,$dbuser,$pass,$dbname);

if ($connection->connect_error)
    die("Error occured");
