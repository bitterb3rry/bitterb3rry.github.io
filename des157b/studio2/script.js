(function() {
    'use strict';

    async function getData() {
        const data = await fetch(`./data.json`);
        const descriptions = await data.json();
        console.log(descriptions);
        document.querySelector('#times').innerHTML =  showTimes(descriptions);
    }

/*     function showTimes(data) {
        let section = document.getElementById('times');
        for (let key in data) {
            const article = document.createElement('article');
            const h2 = document.createElement('h2');
            const time = document.createTextNode(`"${key}"`);
            h2.appendChild(time);
            const p = document.createElement('p');
            const des = document.createTextNode(data[key]);
            p.appendChild(des);
            article.append(h2);
            article.append(p);
            section.append(article);
        }

    }
 */

    function showTimes(data) {
        let html = '';
        for (let key in data) {
            html += `<article class="energy${data[key].energy}">`;
            html += `<h2>"${key}"</h2>`;
            html += `<p> ${data[key].log} </p>`;
            html += '</article>';
        }
        return html; 
    }

    getData();
})();