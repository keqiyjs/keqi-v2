<?php
	$con = mysql_connect('localhost:3306', 'root', 'root');
	if (!$con)
	{
		die('Could not connect: ' . mysql_error());
	}

	mysql_select_db("mysql", $con);

	$sql="UPDATE `klkq_account` SET 
	`selfStudyTime`			= '$_POST[selfStudyTime]',
	`selfStudyLocation`		= '$_POST[selfStudyLocation]',
	`selfStudySubject`		= '$_POST[selfStudySubject]',
	`reasonStatement`		= '$_POST[reasonStatement]'
	WHERE `account` = '$_POST[account]'";

	if (!mysql_query($sql,$con))
	{
		die('Error: ' . mysql_error());
	}

	mysql_close($con);
	echo '<script>alert("我的自习已发布！单击确定返回已有自习列表"); location.href="/klkqyfct/self_study/home_page.html" </script>';
	//echo '<script>location.href="/klkqyfct/index.html" </script>';

?>