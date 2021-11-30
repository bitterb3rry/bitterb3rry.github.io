(function() {
    'use strict';
    console.log("reading js yeh");

    /* const page = document.scrollingElement || document.documentElement;
    page.addEventListener('wheel', function(event) {
        if(!event.deltaY) {
            event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
            event.preventDefault();
        }
    }); */

    let img1 = document.getElementById("dorm");
    let img2 = document.getElementById("sf");
    let img3 = document.getElementById("sutro");
    let img4 = document.getElementById("apt");

    /* display clear image */
    img1.addEventListener('mouseover', function(e) {
    
        img1.src = "../images/dorm-500.png";
        document.body.style.cursor = "pointer";
    });

    img2.addEventListener('mouseover', function(e) {
        img2.src = "../images/sf-500.jpg";
        document.body.style.cursor = "pointer";
    });

    img3.addEventListener('mouseover', function(e) {
        img3.src = "../images/sutro-500.png";
        document.body.style.cursor = "pointer";
    });

    img4.addEventListener('mouseover', function(e) {
        img4.src = "../images/apartment-500.jpg";
        document.body.style.cursor = "pointer";
    });

    /* back to blur image */
    img1.addEventListener('mouseout', function(e) {
        img1.src = "../images/dorm-52-blur-300.png";
        document.body.style.cursor = "default";
    });

    img2.addEventListener('mouseout', function(e) {
        img2.src = "../images/sf-80-blur-500.png";
        document.body.style.cursor = "default";
    });

    img3.addEventListener('mouseout', function(e) {
        img3.src = "../images/sutro-95-blur-500.png";
        document.body.style.cursor = "default";
    });

    img4.addEventListener('mouseout', function(e) {
        img4.src = "../images/apartment-100-blur-500.png";
        document.body.style.cursor = "default";
    });

    const progressBar = document.getElementById("progress-bar");
    const wrap = document.querySelector('#scroll-wrapper');

    wrap.addEventListener('wheel', function(event) {
        event.preventDefault();
        wrap.scrollLeft += event.deltaY;

        console.log("left: " + wrap.scrollLeft + ", scrollwidth: " + wrap.scrollWidth + " , clientWidth: " + wrap.clientWidth);

        const distanceFromPageRight = document.body.scrollLeft || document.documentElement.scrollLeft;
        const width = document.documentElement.scrollWidth - document.documentElement.clientWidth;
        const scrolled = (distanceFromPageRight / width) * 100;
        progressBar.style.width =  `${scrolled}%`;
    });

}());

