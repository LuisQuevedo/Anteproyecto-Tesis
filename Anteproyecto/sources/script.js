$( document ).ready(function() {
        function selectElmCnt(elm) {
            if(window.getSelection) {
            // other browsers
            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(elm);
            selection.removeAllRanges();
            selection.addRange(range);
          }
        }
        var excls = document.querySelectorAll('.excls');
        for(var i=0; i<excls.length; i++){
          excls[i].addEventListener('click', function(){
            selectElmCnt(this);
          });
        }
        $('body').keypress(function(e){
        if(e.which != 0){
            run();
        }
    });
    $('body').on('click', '.cols div', function(){
        $(this). siblings('div').removeClass('active');$(this).toggleClass('active');
    })
});

function run(){

    if($(".one1").hasClass("active")){
        $(".himgfinal").html('*/a:hover img {/**/opacity: .5;/**/}/**//*');
    }else if($(".one2").hasClass("active")){
        $(".himgfinal").html('*/a:hover img {/**/transform: scale(1.2);/**/}/**/a {/**/overflow: hidden;/**/}/**//*');
    }else if($(".one3").hasClass("active")){
        $(".himgfinal").html('*/a:hover img {/**/filter: contrast(2) brightness(1.2);/**/}/**//*');
    }

    if($(".secon1").hasClass("active")){
        $(".botonfinal").html('*/.button {/**/box-shadow: 0px 5px 0px 1px white;/**/transition: .3s ease;/**/border-radius: 5px;/**/}/**/.button:hover {/**/transform: translate(0px, 5px);/**/box-shadow: 0px 0px 0px 1px white;/**/}/**/');
    }else if($(".secon2").hasClass("active")){
        $(".botonfinal").html('*/.button{/**/position: relative;/**/overflow: hidden;/**/}/**/.button:after {/**/content: "";/**/transition: .3s ease;/**/transform: rotate(-40deg);/**/background: #99e2ff;/**/position: absolute;/**/width: 200%;/**/height: 300px;/**/top: 0%;/**/left: 30%;/**/z-index: 2;/**/}/**/.button:before {/**/transition: .3s ease;/**/transform: rotate(-30deg);/**/content: "";/**/background: #fff;/**/position: absolute;/**/width: 200%;/**/height: 300px;/**/top: 0%;/**/left: 23%;/**/z-index: 1;/**/}/**/.button:hover:after {/**/transform: rotate(-30deg);/**/left: 13%;/**/opacity: 0;/**/}/**/.button:hover:before {/**/transform: rotate(0deg);/**/background: rgba(255, 255, 255, 0);/**/top: -20%;/**/left: -10%;/**/}/**//**/');
    }else if($(".secon3").hasClass("active")){
        $(".botonfinal").html('*/.button {/**/border-radius: 5px;/**/}/**/@keyframes shake {/**/0% {/**/transform: rotate(0deg);/**/}/**/20% {/**/transform: rotate(4deg);/**/}/**/40% {/**/transform: rotate(-4deg);/**/}/**/60% {/**/transform: rotate(2deg);/**/}/**/80% {/**/transform: rotate(2deg);/**/}/**/100% {/**/transform: rotate(0deg);/**/}/**/}/**/.button:hover {/**/animation-name: shake;/**/animation-duration: .7s;/**/}/**/');
    }


    var a = document.getElementById("exportxt");
    a.onclick = function() {
        function downloadInnerHtml(filename, elId, mimeType) {
            var elHtml = document.getElementById(elId).innerHTML;
            var link = document.createElement('a');
            mimeType = mimeType || 'text/plain';
            link.setAttribute('download', filename);
            link.setAttribute('href', 'data:' + mimeType  +  'charset=UTF-8,' + encodeURIComponent(elHtml));
            link.click(); 
        }
        var fileName =  'framework.css';
        downloadInnerHtml(fileName, 'editor','css');
        return false;
    }
}


addEventListener('input', function() { aply(); });

var colprimary2 = 'brand-primary';
var z = new RegExp(colprimary2,"g");

var colsecondary2 = 'brand-secondary';
var y = new RegExp(colsecondary2,"g");

var colfont2 = 'font-color';
var x = new RegExp(colfont2,"g");


function aply(){
    var colprimary = $(".brand-primary").val();
    var colsecondary = $(".brand-secondary").val();
    var colfont = $(".font-color").val();

    // console.log("El color primario es: " + colprimary);
    // console.log("El color secundario es: " + colsecondary);

    var str1 = document.getElementById("modify").innerHTML;
    var str1b = document.getElementById("editor").innerHTML;
    var res1 = str1.replace(z, colprimary);
    var res1b = str1b.replace(z, colprimary);
    document.getElementById("modify").innerHTML = res1;
    document.getElementById("editor").innerHTML = res1b;

    var str2 = document.getElementById("modify").innerHTML;
    var str2b = document.getElementById("editor").innerHTML;
    var res2 = str2.replace(y, colsecondary);
    var res2b = str2b.replace(y, colsecondary);
    document.getElementById("modify").innerHTML = res2;
    document.getElementById("editor").innerHTML = res2b;

    var str3 = document.getElementById("modify").innerHTML;
    var str3b = document.getElementById("editor").innerHTML;
    var res3 = str3.replace(x, colfont);
    var res3b = str3b.replace(x, colfont);
    document.getElementById("modify").innerHTML = res3;
    document.getElementById("editor").innerHTML = res3b;



    colprimary2 = colprimary;
    z = new RegExp(colprimary2,"g");

    colsecondary2 = colsecondary;
    y = new RegExp(colsecondary2,"g");

    colfont2 = colfont;
    x = new RegExp(colfont2,"g");
}

