const boyn1 = document.getElementById('boyn1');
const boyname = document.getElementById('boyname');
const girlname = document.getElementById('girlname');
const girln1 = document.getElementById('girln1');
const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const out1 = document.getElementById('out1');
const out2 = document.getElementById('out2');
const textpre1 = document.getElementById('textpre1');
const textpre2 = document.getElementById('textpre2');
const textpre3 = document.getElementById('textpre3');
const textpre4 = document.getElementById('textpre4');

function fun1() {
    out1.innerHTML = boyn1.value;
    out2.innerHTML = girln1.value;
}
btn.addEventListener('click', fun1);

// menu
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// colorpicker
function myFunction1() {
    var x = document.getElementById("myColor").value;
    document.getElementById("demo").innerHTML = x;

}
btn1.addEventListener('click', myFunction2);
// text Color
function myFunction2() {
    document.getElementById("out1").style.color = document.getElementById("myColor").value;
    document.getElementById("out2").style.color = document.getElementById("myColor").value;
}

function myFunction3() {
    var x = document.getElementById("mybgColor").value;
    document.getElementById("demo2").innerHTML = x;

}
btn2.addEventListener('click', myFunction4);
// bg Color
function myFunction4() {
    document.getElementById("boyname").style.backgroundColor = document.getElementById("mybgColor").value;
    document.getElementById("girlname").style.backgroundColor = document.getElementById("mybgColor").value;
}

function funA() {
    document.getElementById("bgpre").src = 'bg1.jpeg';
}

function fun2() {
    document.getElementById("bgpre").src = 'bg2.jpg';
}

function fun3() {
    document.getElementById("bgpre").src = 'bg3.jpeg';
}

function fun4() {
    document.getElementById("bgpre").src = 'bg4.jpg';
}

function fun5() {
    document.getElementById("bgpre").src = 'bg5.jpg';
}

function fun6() {
    document.getElementById("bgpre").src = 'bg6.jpg';
}

function fun7() {
    document.getElementById("bgpre").src = 'bg7.jpg';
}

function fun8() {
    document.getElementById("bgpre").src = 'bg8.png';
}

function fun9() {
    document.getElementById("bgpre").src = 'bg9.jpg';
}

function fun10() {
    textpre1.innerHTML = boyn1.value;
    document.getElementById("textpre1").style.color = document.getElementById("myColor").value;
    textpre2.innerHTML = "WEDS";
    document.getElementById("textpre2").style.color = document.getElementById("myColor").value;
    textpre3.innerHTML = girln1.value;
    document.getElementById("textpre3").style.color = document.getElementById("myColor").value;
    textpre4.innerHTML = "And now these three remain: faith, hope and love. But the greatest of these is love.Wishing you a long and happy marriage.";
    document.getElementById("textpre4").style.color = 'red';
}

function codespeedy() {
    var print_div = document.getElementById("Bg-Cover");
    var print_area = window.open();
    print_area.document.write(print_div.innerHTML);
    print_area.document.close();
    print_area.focus();
    print_area.print();
    print_area.close();
    // This is the code print a particular div element
}