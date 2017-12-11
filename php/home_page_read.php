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
		public $nickname;
		public $sex;
		public $department;
		public $ustcGas;
		public $selfStudyTime;
		public $selfStudyLocation;
		public $grade;
		public $interest;
		public $gpa;
		public $realName;
		public $selfStudySubject;
		public $introduction;
		public $reasonStatement;
	}
	mysql_select_db("mysql", $con);

	$sql= "SELECT * FROM `klkq_account` WHERE `selfStudyTime` != ''";
	$result = mysql_query($sql);
	$studyNum = 0;
	while(($row=mysql_fetch_array($result)))
	{
		$user = new studyInfo();
		$user->nickname				= $row["nickname"];			
		$user->sex					= $row["sex"];				
		$user->department			= $row["department"];		
		$user->ustcGas				= $row["ustcGas"];			
		$user->selfStudyTime		= $row["selfStudyTime"];	
		$user->selfStudyLocation	= $row["selfStudyLocation"];
		$user->grade				= $row["grade"];			
		$user->interest				= $row["interest"];			
		$user->gpa					= $row["gpa"];				
		$user->realName				= $row["realName"];			
		$user->selfStudySubject		= $row["selfStudySubject"];	
		$user->introduction			= $row["introduction"];		
		$user->reasonStatement		= $row["reasonStatement"];	

		$data[$studyNum]=$user;
		//$data[$studyNum]=$user;
		$studyNum++;
	}
	$json = json_encode($data);//把数据转换为JSON数据.
	echo $json;

	mysql_close($con);
?>