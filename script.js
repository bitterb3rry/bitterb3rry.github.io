(function() {
    'use strict';
    console.log('reading js');

    /* var blockbusterSec = document.querySelector('#blockbuster-video section');
    var blockbusterArt = document.querySelector('#blockbuster-video article');

    var magicHourSec = document.querySelector('#magic-hour section');
    var magicHourArt = document.querySelector('#magic-hour article');

    magicHourSec.addEventListener('mouseover', (event) => {
        event.preventDefault();
        console.log('hovering');
        magicHourArt.style.animation = "articleUp 0.5s ease 0s 1 normal forwards";
    });

    blockbusterSec.addEventListener('mouseout', (event) => {
        event.preventDefault();
        console.log('hovering');
        blockbusterArt.style.animation = "articleDown 3s ease 0s 1 normal forwards";
    });

    blockbusterSec.addEventListener('mouseover', function(event) {
        event.preventDefault();
        console.log('hovering');
        blockbusterArt.style.animation = "articleUp 0.5s ease 0s 1 normal forwards";
    });

    magicHourSec.addEventListener('mouseout', function(event) {
        event.preventDefault();
        console.log('hovering');
        magicHourArt.style.animation = "articleDown 3s ease 0s 1 normal forwards";
    }); */

    var mobileNav = document.getElementById('mobile-nav');

    document.getElementById('hamburger').addEventListener('click', function () {
        //mobileNav.style.transform = "translate(0, 400px)";
        mobileNav.style.animation = "menuDown 0.5s ease 0s 1 normal forwards";
    });

    document.getElementById('close-hamburger').addEventListener('click', function () {
        //mobileNav.style.transform = "translate(0, -400px)";
        mobileNav.style.animation = "menuUp 0.5s ease 0s 1 normal forwards";
    });

}());