<?php

$dbc = mysqli_connect('localhost','root','','njp');

$result = mysqli_query($dbc,'SELECT * FROM countries');

$a=array();

while ($row=mysqli_fetch_array($result)){

    array_push($a,$row);
}

mysqli_close($dbc);

echo json_encode($a);