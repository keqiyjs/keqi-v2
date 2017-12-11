<?php
	$con = mysql_connect('localhost:3306', 'root', 'root');
	if (!$con)
	{
		die('Could not connect: ' . mysql_error());
	}
	$json = '';
	$data = array();
	class studyInfo 
	{
		public $selfStudyTime;
		public $selfStudyLocation;
		public $selfStudySubject;
		public $reasonStatement;
	}
	mysql_select_db("mysql", $con);

	$sql= "SELECT * FROM `klkq_account` WHERE `account` = '".$_GET["account"]."'";
	$result = mysql_query($sql);
	if(($row=mysql_fetch_array($result)))
	{
		$user = new studyInfo();
		$user->selfStudyTime		= $row["selfStudyTime"];
		$user->selfStudyLocation	= $row["selfStudyLocation"];
		$user->selfStudySubject		= $row["selfStudySubject"];
		$user->reasonStatement		= $row["reasonStatement"];

		$data[]=$user;
	}
	$json = json_encode($data);//把数据转换为JSON数据.
	echo $json;

	mysql_close($con);
?>