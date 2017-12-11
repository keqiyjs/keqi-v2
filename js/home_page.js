//验证是否登陆，寻找账号密码的cookie
window.onload = function () {
    //var oUser = document.getElementById('account_remember_login_state_welcome');

    //页面初始化时，如果帐号密码cookie存在则填充标题的欢迎词
    //本cookies和记住密码不是同一个cookies，而是只要登陆就会记住的
    if (getCookie('account_remember_login_state')) {
        document.getElementById('account_remember_login_state_welcome').innerHTML = '欢迎你！ ' + getCookie('account_remember_login_state');
        showSelfStudy(jsonId = 0);
        document.getElementById('nowPageNum').innerHTML = '1';
    }
}

//获取cookie
function getCookie(name) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split('; ');
    for (var cookieId = 0; cookieId < arrCookie.length; cookieId++) {
        var arr = arrCookie[cookieId].split('=');
        if (arr[0] == name)
            return unescape(arr[1]);
    }
    return '';
}

function showSelfStudy(jsonId = 0) {
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

            jsonId *= 3; 
            if (jsonId < 0)
            {
                console.log('不能再向前翻页了');
                alert('已到达第一页');
                jsonId = 0;
            }
            while (!selfInfoJSONObject[jsonId] && jsonId >= 3)
            {
                console.log('找不到更多的自习了');
                alert('已到达最后一页');
                jsonId -= 3;
            }
            document.getElementById('nowPageNum').innerHTML = String(jsonId/3 + 1);
            for (htmlId = 0; (htmlId < 3) && (selfInfoJSONObject[jsonId]); htmlId++)
            {
                document.getElementById("nickname_" + htmlId).innerHTML = selfInfoJSONObject[jsonId].nickname;
                document.getElementById("sex_" + htmlId).innerHTML = selfInfoJSONObject[jsonId].sex;
                document.getElementById("department_" + htmlId).innerHTML = selfInfoJSONObject[jsonId].department;
                document.getElementById("ustcGas_" + htmlId).innerHTML = selfInfoJSONObject[jsonId].ustcGas;
                document.getElementById("selfStudyTime_" + htmlId).innerHTML = selfInfoJSONObject[jsonId].selfStudyTime;
                document.getElementById("selfStudyLocation_" + htmlId).innerHTML = selfInfoJSONObject[jsonId].selfStudyLocation;
                document.getElementById("grade_" + htmlId).innerHTML = selfInfoJSONObject[jsonId].grade;
                document.getElementById("interest_" + htmlId).innerHTML = selfInfoJSONObject[jsonId].interest;
                document.getElementById("gpa_" + htmlId).innerHTML = selfInfoJSONObject[jsonId].gpa;
                document.getElementById("realName_" + htmlId).innerHTML = selfInfoJSONObject[jsonId].realName;
                document.getElementById("selfStudySubject_" + htmlId).innerHTML = selfInfoJSONObject[jsonId].selfStudySubject;
                document.getElementById("introduction_" + htmlId).innerHTML = selfInfoJSONObject[jsonId].introduction;
                document.getElementById("reasonStatement_" + htmlId).innerHTML = selfInfoJSONObject[jsonId].reasonStatement;	

                jsonId++;
            }
        }
    }
    xmlhttp.open("GET", "/klkqyfct/php/home_page_read.php?sid=" + Math.random(), true);
    xmlhttp.send();
}

function firstPage() {
    showSelfStudy(0);
}

function nextPage() {
    nowPageNum = parseInt(document.getElementById('nowPageNum').innerHTML);
    showSelfStudy(nowPageNum);
}

function previousPage() {
    nowPageNum = parseInt(document.getElementById('nowPageNum').innerHTML);
    showSelfStudy(nowPageNum-2);
}
//这里认为不可能有超过300个记录
function lastPage() {
    showSelfStudy(100);
}

$(document).ready(function () {
    //第一次展示
    $("#self_study_0").fadeIn();
    $("#self_study_1").fadeIn("slow");
    $("#self_study_2").fadeIn(1500);
    //标题醒目
    $("#up_title").animate({ left: '-10%', fontSize: '50px' }, "fast")
                 .animate({ left: '+=10%', fontSize: '60px' }, "fast");
    $("#up_title_sup").animate({ left: '10%', fontSize: '30px' }, "fast")
                .animate({ left: '-=10%', fontSize: '40px' }, "fast");

    //不看消息
    $("#dont_see1").click(function () {
        $(this).parents(".simple_self_study").hide("slow");
    });
    $("#dont_see2").click(function () {
        $(this).parents(".simple_self_study").hide("slow");
    });
    $("#dont_see3").click(function () {
        $(this).parents(".simple_self_study").hide("slow");
    });
    //展开收起
    $("#expand_more_0").click(function () {
        if (document.getElementById('expand_more_0').innerHTML.match("展开更多"))
        {
            document.getElementById('expand_more_0').innerHTML = "收起";
        }
        else {
            document.getElementById('expand_more_0').innerHTML = "展开更多";
        }
        $("#more_infomation_0").slideToggle("slow");
    });
    $("#expand_more_1").click(function () {
        if (document.getElementById('expand_more_1').innerHTML.match("展开更多")) {
            document.getElementById('expand_more_1').innerHTML = "收起";
        }
        else {
            document.getElementById('expand_more_1').innerHTML = "展开更多";
        }
        $("#more_infomation_1").slideToggle("slow");
    });
    $("#expand_more_2").click(function () {
        if (document.getElementById('expand_more_2').innerHTML.match("展开更多")) {
            document.getElementById('expand_more_2').innerHTML = "收起";
        }
        else {
            document.getElementById('expand_more_2').innerHTML = "展开更多";
        }
        $("#more_infomation_2").slideToggle("slow");
    });
});

/*$(document).ready(function () {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            xmlDoc      = xmlhttp.responseXML;
            nickname    = xmlDoc.getElementsByTagName("nickname");
            sex         = xmlDoc.getElementsByTagName("sex");
            department  = xmlDoc.getElementsByTagName("department");
            keqi        = xmlDoc.getElementsByTagName("keqi");
            studytime  = xmlDoc.getElementsByTagName("studytime");
            studylocation = xmlDoc.getElementsByTagName("studylocation");
            grade       = xmlDoc.getElementsByTagName("grade");
            for (i = 1; i <= nickname.length; i++)
            {
                document.getElementById("info_" + i + "_nickname").innerHTML    = nickname[i - 1].childNodes[0].nodeValue;
                document.getElementById("info_" + i + "_sex").innerHTML         = sex[i - 1].childNodes[0].nodeValue;
                document.getElementById("info_" + i + "_department").innerHTML  = department[i - 1].childNodes[0].nodeValue;
                document.getElementById("info_" + i + "_keqi").innerHTML        = keqi[i - 1].childNodes[0].nodeValue;
                document.getElementById("info_" + i + "_studytime").innerHTML  = studytime[i - 1].childNodes[0].nodeValue;
                document.getElementById("info_" + i + "_studylocation").innerHTML = studylocation[i - 1].childNodes[0].nodeValue;
                document.getElementById("info_" + i + "_grade").innerHTML       = grade[i - 1].childNodes[0].nodeValue;
            }
        }
    }
    xmlhttp.open("GET", "/klkqyfct/data/test.xml", true);
    xmlhttp.send();
});*/

