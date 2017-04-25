function changeTopImage(whichpic) {
    var source = whichpic.getAttribute("href"); //getting attribute of picture i want to replace the placeholder with
    var topimage = document.getElementById("topimage"); //getting id of element (in this case id is topimage which is the id of the img tag)
    topimage.setAttribute("src", source); //setting attribute of the top image. This function targets the src of the img tag and replaces that src with the intended source
}

function openMailClient() {
    window.location = "mailto:rajsaha@outlook.com";
}

var rotationDegree = 0;

$(document).ready(function() {
    $("#square").click(function() {
        rotationDegree += 90;
        $('#square').css('transform', 'rotate(' + rotationDegree + 'deg)');

        if (rotationDegree == 90) {
            $('.box-intro').css('background-color', '#90CAF9');
            $('.semiCircle1').css('transform', 'rotate(' + 180 + 'deg)');
            setTimeout(function() {
                $('.semiCircle1').attr('src', 'images/android.svg');
                $('.semiCircle1').css('transform', 'rotate(' + 360 + 'deg)');
                $('.box-intro-subtitle').text("I'm an Android Developer");
                $('.box-intro').css({
                    'background-image': 'url(images/mountains-summer.svg), linear-gradient(#2BC0E4,#EAECC6)'
                });
                $('#textlogo').css('fill','#2CC0E4');
            }, 1000);
        } else if (rotationDegree == 180) {
            $('.semiCircle1').css('transform', 'rotate(' + 180 + 'deg)');
            setTimeout(function() {
                $('.semiCircle1').attr('src', 'images/musician.svg');
                $('.semiCircle1').css('transform', 'rotate(' + 360 + 'deg)');
                $('.box-intro-subtitle').text("I'm a Musician");
                $('.box-intro').css({
                    'background-image': 'url(images/mountains-autumn.svg), linear-gradient(#AFD1B8,#FEF7C1)'
                });
                $('#textlogo').css('fill','#AFD1B8');
            }, 1000);
        } else if (rotationDegree == 270) {
            $('.semiCircle1').css('transform', 'rotate(' + 180 + 'deg)');
            setTimeout(function() {
                $('.semiCircle1').attr('src', 'images/gamerv3.svg');
                $('.semiCircle1').css('transform', 'rotate(' + 360 + 'deg)');
                $('.box-intro-subtitle').text("I'm a Gamer");
                $('.box-intro').css({
                    'background-image': 'url(images/mountains-night.svg), linear-gradient(#19547b,#ffd89b)'
                });
                $('#textlogo').css('fill','#19547B');
            }, 1000);
        } else if (rotationDegree == 360) {
            $('.semiCircle1').css('transform', 'rotate(' + 180 + 'deg)');
            setTimeout(function() {
                $('.semiCircle1').attr('src', 'images/semiCircle1.svg');
                $('.semiCircle1').css('transform', 'rotate(' + 360 + 'deg)');
                $('.box-intro-subtitle').text("I'm a Web Developer");
                $('.box-intro').css({
                    'background-image': 'url(images/mountains.svg), linear-gradient(#F44336,#673AB7)'
                });
            }, 1000);
        }

        if (rotationDegree == 360) {
            rotationDegree = 0;
        }
    });

    $(window).scroll(function() {
        var hT = $('#ground').offset().top,
            hH = $('#ground').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        console.log((hT - wH), wS);
        if (wS > (hT + hH - wH)) {
            $('#rocket').attr('src', 'images/rocket.svg');
            $('#rocket').css('animation-name', 'rocket_launch');
            $('#rocket').css('animation-duration', '7s');
            $('#rocket').css('animation-fill-mode', 'forwards');
            $('#rocket').css('animation-timing-function', 'ease-in-out');
            $('#rocket').css('animation-delay', '0.5s');
            $('#smoke-1').css('visibility', 'visible');
            $('#smoke-1').css('animation', 'smoke_trail_1 7s ease-in, smoke_trail_dissipate 7s ease-out');
            $('#smoke-1').css('-webkit-animation', 'smoke_trail_1 7s ease-in, smoke_trail_dissipate 7s ease-out');
            $('#smoke-1').css('-moz-animation', 'smoke_trail_1 7s ease-in, smoke_trail_dissipate 7s ease-out');
            $('#smoke-1').css('animation-fill-mode', 'forwards');
            setTimeout(function() {
                $('#smoke-2').css('visibility', 'visible');
                $('#smoke-2').css('animation', 'smoke_trail_1 7s ease-in, smoke_trail_dissipate 7s ease-out');
                $('#smoke-2').css('-webkit-animation', 'smoke_trail_1 7s ease-in, smoke_trail_dissipate 7s ease-out');
                $('#smoke-2').css('-moz-animation', 'smoke_trail_1 7s ease-in, smoke_trail_dissipate 7s ease-out');
                $('#smoke-2').css('animation-fill-mode', 'forwards');
            }, 1000);

            setTimeout(function() {
                $('#smoke-3').css('visibility', 'visible');
                $('#smoke-3').css('animation', 'smoke_trail_1 7s ease-in, smoke_trail_dissipate 7s ease-out');
                $('#smoke-3').css('-webkit-animation', 'smoke_trail_1 7s ease-in, smoke_trail_dissipate 7s ease-out');
                $('#smoke-3').css('-moz-animation', 'smoke_trail_1 7s ease-in, smoke_trail_dissipate 7s ease-out');
                $('#smoke-3').css('animation-fill-mode', 'forwards');
            }, 1200);

            setTimeout(function() {
                $('#something-beautiful-p').css('opacity', '1.0');
            }, 3000);
        }
    });

    $('#aristotle').mouseenter(function() {
        $('#portrait').attr('src', 'images/aristotlev2.svg');
        $('#speech-bubble').css('visibility', 'visible');
    });

    $('#aristotle').mouseleave(function() {
        $('#portrait').attr('src', 'images/portraitv2.svg');
        $('#speech-bubble').css('visibility', 'hidden');
    });

});
