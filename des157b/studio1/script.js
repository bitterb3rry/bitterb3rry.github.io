(function() {
    'use strict';

    const loading = document.querySelector('.fa-compass');

    const title = document.getElementById('title')
    const myVideo = document.querySelector('#myVideo');
    const source = document.querySelectorAll('source');
    const ch1 = document.getElementById('channel1');
    const ch2 = document.getElementById('channel2');
    const ch3 = document.getElementById('channel3');

    const caption = document.getElementById('caption');

    const videos = ['media/ketchup.mp4', 'media/diffuser.mp4', 'media/tallboy.mp4']
    const webm = ['media/ketchup.webm', 'media/diffuser.webm', 'media/tallboy.webm']
    const fallback = document.getElementById('fallback');
    let index = 0;
    
    const ketchup = {
        start: [0, 2, 7],
        stop: [3, 8, 12],
        line: ['So <span>ketchup</span>,', 'go put some cheese on it,', 'get out and get your bread up']
    }

    const tallboy = {
        start: [0, 2, 7, 11],
        stop: [3, 8, 12, 14],
        line: ['You want me, I want you, baby', 'My sugarboo, I’m levitating', 'The Milky Way, we’re renegading', 'Yeah, yeah, yeah, yeah, yeah' ]
    }

    myVideo.addEventListener('playing', function() {
        loading.style.display = 'none';
    });

    /* loops the video */
    myVideo.addEventListener('ended', function() {
        myVideo.play();
    });

    const intervalID = setInterval(checkTime, 1000);

    function checkTime() {
        if (index == 0) {
            for (let i = 0; i < ketchup.start.length; i++) {
                if (ketchup.start[i] < myVideo.currentTime && myVideo.currentTime < ketchup.stop[i]) {
                    caption.innerHTML = ketchup.line[i];
                }
            }
        }

        if (index == 2) {
            for (let i = 0; i < tallboy.start.length; i++) {
                if (tallboy.start[i] < myVideo.currentTime && myVideo.currentTime < tallboy.stop[i]) {
                    caption.innerHTML = tallboy.line[i];
                }
            }
        }
    }

    ch1.addEventListener('click', function() {
        if (index != 0) {
            index = 0;
            console.log("click 1")
            source[0].setAttribute('src', videos[0]);
            source[1].setAttribute('src', webm[0]);
            fallback.setAttribute('href', videos[0]);
            title.textContent = "ketchupTV";
            myVideo.load();
            myVideo.play();
        }
        
    });

    ch2.addEventListener('click', function() {
        if (index != 1) {
            index = 1;
            console.log("click 2")
            source[0].setAttribute('src', videos[1]);
            source[1].setAttribute('src', webm[1]);
            fallback.setAttribute('href', videos[1]);
            title.textContent = "chill channel";
            myVideo.load();
            myVideo.play();
        } 
        caption.innerHTML = '<span>(chill music plays)</span>';
    });

    ch3.addEventListener('click', function() {
        if (index != 2) {
            index = 2;
            console.log("click 3")
            source[0].setAttribute('src', videos[2]);
            source[1].setAttribute('src', webm[2]);
            fallback.setAttribute('href', videos[2]);
            title.textContent = "furniture fiesta show";
            myVideo.load();
            myVideo.play();
        }  
    });

})();