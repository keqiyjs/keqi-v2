<?php
	$account=$_GET["account"];

	$con = mysql_connect('localhost:3306', 'root', 'root');
	if (!$con)
	{
		die('Could not connect: ' . mysql_error());
	}

	mysql_select_db("mysql", $con);

	$sql= "SELECT `password` FROM `klkq_account` WHERE `account` = '".$_GET["account"]."'";
	$result = mysql_query($sql);
	if(!mysql_fetch_array($result))
	{
		echo '账号不存在';
	}
	mysql_close($con);
?>