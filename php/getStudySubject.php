<?php
// 用名字来填充数组
$subjects[]="单变量微积分";
$subjects[]="线性代数";
$subjects[]="大学物理";
$subjects[]="多变量微积分";
$subjects[]="大物实验";
$subjects[]="123456";



//获得来自 URL 的 q 参数
$subject=$_GET["message"];

//如果 q 大于 0，则查找数组中的所有提示
if (strlen($subject) > 0)
  {
  $hint="";
  for($i=0; $i<count($subjects); $i++)
    {
    if ($subject==substr($subjects[$i],0,strlen($subject)) || $subject==substr($subjects[$i],3,strlen($subject)) || $subject==substr($subjects[$i],6,strlen($subject)) || $subject==substr($subjects[$i],9,strlen($subject)))
      {
      if ($hint=="")
        {
        $hint=$subjects[$i];
        }
      else
        {
        $hint=$hint." , ".$subjects[$i];
        }
      }
    }
  }

// 如果未找到提示，则把输出设置为 "no suggestion"
// 否则设置为正确的值
if ($hint == "")
  {
  $response="没人约过这节课";
  }
else
  {
  $response=$hint;
  }

//输出响应
echo $response;
?>