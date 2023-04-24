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
    document.getElementById(projectName).style.display = "block";
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

// var elements;
// var windowHeight;

// function init() {
//     elements = document.querySelectorAll(".noanimfornow");
//     windowHeight = window.innerHeight / 1.2;
// }

// function checkPosition() {
//     for (var i = 0; i < elements.length; i++) {
//         var element = elements[i];
//         var positionFromTop = elements[i].getBoundingClientRect().top;
//         //console.log(positionFromTop,windowHeight);
//         if (positionFromTop - windowHeight <= 0) {
//             element.classList.add("animateme");
//             element.classList.remove("noanimfornow");
//         }
//         if (positionFromTop - windowHeight > 0) {
//             /*newly added:Edit2*/
//             element.classList.add("noanimfornow");
//             element.classList.remove("animateme");
//         }
//     }
// }

// window.addEventListener("scroll", checkPosition);
// window.addEventListener("resize", init);

// init();
// checkPosition();

// const icon1 = document.querySelector('#linkedIn')
// setTimeout(() => {
//     icon1.style.visibility = 'visible';

//     // 👇️ if you used `display` to hide element
//     // el.style.display = 'block';
// }, 1500);

// const icon2 = document.querySelector('#gitHub')
// setTimeout(() => {
//     icon2.style.visibility = 'visible';

//     // 👇️ if you used `display` to hide element
//     // el.style.display = 'block';
// }, 2000);



// const years = document.querySelector('.about-me-container')
// setTimeout(() => {
//     years.style.visibility = 'visible';

//     // 👇️ if you used `display` to hide element
//     // el.style.display = 'block';
// }, 3000);

// const footer = document.querySelector('.footer')
// setTimeout(() => {
//     footer.style.visibility = 'visible';

//     // 👇️ if you used `display` to hide element
//     // el.style.display = 'block';
// }, 4000);



$("#scrollAbout").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".about-me-container").offset().top
    }, 500);
});

$("#scrollContact").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".footer").offset().top
    }, 500);
});

$("#scrollTop").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".hero-container").offset().top
    }, 500);
});

$("#scrollProj").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".projects-container").offset().top
    }, 500);
});


var i = 0;
var txt = 'DORNEANU'; /* The text */

var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {

    if (i < txt.length) {
        document.querySelector(".title").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
var j = 0;

var txt2 = 'RAREȘ'; /* The text */
var speed2 = 100; /* The speed/duration of the effect in milliseconds */
function typeWriter2() {

    if (j < txt2.length) {
        document.querySelector(".title2").innerHTML += txt2.charAt(j);
        j++;
        setTimeout(typeWriter2, speed2);
    }
}

$('#invBtn').trigger('click');

function autoClick() {
    $('#invBtn2').trigger('click');
}

$(document).ready(function () {
    $('#hero-picture').mouseover(function () {
        $('.hidden-pic').css('display', 'flex');
        $('.hidden-pic').animate({ width: '300px' }, '400');
    });
    $('#hero-picture').mouseout(function () {
        $('.hidden-pic').css('display', 'none');
        $('.hidden-pic').animate({ width: '0px' }, 0);
    });

    var myTimeout = setTimeout(autoClick, 1000);

    $(function () {
        function stayDown() {
            $('.title').animate({ lineHeight: 200 }, 500)
        }

        function stayUp() {
            $('.title').animate({ lineHeight: 60 }, 1000)
        }

        function stayDown2() {
            $('.title2').animate({ lineHeight: 200 }, 500)
        }

        function stayUp2() {
            $('.title2').animate({ lineHeight: 60 }, 1000)
        }


        setTimeout(function loop() {

            $('.title')
                .animate({ lineHeight: 200 }, 1000)
            setTimeout(stayDown, 1000);
            setTimeout(stayUp, 1000);
            $('.front-end').animate({ fontSize: 48 }, 500);
            $('.front-end').animate({ fontSize: 24 }, 1000);

            $('.title2')
                .animate({ lineHeight: 200 }, 1000)
            setTimeout(stayDown2, 1000);
            setTimeout(stayUp2, 1000);

        }, 1800)

    });

    

        $('.tabs').css('opacity', '0')
        .waypoint(function (direction) {
            if (direction === 'down') {
                $(this.element).addClass('animate__lightSpeedInLeft');
            }
        }, {
            offset: '50%'
        })

        $('.projects').css('opacity', '0')
        .waypoint(function (direction) {
            if (direction === 'down') {
                $(this.element).addClass('animate__jackInTheBox');
            }
        }, {
            offset: '60%'
        })

        $('.projects-title h4').css('opacity', '0')
        .waypoint(function (direction) {
            if (direction === 'down') {
                $(this.element).addClass('animate__zoomInUp');
            }
        }, {
            offset: '40%'
        })

        $('.projects-title h2')
        .waypoint(function (direction) {
            if (direction === 'down') {
                $(this.element).addClass('animate__backInUp');
            }
        }, {
            offset: '90%'
        })

        $('.counter-container').css('opacity', '0')
        .waypoint(function (direction) {
            if (direction === 'down') {
                $(this.element).addClass('animate__flipInX');
            }
        }, {
            offset: '60%'
        })

        $('.learning-container').css('opacity', '0')
        .waypoint(function (direction) {
            if (direction === 'down') {
                $(this.element).addClass('animate__fadeInLeft');
            }
        }, {
            offset: '60%'
        })

        $('.contact').css('opacity', '0')
        .waypoint(function (direction) {
            if (direction === 'down') {
                $(this.element).addClass('animate__backInUp');
            }
        }, {
            offset: '80%'
        })

        $('.span-wrap-1').css('opacity', '0')
        .waypoint(function (direction) {
            if (direction === 'down') {
                $(this.element).addClass('animate__rotateInDownLeft');
            }
        }, {
            offset: '60%'
        })

        $('.span-wrap-2').css('opacity', '0')
        .waypoint(function (direction) {
            if (direction === 'down') {
                $(this.element).addClass('animate__bounceInDown');
            }
        }, {
            offset: '60%'
        })

        $('.span-wrap-3').css('opacity', '0')
        .waypoint(function (direction) {
            if (direction === 'down') {
                $(this.element).addClass('animate__rotateInDownRight');
            }
        }, {
            offset: '60%'
        })

        

       

     $('.project-info').mouseover(function () {
        $('.project-picture-grocery').addClass('animate__backOutLeft')
        if($('.project-picture-grocery').hasClass('animate__bounceInLeft')){
            $('.project-picture-grocery').removeClass('animate__bounceInLeft')
            
        }
    });
    $('.project-info').mouseout(function () {
        $('.project-picture-grocery').removeClass('animate__backOutLeft')
        $('.project-picture-grocery').addClass('animate__bounceInLeft')
    });

    $('.project-info').mouseover(function () {
        $('.project-picture-calculator').addClass('animate__backOutLeft')
        if($('.project-picture-calculator').hasClass('animate__bounceInLeft')){
            $('.project-picture-calculator').removeClass('animate__bounceInLeft')
            
        }
    });
    $('.project-info').mouseout(function () {
        $('.project-picture-calculator').removeClass('animate__backOutLeft')
        $('.project-picture-calculator').addClass('animate__bounceInLeft')
    });

    $('.project-info').mouseover(function () {
        $('.project-picture-food').addClass('animate__backOutLeft')
        if($('.project-picture-food').hasClass('animate__bounceInLeft')){
            $('.project-picture-food').removeClass('animate__bounceInLeft')
            
        }
    });
    $('.project-info').mouseout(function () {
        $('.project-picture-food').removeClass('animate__backOutLeft')
        $('.project-picture-food').addClass('animate__bounceInLeft')
    });
    var projectLink = $('.project-link');
    function looping() {

        projectLink.addClass('animate__pulse');

        setTimeout(function remove() {
            if (projectLink.hasClass('animate__pulse')) {
                projectLink.removeClass('animate__pulse')
            }
        }, 1000);
    }
    setInterval(looping, 3000);

    $('.span-pink a').mouseover(function (){
        $('.hover-line').animate({width: '50px',
        top: 'calc((100% / 2) + 50px)'}, 300);
        $('.span-pink').animate({top: '52%'}, 300);
    });

    $('.span-pink a').mouseout(function (){
        $('.hover-line').animate({width: '0px',top: 'calc(100% / 2)'}, 300);
        $('.span-pink').animate({top: '50%'}, 300);
    });

});









