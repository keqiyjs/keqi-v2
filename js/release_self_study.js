//验证是否登陆，寻找账号密码的cookie
window.onload = function () {
    //var oUser = document.getElementById('account_remember_login_state_welcome');

    //页面初始化时，如果帐号密码cookie存在则填充标题的欢迎词
    //本cookies和记住密码不是同一个cookies，而是只要登陆就会记住的
    if (getCookie('account_remember_login_state')) {
        document.getElementById('account_remember_login_state_welcome').innerHTML = '欢迎你！ ' + getCookie('account_remember_login_state');
        document.getElementById('account').value = getCookie('account_remember_login_state');
        fillExistedInfomation(getCookie('account_remember_login_state'));
    }
}

//获取cookie
function getCookie(name) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split('; ');
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split('=');
        if (arr[0] == name)
            return unescape(arr[1]);
    }
    return '';
}

function fillExistedInfomation(account) {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //从服务器上返回json文件
            selfInfoJSONObject = eval(xmlhttp.responseText);
            document.getElementById("selfStudyTime").value = selfInfoJSONObject[0].selfStudyTime;
            document.getElementById("selfStudyLocation").value = selfInfoJSONObject[0].selfStudyLocation;
            document.getElementById("selfStudySubject").value = selfInfoJSONObject[0].selfStudySubject;
            document.getElementById("reasonStatement").value = selfInfoJSONObject[0].reasonStatement;
        }
    }
    xmlhttp.open("GET", "/klkqyfct/php/release_self_study_read.php?account=" + account + "&sid=" + Math.random(), true);
    xmlhttp.send();
}


function check_info_improve_information() {
    var all_info_are_right = 2;

    var selfStudyTime = document.getElementById("selfStudyTime").value;
    if ((selfStudyTime.length != 0) && (selfStudyTime.length > 30)) {
        var selfStudyTime_warning = document.getElementById("selfStudyTime_warning");
        selfStudyTime_warning.innerHTML = "自习时间格式错误";
    }
    else {
        var selfStudyTime_warning = document.getElementById("selfStudyTime_warning");
        selfStudyTime_warning.innerHTML = "";
        all_info_are_right--;
    }

    var selfStudyLocation = document.getElementById("selfStudyLocation").value;
    if ((selfStudyLocation.length != 0)) {
        all_info_are_right--;
    }

    var selfStudySubject = document.getElementById("selfStudySubject").value;
    if ((selfStudySubject.length != 0) && (selfStudySubject.length > 30)) {
        var selfStudySubject_warning = document.getElementById("selfStudySubject_warning");
        selfStudySubject_warning.innerHTML = "自习科目格式错误";
        all_info_are_right++;
    }
    else {
        var selfStudySubject_warning = document.getElementById("selfStudySubject_warning");
        selfStudySubject_warning.innerHTML = "";
    }

    var reasonStatement = document.getElementById("reasonStatement").value;
    if ((reasonStatement.length != 0) && (reasonStatement.length > 30)) {
        var reasonStatement_warning = document.getElementById("reasonStatement_warning");
        reasonStatement_warning.innerHTML = "自习时间格式错误";
        all_info_are_right++;
    }
    else {
        var reasonStatement_warning = document.getElementById("reasonStatement_warning");
        reasonStatement_warning.innerHTML = "";
    }


   

    if (selfStudyTime.length * selfStudyLocation.length * selfStudySubject.length * reasonStatement.length == 0) {
        all_info_are_right++;
    }
    console.log(all_info_are_right);
    return all_info_are_right;
}


function goToLoginFromImproveInformation() {
    if (check_info_improve_information() == 0) {
        return true;
    }
    else {
        alert("尚有信息未填写完整！");
        return false;
    }
}
