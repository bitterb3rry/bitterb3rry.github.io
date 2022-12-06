(function() {
    'use strict';
    console.log('reading js');
    
    var mobileNav = document.getElementById('mobile-nav');

    document.getElementById('hamburger').addEventListener('click', function () {
        //mobileNav.style.transform = "translate(0, 400px)";
        mobileNav.style.display = "block";
        mobileNav.style.animation = "menuDown 0.5s ease 0s 1 normal forwards";
    });

    document.getElementById('close-hamburger').addEventListener('click', function () {
        //mobileNav.style.transform = "translate(0, -400px)";
        mobileNav.style.animation = "menuUp 0.5s ease 0s 1 normal forwards";
        mobileNav.style.display = "hidden";
    });

}());