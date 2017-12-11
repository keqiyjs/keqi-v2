function checkAccount(account, accountWarning, phpAddress, message) {
    var xmlhttp;
    if (message.length == 0) {
        document.getElementById(accountWarning).innerHTML = "";
        return;
    }
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById(accountWarning).innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "/klkqyfct/php/" + phpAddress + "?account=" + message + "&sid=" + Math.random(), true);
    xmlhttp.send();
}

