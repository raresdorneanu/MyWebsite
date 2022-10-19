// var id = null;
// function biggerPicture() {
//     var elem = document.getElementById("hero-picture");
//     var pos = 0;
//     clearInterval(id);
//     id = setInterval(frame, 1);
//     function frame() {
//         if (pos == 200) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.width = pos + "px";
//             elem.style.height = pos + "px";
//         }
//     }
// }

// biggerPicture();

function openProject(evt, projectName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(projectName).style.display = "flex";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

let counts = setInterval(updated, 300);
let upto = 0;
function updated() {
    var count = document.getElementById("counter");
    count.innerHTML = ++upto;
    if (upto === 5) {
        clearInterval(counts);
    }
}

var elements;
var windowHeight;

function init() {
    elements = document.querySelectorAll(".noanimfornow");
    windowHeight = window.innerHeight / 1.2;
}

function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
        //console.log(positionFromTop,windowHeight);
        if (positionFromTop - windowHeight <= 0) {
            element.classList.add("animateme");
            element.classList.remove("noanimfornow");
        }
        if (positionFromTop - windowHeight > 0) {
            /*newly added:Edit2*/
            element.classList.add("noanimfornow");
            element.classList.remove("animateme");
        }
    }
}

window.addEventListener("scroll", checkPosition);
window.addEventListener("resize", init);

init();
checkPosition();


const heroPicture = document.querySelector('#hero-picture')
setTimeout(() => {
    heroPicture.style.visibility = 'visible';

    // 👇️ if you used `display` to hide element
    // el.style.display = 'block';
}, 500);

const icon1 = document.querySelector('#linkedIn')
setTimeout(() => {
    icon1.style.visibility = 'visible';

    // 👇️ if you used `display` to hide element
    // el.style.display = 'block';
}, 1000);

const icon2 = document.querySelector('#gitHub')
setTimeout(() => {
    icon2.style.visibility = 'visible';

    // 👇️ if you used `display` to hide element
    // el.style.display = 'block';
}, 1500);



const years = document.querySelector('.about-me-container')
setTimeout(() => {
    years.style.visibility = 'visible';

    // 👇️ if you used `display` to hide element
    // el.style.display = 'block';
}, 3000);

const footer = document.querySelector('.footer')
setTimeout(() => {
    footer.style.visibility = 'visible';

    // 👇️ if you used `display` to hide element
    // el.style.display = 'block';
}, 4000);

$(document).ready(function () {
    $('#hero-picture').mouseover(function () {
        $('.hidden-pic').css('display', 'flex');
        $('.hidden-pic').animate({ width: '300px' }, '400');
    });
    $('#hero-picture').mouseout(function () {
        $('.hidden-pic').css('display', 'none');
        $('.hidden-pic').animate({ width: '0px' }, 0);
    });

    

});

$("#scrollAbout").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".about-me-container").offset().top
    }, 500);
});

$("#scrollContact").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".footer").offset().top
    }, 500);
});

$("#scrollTop").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".fixed-bar").offset().top
    }, 500);
});




