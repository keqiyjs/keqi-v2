//验证是否登陆，寻找账号密码的cookie
window.onload = function () {
    //var oUser = document.getElementById('account_remember_login_state_welcome');

    //页面初始化时，如果帐号密码cookie存在则填充标题的欢迎词
    //本cookies和记住密码不是同一个cookies，而是只要登陆就会记住的
    if (getCookie('account_remember_login_state') && getCookie('password_remember_login_state')) {
        console.log('找到' + getCookie('account_remember_login_state'));
        document.getElementById('account_remember_login_state_welcome').innerHTML = '欢迎你！ ' + getCookie('account_remember_login_state');
        document.getElementById('login_or_exit').innerHTML = '退出';

    }
    //如果不存在则返回登陆页面
    else {
        alert('请先登录,如果已登陆请允许浏览器设置cookies(来自于check_login.js)');
        location.href = "/klkqyfct/index.html";
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