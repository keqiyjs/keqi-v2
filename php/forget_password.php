<?php
	$con = mysql_connect('localhost:3306', 'root', 'root');
	if (!$con)
	{
		echo "服务器链接失败";
	}

	mysql_select_db("mysql", $con);

	$sql= "SELECT * FROM `klkq_account` WHERE `ustc_email` = '$_POST[ustc_email]' and `cellphone_number` = '$_POST[cellphone_number]'";

	$result = mysql_query($sql);
	mysql_error(); 
	if (!($row=mysql_fetch_array($result)))
	{
		mysql_close($con);
		echo "<script>alert('未找到对应信息，请重新输入！'); location.href='/klkqyfct/top_index/forget_password.html' </script>";
	}
	else {
		if( mysql_num_rows( $result )) 
		{  

			echo "<script>
				console.log('密码找回成功');
				alert('您的账号是：'+'".$row["account"]."'+'您的密码是：'+'".$row["password"]."');
				location.href='/klkqyfct/self_study/home_page.html';
			</script>";
		mysql_close($con);
		} 
		else 
		{  
			mysql_error(); 
		}    

	}
?>