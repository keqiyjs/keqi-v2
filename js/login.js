//回车登录
//document.all判断浏览器是否是IE
document.onkeypress = function (e) {
    var keycode = document.all ? event.keyCode : e.which;
    if (keycode == 13) {
        //login_validate_form(this);
        //这里的功能已失效，有时间在加进来
        console.log("enterkey")
    }
}

//登录页面账号密码的cookie存储
window.onload = function () {
    var oForm = document.getElementById('loginForm');
    var oUser = document.getElementById('account');
    var oPswd = document.getElementById('password');
    var oRemember = document.getElementById('remember');
    //页面初始化时，如果帐号密码cookie存在则填充
    if (getCookie('account') && getCookie('password')) {
        console.log('帐号密码cookie存在');
        oUser.value = getCookie('account');
        oPswd.value = getCookie('password');
        oRemember.checked = true;
    }
    //复选框勾选状态发生改变时，如果未勾选则清除cookie
    oRemember.onchange = function () {
        if (!this.checked) {
            console.log('复选框取消勾选');
            delCookie('account');
            delCookie('password');
            console.log(0000);
        }
        else {
            console.log('复选框勾选');
            setCookie('account', document.getElementById("account").value, 7); //保存帐号到cookie，有效期7天
            setCookie('password', oPswd.value, 7); //保存密码到cookie，有效期7天
        }
    }
}

//设置cookie
function setCookie(name, value, day) {
    var cookieString = name + '=' + escape(value);
    if (day > 0) {
        console.log('设置cookie' + name);
        var date = new Date();
        date.setTime(date.getTime() + day * 24 * 3600 * 1000);
        cookieString = cookieString + '; expires=' + date.toGMTString();
        console.log('cookieString');
        document.cookie = cookieString;
    }
    //document.cookie = cookieString;
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

//删除cookie
function delCookie(name) {
    setCookie(name, null, -1);
}

