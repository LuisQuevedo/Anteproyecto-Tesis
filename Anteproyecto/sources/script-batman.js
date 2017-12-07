// text-shadow: 2px 2px 0px #2e2e2d;

function opcl() {
    $('.sidenav').toggleClass('hiden1','hiden2');
}

var col12 = '#F6C954';
var z = new RegExp(col12,"g");

var col22 = '#231F20';
var y = new RegExp(col22,"g");

var col32 = '#F9F200';
var x = new RegExp(col32,"g");

var col42 = '#323232';
var n = new RegExp(col42,"g");

var col52 = '#5770A9';
var m = new RegExp(col52,"g");

$('input').oninput = function () {
   aply();
}
addEventListener('input', function() { aply(); });

function aply(){
    var col1 = $(".minion-1").val();
    var col2 = $(".minion-2").val();
    var col3 = $(".minion-3").val();
    var col4 = $(".minion-4").val();
    var col5= $(".minion-5").val();

    var str1 = document.getElementById("modify").innerHTML;
    var res1 = str1.replace(z, col1);
    document.getElementById("modify").innerHTML = res1;

    var str2 = document.getElementById("modify").innerHTML;
    var res2 = str2.replace(y, col2);
    document.getElementById("modify").innerHTML = res2;

    var str3 = document.getElementById("modify").innerHTML;
    var res3 = str3.replace(x, col3);
    document.getElementById("modify").innerHTML = res3;

    var str4 = document.getElementById("modify").innerHTML;
    var res4 = str4.replace(n, col4);
    document.getElementById("modify").innerHTML = res4;

    var str5 = document.getElementById("modify").innerHTML;
    var res5 = str5.replace(m, col5);
    document.getElementById("modify").innerHTML = res5;

    col12 = col1;
    z = new RegExp(col12,"g");

    col22 = col2;
    y = new RegExp(col22,"g");

    col32 = col3;
    x = new RegExp(col32,"g");

    col42 = col4;
    n = new RegExp(col42,"g");

    col52 = col5;
    m = new RegExp(col52,"g");
}


