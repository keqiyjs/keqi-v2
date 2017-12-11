<?php
$con = mysql_connect('localhost:3306', 'root', 'password');
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("mysql", $con);

$sql="INSERT INTO `klkq_account` (`account`, `password`, `nickname`, `cellphoneNumber`, `ustcEmail`) 
VALUES
('$_POST[account]','$_POST[password]','$_POST[nickname]','$_POST[cellphoneNumber]','$_POST[ustcEmail]')";

if (!mysql_query($sql,$con))
  {
  die('Error: ' . mysql_error());
  alert('数据库出错');
  }

mysql_close($con);
echo '<script>location.href="mainpage.html" </script>';

?>
