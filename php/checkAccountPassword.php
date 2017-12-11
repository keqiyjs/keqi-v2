<?php
	$con = mysql_connect('localhost:3306', 'root', 'root');
	if (!$con)
	{
		echo "服务器链接失败";
	}

	mysql_select_db("mysql", $con);

	$sql= "SELECT `password` FROM `klkq_account` WHERE `account` = '$_POST[account]'and `password` = '$_POST[password]'";

	$result = mysql_query($sql);
	if (!mysql_fetch_array($result))
	{
		mysql_close($con);
		echo "<script>alert('密码错误，请重新输入！'); location.href='/klkqyfct/index.html' </script>";
	}
	else {
		mysql_close($con);
		echo "<script>
				console.log('正确登陆，已记住登录状态');
				console.log('account'+'$_POST[account]');
				console.log('password'+'$_POST[password]');
				var date = new Date();
				date.setTime(date.getTime() + 7 * 24 * 3600 * 1000);
				cookiestring1 = 'account_remember_login_state=' + '$_POST[account]' + '; expires=' + date.toGMTString() + '; path=/';
				cookiestring2 = 'password_remember_login_state=' + '$_POST[password]' + '; expires=' + date.toGMTString() + '; path=/';
				console.log(cookiestring1);
				console.log(cookiestring2);
				document.cookie = cookiestring1;
				document.cookie = cookiestring2;
				location.href='/klkqyfct/self_study/home_page.html';
			</script>";
	}
?>