/* (function() {
    'use strict';
    console.log("reading js");

    const page = document.scrollingElement || document.documentElement;
    page.addEventListener('wheel', function(event) {
        if(!event.deltaY) {
            event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
            event.preventDefault();
        }
    });

}());

 */