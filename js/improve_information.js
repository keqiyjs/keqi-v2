//验证是否登陆，寻找账号密码的cookie
window.onload = function () {
    //var oUser = document.getElementById('account_remember_login_state_welcome');

    //页面初始化时，如果帐号密码cookie存在则填充标题的欢迎词
    //本cookies和记住密码不是同一个cookies，而是只要登陆就会记住的
    if (getCookie('account_remember_login_state')) {
        document.getElementById('account_remember_login_state_welcome').innerHTML = '欢迎你！ ' + getCookie('account_remember_login_state');
        document.getElementById('account').value = getCookie('account_remember_login_state');
        document.getElementById('hiddenAccount').value = getCookie('account_remember_login_state');
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
            document.getElementById("realName").value = selfInfoJSONObject[0].realName;
            document.getElementById("nickname").value = selfInfoJSONObject[0].nickname;
            document.getElementById("sex").value = selfInfoJSONObject[0].sex;
            document.getElementById("department").value = selfInfoJSONObject[0].department;
            document.getElementById("grade").value = selfInfoJSONObject[0].grade;
            document.getElementById("cellphoneNumber").value = selfInfoJSONObject[0].cellphoneNumber;
            document.getElementById("ustcEmail").value = selfInfoJSONObject[0].ustcEmail;
            document.getElementById("studentNum").value = selfInfoJSONObject[0].studentNum;
            document.getElementById("ustcGas").value = selfInfoJSONObject[0].ustcGas;
            document.getElementById("interest").value = selfInfoJSONObject[0].interest;
            document.getElementById("gpa").value = selfInfoJSONObject[0].gpa;
            document.getElementById("introduction").value = selfInfoJSONObject[0].introduction;
        }
    }
    xmlhttp.open("GET", "/klkqyfct/php/improve_information_read.php?account=" + account + "&sid=" + Math.random(), true);
    xmlhttp.send();
}

//检查密码找回页面信息是否符合格式要求
function check_info_improve_information() {
    var all_info_are_right = 6;

    var realName = document.getElementById("realName").value;
    if ((realName.length != 0) && (realName.length > 30)) {
        var realName_warning = document.getElementById("realName_warning");
        cellphone_number_warning.innerHTML = "真实姓名不得长于30字符";
    }
    else {
        var realName_warning = document.getElementById("realName_warning");
        realName_warning.innerHTML = "";
        all_info_are_right--;
    }

    var nickname = document.getElementById("nickname").value;
    if ((nickname.length != 0) && (nickname.length > 30)) {
        var nickname_warning = document.getElementById("nickname_warning");
        nickname_warning.innerHTML = "昵称不得长于30字符";
    }
    else {
        var nickname_warning = document.getElementById("nickname_warning");
        nickname_warning.innerHTML = "";
        all_info_are_right--;
    }

    var sex = document.getElementById("sex").value;
    if ((sex.length != 0)) {
        all_info_are_right--;
    }

    var department = document.getElementById("department").value;
    if ((department.length != 0)) {
        all_info_are_right--;
    }

    var grade = document.getElementById("grade").value;
    if ((grade.length != 0)) {
        all_info_are_right--;
    }

    var studentNum = document.getElementById("studentNum").value;
    if ((studentNum.length != 0) && (studentNum.length != 10)) {
        var studentNum_warning = document.getElementById("studentNum_warning");
        studentNum_warning.innerHTML = "学号长度错误";
    }
    else {
        var studentNum_warning = document.getElementById("studentNum_warning");
        studentNum_warning.innerHTML = "";
        all_info_are_right--;
    } 

    var interest = document.getElementById("interest").value;
    if ((interest.length != 0) && (interest.length > 150)) {
        var interest_warning = document.getElementById("interest_warning");
        interest_warning.innerHTML = "超出长度";
        all_info_are_right++;
    }
    else {
        var interest_warning = document.getElementById("interest_warning");
        interest_warning.innerHTML = "";
    } 

    var gpa = document.getElementById("gpa").value;
    if ((gpa.length != 0) && ((gpa.length != 4) || isNaN(gpa) || (parseFloat(gpa) > 4.30) || (parseFloat(gpa) < 0))){
        var gpa_warning = document.getElementById("gpa_warning");
        gpa_warning.innerHTML = "gpa非法！";
        all_info_are_right++;
    }
    else {
        var gpa_warning = document.getElementById("gpa_warning");
        gpa_warning.innerHTML = "";
    } 

    var introduction = document.getElementById("introduction").value;
    if ((introduction.length != 0) && ( introduction.length > 150)) {
        var introduction_warning = document.getElementById("introduction_warning");
        interest_warning.innerHTML = "超出长度";
        all_info_are_right++;
    }
    else {
        var introduction_warning = document.getElementById("introduction_warning");
        introduction_warning.innerHTML = "";
    }

    if (realName.length * nickname.length * sex.length * department.length * grade.length * studentNum.length == 0) {
        all_info_are_right++;
    }
    console.log(all_info_are_right);
    return all_info_are_right;
}

//找回密码成功跳转页面
function goToLoginFromImproveInformation() {
    if (check_info_improve_information() == 0) {
        return true;
    }
    else {
        alert("尚有信息未填写完整！");
        return false;
    }
}
