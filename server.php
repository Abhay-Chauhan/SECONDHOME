<?php
	session_start();

	// $username = "root";
	// $password = "";

	$username = "secondho_admin";
	$password = "CbYU3eMgv238@@";

  // $host = "127.0.0.1";
  // $site_url = "http://localhost/testing/rental/";
  $site_url = "https://secondhomes.co/";
	$host = "64.188.5.250";
	$port = "3306";
	$database_name = "secondho_details";
	$table_name = "contact_us";

	$conn = new mysqli($host, $username, $password, $database_name, $port) or die("Connection Failed");

	$message = mysqli_real_escape_string($conn, $_POST['message']);
	$name = mysqli_real_escape_string($conn, $_POST['name']);
	$email = mysqli_real_escape_string($conn, $_POST['email']);
	$subject = mysqli_real_escape_string($conn, $_POST['subject']);

	$query = "INSERT INTO `$table_name` (MESSAGE, NAME, EMAIL, SUBJECT) VALUES ('$message', '$name', '$email', '$subject')";

	if (mysqli_query($conn, $query) ) echo "Entry Submitted Successfully!";
	else echo mysqli_error($conn);

  mysqli_close($conn);
  header("Location: "."$site_url"."contact.html");
  die();
?>




