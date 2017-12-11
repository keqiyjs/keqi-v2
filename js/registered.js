
//检查注册页面信息是否符合格式要求
function check_info()
{
    var all_info_are_right = 4;    

    //密码格式验证
    var password = document.getElementById("password").value;
    if ((password.length != 0) && ((password.length < 6) || (password.length > 16))) {
        document.getElementById("password_warning").className = "help-block";
        document.getElementById("passwordDiv").className="form-group has-error has-feedback";
        document.getElementById("passwordIcon").className="glyphicon glyphicon-remove form-control-feedback";
    }
    else if(password.length != 0)
    {
        document.getElementById("password_warning").className = "help-block hide";
        document.getElementById("passwordDiv").className="form-group has-success has-feedback";
        document.getElementById("passwordIcon").className="glyphicon glyphicon-ok form-control-feedback";
        all_info_are_right--;
    }
    else
    {
        document.getElementById("password_warning").className = "help-block hide";
        document.getElementById("passwordDiv").className="form-group has-feedback";
        document.getElementById("passwordIcon").className="hide";
    }

    //确认密码验证
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (password != confirmPassword) {
        document.getElementById("confirmPassword_warning").className = "help-block";
        document.getElementById("confirmDiv").className="form-group has-error has-feedback";
        document.getElementById("confirmIcon").className="glyphicon glyphicon-remove form-control-feedback";
    }
    else if(confirmPassword.length != 0)
    {
        document.getElementById("confirmPassword_warning").className = "help-block hide";
        document.getElementById("confirmDiv").className="form-group has-success has-feedback";
        document.getElementById("confirmIcon").className="glyphicon glyphicon-ok form-control-feedback";
        all_info_are_right--;
    }
    else
    {
        document.getElementById("confirmPassword_warning").className = "help-block hide";
        document.getElementById("confirmDiv").className="form-group has-feedback";
        document.getElementById("confirmIcon").className="hide";
    }

    //手机号码验证
    var cellphoneNumber = document.getElementById("cellphoneNumber").value;
    if ((cellphoneNumber.length != 0) && ((cellphoneNumber.length != 11) || isNaN(cellphoneNumber))) {
        document.getElementById("cellphoneNumber_warning").className = "help-block";
        document.getElementById("phoneDiv").className="form-group has-error has-feedback";
        document.getElementById("phoneIcon").className="glyphicon glyphicon-remove form-control-feedback";
    }
    else if(cellphoneNumber.length != 0)
    {
        document.getElementById("cellphoneNumber_warning").className = "help-block hide";
        document.getElementById("phoneDiv").className="form-group has-success has-feedback";
        document.getElementById("phoneIcon").className="glyphicon glyphicon-ok form-control-feedback";
        all_info_are_right--;
    }
    else
    {
        document.getElementById("cellphoneNumber_warning").className = "help-block hide";
        document.getElementById("phoneDiv").className="form-group has-feedback";
        document.getElementById("phoneIcon").className="hide";
    }

    //科大邮箱验证
    var reg = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@mail.ustc.edu.cn$/gi;
    var ustcEmail = document.getElementById("ustcEmail").value;
    if ((ustcEmail.length != 0) && (!reg.test(ustcEmail))) {
        document.getElementById("ustcEmail_warning").className = "help-block";
        document.getElementById("emailDiv").className="form-group has-error has-feedback";
        document.getElementById("emailIcon").className="glyphicon glyphicon-remove form-control-feedback";
    }
    else if(ustcEmail.length != 0)
    {
        document.getElementById("ustcEmail_warning").className = "help-block hide";
        document.getElementById("emailDiv").className="form-group has-success has-feedback";
        document.getElementById("emailIcon").className="glyphicon glyphicon-ok form-control-feedback";
        all_info_are_right--;
    }
    else
    {
        document.getElementById("ustcEmail_warning").className = "help-block hide";
        document.getElementById("emailDiv").className="form-group has-feedback";
        document.getElementById("emailIcon").className="hide";
    }

    if (password.length * confirmPassword.length * cellphoneNumber.length * ustcEmail.length == 0)
    {

        all_info_are_right++;
    }

    return all_info_are_right;
}

//注册成功跳转页面
function goToLoginFromRegistered()
{
    if (check_info() == 0)
    {
        console.log('注册成功');
        alert("注册成功！点击确定，跳转到登录界面。");
        location.href = "mainpage.html"
        return true;
    }
    else
    {
        console.log('信息不完整');
        alert("尚有信息未填写完整！");
        return false;
    }
}

