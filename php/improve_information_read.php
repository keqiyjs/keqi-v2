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
		public $realName;
		public $nickname;
		public $sex;
		public $department;
		public $grade;
		public $cellphoneNumber;
		public $ustcEmail;
		public $studentNum;
		public $ustcGas;
		public $interest;
		public $gpa;
		public $introduction;
	}
	mysql_select_db("mysql", $con);

	$sql= "SELECT * FROM `klkq_account` WHERE `account` = '".$_GET["account"]."'";
	$result = mysql_query($sql);
	if(($row=mysql_fetch_array($result)))
	{
		$user = new studyInfo();
		$user->realName			= $row["realName"];
		$user->nickname			= $row["nickname"];
		$user->sex				= $row["sex"];
		$user->department		= $row["department"];
		$user->grade			= $row["grade"];
		$user->cellphoneNumber	= $row["cellphoneNumber"];
		$user->ustcEmail		= $row["ustcEmail"];
		$user->studentNum		= $row["studentNum"];
		$user->ustcGas			= $row["ustcGas"];
		$user->interest			= $row["interest"];
		$user->gpa				= $row["gpa"];
		$user->introduction		= $row["introduction"];

		$data[]=$user;
	}
	$json = json_encode($data);//把数据转换为JSON数据.
	echo $json;
	//echo "{".'"user"'.":".$json."}";

	mysql_close($con);
?>