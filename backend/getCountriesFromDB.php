<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400');    // cache for 1 day
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Requested-With');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "countries_db";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (mysqli_connect_errno()) {
  die("Connection failed: " . mysqli_connect_error());
}
$sql = "SELECT t1.name, t1.iso2, t2.currency, t1.phone_prefix FROM countries as t1, currencies as t2 WHERE t1.currencyID = t2.currencyID ORDER BY name ASC";
$result = mysqli_query($conn, $sql);
$countries_array = [];

if (mysqli_num_rows($result) > 0) {
  // output data of each row
  while ($row = mysqli_fetch_assoc($result)) {
    //encodes $row array to utf8 because of the special chars
    array_push($countries_array, array_map("utf8_encode", $row));
  }

  echo json_encode($countries_array, true);

} else {
  echo "0 results";
}

$conn->close();
