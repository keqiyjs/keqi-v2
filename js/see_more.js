function change_star(star_num) {
    switch (star_num) {
        case 1:
            var now_star = document.getElementById('my_star_1');
            if (now_star.src.match("bright") && document.getElementById('my_star_2').src.match("bright")) {
                now_star.src = "../images/star_bright.png";
            }
            else{
                alert("给个一星也是爱呦~")
            }
            document.getElementById('my_star_2').src = "../images/star_dark.png";
            document.getElementById('my_star_3').src = "../images/star_dark.png";
            document.getElementById('my_star_4').src = "../images/star_dark.png";
            document.getElementById('my_star_5').src = "../images/star_dark.png";
            break;
        case 2:
            var now_star = document.getElementById('my_star_2');
            if (now_star.src.match('bright') && document.getElementById('my_star_3').src.match('bright')) {
                now_star.src = "../images/star_bright.png";
            }
            else if (now_star.src.match('bright') && document.getElementById('my_star_3').src.match('dark')){
                now_star.src = "../images/star_dark.png";
            }
            else {
                now_star.src = "../images/star_bright.png";
            }
            document.getElementById('my_star_1').src = "../images/star_bright.png";
            document.getElementById('my_star_3').src = "../images/star_dark.png";
            document.getElementById('my_star_4').src = "../images/star_dark.png";
            document.getElementById('my_star_5').src = "../images/star_dark.png";
            break;
        case 3:
            var now_star = document.getElementById('my_star_3');
            if (now_star.src.match('bright') && document.getElementById('my_star_4').src.match('bright')) {
                now_star.src = "../images/star_bright.png";
            }
            else if (now_star.src.match('bright') && document.getElementById('my_star_4').src.match('dark')) {
                now_star.src = "../images/star_dark.png";
            }
            else {
                now_star.src = "../images/star_bright.png";
            }
            document.getElementById('my_star_1').src = "../images/star_bright.png";
            document.getElementById('my_star_2').src = "../images/star_bright.png";
            document.getElementById('my_star_4').src = "../images/star_dark.png";
            document.getElementById('my_star_5').src = "../images/star_dark.png";
            break;
        case 4:
            var now_star = document.getElementById('my_star_4');
            if (now_star.src.match('bright') && document.getElementById('my_star_5').src.match('bright')) {
                now_star.src = "../images/star_bright.png";
            }
            else if (now_star.src.match('bright') && document.getElementById('my_star_5').src.match('dark')) {
                now_star.src = "../images/star_dark.png";
            }
            else {
                now_star.src = "../images/star_bright.png";
            }
            document.getElementById('my_star_1').src = "../images/star_bright.png";
            document.getElementById('my_star_2').src = "../images/star_bright.png";
            document.getElementById('my_star_3').src = "../images/star_bright.png";
            document.getElementById('my_star_5').src = "../images/star_dark.png";
            break;
        case 5:
            var now_star = document.getElementById('my_star_5');
            if (now_star.src.match('bright')) {
                now_star.src = "../images/star_dark.png";
            }
            else {
                now_star.src = "../images/star_bright.png";
            }
            document.getElementById('my_star_1').src = "../images/star_bright.png";
            document.getElementById('my_star_2').src = "../images/star_bright.png";
            document.getElementById('my_star_3').src = "../images/star_bright.png";
            document.getElementById('my_star_4').src = "../images/star_bright.png";
            break;
    }
}