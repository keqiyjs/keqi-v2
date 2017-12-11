//检查密码找回页面信息是否符合格式要求
function check_info_forget_password() {
    var all_info_are_right = 3;

    var reg = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@mail.ustc.edu.cn$/gi;
    var ustc_email = document.getElementById("ustc_email").value;
    if ((ustc_email.length != 0) && (!reg.test(ustc_email))) {
        var ustc_email_warning = document.getElementById("ustc_email_warning");
        ustc_email_warning.innerHTML = "邮箱不是科大学生邮箱"
    }
    else {
        var ustc_email_warning = document.getElementById("ustc_email_warning");
        ustc_email_warning.innerHTML = "";
        all_info_are_right--;
    }

    var cellphone_number = document.getElementById("cellphone_number").value;
    if ((cellphone_number.length != 0) && ((cellphone_number.length != 11) || isNaN(cellphone_number))) {
        var cellphone_number_warning = document.getElementById("cellphone_number_warning");
        cellphone_number_warning.innerHTML = "手机号码为11位阿拉伯数字"
    }
    else {
        var cellphone_number_warning = document.getElementById("cellphone_number_warning");
        cellphone_number_warning.innerHTML = "";
        all_info_are_right--;
    }

    var verification_code = document.getElementById("verification_code").value;
    if ((verification_code.length != 0) && (verification_code != 'klkq')) {
        var verification_code_warning = document.getElementById("verification_code_warning");
        verification_code_warning.innerHTML = "验证码错误"
    }
    else {
        var verification_code_warning = document.getElementById("verification_code_warning");
        verification_code_warning.innerHTML = "";
        all_info_are_right--;
    }

    if (cellphone_number.length * ustc_email.length * verification_code.length == 0) {
        all_info_are_right++;
    }

    return all_info_are_right;
}

//找回密码成功跳转页面
function goToLoginFromForgetPassword() {
    if (check_info_forget_password() == 0) {
        return true;
    }
    else {
        alert("尚有信息未填写完整！");
        return false;
    }
}
