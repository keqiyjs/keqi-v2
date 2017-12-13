//时间选择和地点选择相关功能
//日期选择 支持从当前日期开始到下一周
var days=[31,28,31,30,31,30,31,31,30,31,30,31];//还没有计算闰年
var myDate= new Date();
var currentYear = myDate.getFullYear();     //获取当前年份
var currentMonth = myDate.getMonth() + 1;       //获取当前月份(0-11,0代表1月)
var currentDate = myDate.getDate();        //获取当前日(1-31)
var currentHour = myDate.getHours();       //获取当前小时数(0-23)

var dateStart = currentYear + '-' + currentMonth + '-' + currentDate;
var dateEnd;

if(currentDate + 7 > days[currentMonth - 1])
{
  if (currentMonth + 1 > 12 )
    dateEnd = (currentYear + 1) + '-' + 1 + '-' + (currentDate + 7 - days[currentMonth - 1]);
  else
  dateEnd = currentYear + '-' + currentMonth + '-' + (currentDate + 7 - days[currentMonth - 1]);
}
else
  dateEnd = currentYear + '-' + currentMonth + '-' + (currentDate + 7);

function checkIfCurrentDate(){
  //检查日期选择
  userDate = document.getElementById('date').value;
  if (userDate == '请选择'){
    document.getElementById("startDiv").className = "form-group hide";
    document.getElementById("endDiv").className = "form-group hide";
  }
  else{
    document.getElementById("startDiv").className = "form-group";
    document.getElementById("endDiv").className = "form-group";
  }
    //当用户选择具体日期时，如果有改变，则首先将开始结束时间置请选择
    //如果是今天，则将起始时间设成当前时间（小时）
    //如果是未来，则不限制起始时间（0：00-23：55）
    if (userDate == dateStart){ //如果选择今天，则需读取当前时间
      document.getElementById('startTime').value = "请选择";
      document.getElementById('endTime').value = "请选择";
      var startHour = userDate + ' ' + currentHour + ':00';
      var endHour = userDate + ' ' + '23:55';
      $('.startTime').datetimepicker("setStartDate",startHour);
      $('.endTime').datetimepicker("setStartDate",startHour);
      $('.startTime').datetimepicker("setEndDate",endHour);
      $('.endTime').datetimepicker("setEndDate",endHour);
    }
    else{
      document.getElementById('startTime').value = "请选择";
      document.getElementById('endTime').value = "请选择";
      var startHour = userDate + ' ' + '00:00';
      var endHour = userDate + ' ' + '23:55';
      $('.startTime').datetimepicker("setStartDate",startHour);
      $('.endTime').datetimepicker("setStartDate",startHour);
      $('.startTime').datetimepicker("setEndDate",endHour);
      $('.endTime').datetimepicker("setEndDate",endHour);
    }
  }


function setStartTime(){
  //当用户改变开始时间，重置结束时间为请选择，并将其起始时间设成当前开始时间
  userDate = document.getElementById('date').value;
  startTime = document.getElementById("startTime").value;
  if(startTime != '请选择'){
    document.getElementById('endTime').value = "请选择";
    var startHour = userDate + ' ' + startTime;
    var endHour = userDate + ' ' + '23:55';
    $('.endTime').datetimepicker("setStartDate",startHour);
    $('.endTime').datetimepicker("setEndDate",endHour);
  }
  else{
    var startHour = userDate + ' ' + '0:00';
    var endHour = userDate + ' ' + '23:55';
    $('.endTime').datetimepicker("setStartDate",startHour);
    $('.endTime').datetimepicker("setEndDate",endHour);
  }
}

function setEndTime(){
  //针对先选择结束时间再选择开始时间的用户
  //当用户设定了结束时间，会判断开始时间是否小于等于结束时间
  
}
$('.form_date').datetimepicker({
    language: 'zh-CN',
    weekStart: 1,
    todayBtn: 1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    minView: 2,
    forceParse: 0,
    startDate: dateStart,
    endDate: dateEnd
  });
$('.startTime').datetimepicker({
    language: 'zh-CN',
    autoclose: 1,
    startView: 1,
    minView: 0,
    maxView: 1,
    forceParse: 0,
  });
  $('.endTime').datetimepicker({
    language: 'zh-CN',
    autoclose: 1,
    startView: 1,
    minView: 0,
    maxView: 1,
    forceParse: 0,
  });



//地点选择框
function selectBuilding() {
  myLocation = document.getElementById("location").value;
  if (myLocation == '1') {
    document.getElementById("building").className = "form-control ";
    document.getElementById("be1").className = "";
    document.getElementById("be2").className = "";
    document.getElementById("be3").className = "";
    document.getElementById("be4").className = "";
    document.getElementById("bw1").className = "hide";
    document.getElementById("bw2").className = "hide";
    document.getElementById("bw3").className = "hide";
  }
  else if (myLocation == '2') {
    document.getElementById("building").className = "form-control ";
    document.getElementById("be1").className = "hide";
    document.getElementById("be2").className = "hide";
    document.getElementById("be3").className = "hide";
    document.getElementById("be4").className = "hide";
    document.getElementById("bw1").className = "";
    document.getElementById("bw2").className = "";
    document.getElementById("bw3").className = "";
  }
  else {
    document.getElementById("building").className = "form-control hide";
  }
}

