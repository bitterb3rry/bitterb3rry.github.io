(function() {
    'use strict';
    console.log('reading js');

    /* color definitions */
    const red = '#BF4141';
    const orange = '#DB8739';
    const yellow = '#EFD26D';
    const green = '#5FB052';
    const blue = '#5CA1E0';
    const purple = '#8547D3';
    const pink = '#DF68B7';
    const brown = '#996B40';
    const black = '#212121';
    const white = '#F0F0F0';

    /* user input variables */
    let wave1;
    let wave2;
    let wave3;

    const myForm = document.querySelector('#myForm');
    /* access variables to p tags in the html */
    const nameVal = document.querySelector('#nameSpan');
    const colorsP1 = document.querySelector('#colorP1');
    const colorsP2 = document.querySelector('#colorP2');
    const colorsP3 = document.querySelector('#colorP3');
    const drinkVal = document.querySelector('#drinkSpan');
    const placeVal = document.querySelector('#placeSpan');

    /* color select left to right*/
    const colorSel1 = document.getElementById('color1');
    const colorSel2 = document.getElementById('color2');
    const colorSel3 = document.getElementById('color3');


    function getColorCompliment(c, w) {
        switch(c) {
            case red:
                w = "./media/red.png";
                return "you're' as bold as red";
            case orange:
                w = "./media/orange.png";
                return "you're orange-inal";
            case yellow:
                w = "./media/yellow.png";
                return "your smile is as bright as the sun";
            case green:
                w = "./media/green.png";
                return "green";
            case blue:
                w = "./media/blue.png";
                return "you make my blues go away";
            case purple:
                w = "./media/purple.png";
                return "they say purple is brilliant and so are you";
            case pink:
                w = "./media/pink.png";
                return "i pink-y promise these compliments are true";
            case brown:
                w = "./media/brown.png";
                return "brown";
            case black:
                w = "./media/black.png";
                return "black";
            case white:
                w = "./media/white.png";
                return "white";
        };
    }
    
    colorSel1.addEventListener('change', function(e) {
        e.preventDefault();
        console.log("color1 changed");

        colorSel1.style.borderBlockColor = colorSel1.value;
    });

    colorSel2.addEventListener('change', function(e) {
        e.preventDefault();
        console.log("color2 changed");

        colorSel2.style.borderBlockColor = colorSel2.value;
    });

    colorSel3.addEventListener('change', function(e) {
        e.preventDefault();
        console.log("color3 changed");

        colorSel3.style.borderBlockColor = colorSel3.value;
    });

    /* TODO: reset select bubbles */
    myForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log("submitted");

        /* overlay operations */
        document.querySelector('.close').addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('overlay').className = 'hidden';
        });
    
        document.addEventListener('keydown', function(e) {
            if (e.key == 'Escape') {
                document.getElementById('overlay').className = "hidden";
            }
        })

        /* opens the overlay */
        document.getElementById('overlay').className = 'showing';
        console.log(document.getElementById('overlay').className);

        let name = document.querySelector('#name').value;
    
        if (name) {
            nameVal.textContent = name;
        } else {
            nameVal.textContent = 'Please provide a name!';
        }

        let color1 = colorSel1.value;
        let color2 = colorSel2.value;
        let color3 = colorSel3.value;

        if (color1 && color2 && color3) {
            console.log("getting compliments");
            colorsP1.textContent = getColorCompliment(color1, wave1);
            colorsP1.style.backgroundColor = color1;
            document.getElementById("w1").style.backgroundImage = wave1;
            colorsP2.textContent = getColorCompliment(color2, wave2);
            colorsP2.style.backgroundColor = color2;
            document.getElementById("w2").style.backgroundImage = wave2;
            colorsP3.textContent = getColorCompliment(color3, wave3);
            colorsP3.style.backgroundColor = color3;
            document.getElementById("w3").style.backgroundImage = wave3;
            console.log(color1, color2, color3);
            console.log(getColorCompliment(color1), getColorCompliment(color2), getColorCompliment(color3));
        } 

        let drink = document.querySelector('#drink').value;
    
        if (drink) {
            drinkVal.textContent = drink;
        } else {
            drinkVal.textContent = 'Please provide a drink!';
        }

        let place = document.querySelector('#place').value;
    
        if (place) {
            placeVal.textContent = place;
        } else {
            placeVal.textContent = 'Please provide a place!';
        }

        const formData = document.querySelectorAll("input[type=text]");
        for (let eachField of formData) {
            eachField.value = '';
        }
        
    });

}());