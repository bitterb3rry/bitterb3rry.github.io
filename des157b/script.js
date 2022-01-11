(function() {
    'use strict';

    const button = document.querySelector('button');
    const header = document.querySelector('header');
    const body = document.querySelector('body');
    const lightBanner = document.querySelector('#light');
    const darkBanner = document.querySelector('#dark');
    const sections = document.querySelectorAll('section')
    let mode = 'dark';

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            header.className = 'switch';
            body.className = 'switch';
            darkBanner.className = "show";
            lightBanner.className = 'hidden';
            button.className = 'switch';
            button.textContent = "more soup"
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'light';
        } else {
            header.removeAttribute('class');
            body.removeAttribute('class');
            darkBanner.className = "hidden";
            lightBanner.className = 'show';
            button.removeAttribute('class');
            button.textContent = "have soup"
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'dark'
        }
    })

/*     if (mode === 'dark') {
        // interval for first message
        const first = setInterval(popup1, 1000);
        // interval for second message
        const second = setInterval(popup2, 3000);
    } */
})();