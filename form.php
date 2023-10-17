<?php
if ( ($_POST['name']!="") && ($_POST['email']!="")){
$name = $_POST['name'];
$email = $_POST['email'];
$city = $_POST['city'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$product = $-POST['products']
$quantity = $-POST['quantity']


$to = "info@cyberpro.com.sa";
$subject = "New Enquriy";
$message = '<div>Name: '.$name .'</div><div> Email : '.$email.' </div><div>City : '.$city.'</div><div> Phone : '.$phone.'</div><div> Products : '.$products.'</div><div> Quantity : '.$quantity.'</div><div> Message : '.$message.'</div>';
;

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: <".$email.">" . "\r\n";
$sent = mail($to,$subject,$message,$headers);
if($sent){
	echo "<span style='color:green; font-weight:bold;'>
	Thank you for contacting us, we will get back to you shortly.
	</span>";
}
else{
	echo "<span style='color:red; font-weight:bold;'>
	Sorry! Your form submission is failed.
	</span>";
	}
}
?>