<?php
	$con = mysql_connect('localhost:3306', 'root', 'root');
	if (!$con)
	{
		die('Could not connect: ' . mysql_error());
	}

	mysql_select_db("mysql", $con);

	$sql="UPDATE `klkq_account` SET 
	`realName`			= '$_POST[realName]',
	`sex`				= '$_POST[sex]',
	`department`		= '$_POST[department]',
	`grade`				= '$_POST[grade]',
	`studentNum`		= '$_POST[studentNum]',
	`interest`			= '$_POST[interest]',
	`gpa`				= '$_POST[gpa]',
	`introduction`		= '$_POST[introduction]'
	WHERE `account` = '$_POST[account]'";

	if (!mysql_query($sql,$con))
	{
		die('Error: ' . mysql_error());
	}

	mysql_close($con);
	echo '<script>alert("信息完善成功！单击确定返回已有自习列表"); location.href="/klkqyfct/self_study/home_page.html" </script>';
	//echo '<script>location.href="/klkqyfct/index.html" </script>';

?>