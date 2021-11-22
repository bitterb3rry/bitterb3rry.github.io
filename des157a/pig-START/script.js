(function() {
    'use strict';
    console.log('reading js');

    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score1 = document.getElementById('score1');
    const score2 = document.getElementById('score2');
    const actionArea = document.getElementById('actions');
    const race = document.getElementById('race');
    const car1 = document.getElementById('car1');
    const car2 = document.getElementById('car2');
    const board = document.getElementById('board');

    var gameData = {
        dice: ['images/die1.svg', 'images/die2.svg', 'images/die3.svg', 
            'images/die4.svg', 'images/die5.svg', 'images/die6.svg'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        cars: [car1, car2],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    console.log(gameData)

    startGame.addEventListener('click', function() {
        console.log("clicked to start");
        // select random player
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        // start game
        /* gameControl.innerHTML = '<h2>The Game Has Started</h2>'; */
/*         gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>'; */

        gameControl.className = 'hidden';
        board.className = 'show';
        /* race.className = 'show'; */

/*         document.getElementById('quit').addEventListener('click', function() {
            location.reload();
        }); */

        setUpTurn();
    });

    function setUpTurn() {
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>'
        document.getElementById('roll').addEventListener('click', function() {
            throwDice();
        });
    }

    function throwDice() {
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"><img src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if (gameData.rollSum === 2) {
            console.log('Snake eyes were rolled');
            game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
            gameData.score[gameData.index] = 0;
            gameData.cars[gameData.index].style.marginLeft = '40px';
            // switch player
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            setTimeout(setUpTurn, 2000);
        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            console.log('one of the two dice was a 1');
            // switch player
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);
        } else {
            console.log('the game proceeds');
            gameData.score[gameData.index] += gameData.rollSum;
            
            // calculate how much the car should move
            var newMargin = gameData.score[gameData.index] * 30;
            console.log(`marginleft: ${gameData.cars[gameData.index].style.marginLeft}`);
            console.log(`newmargin: ${newMargin}px`);

            if ( newMargin > 900) {
                gameData.cars[gameData.index].style.marginLeft = '900px';
            } else {
                gameData.cars[gameData.index].style.marginLeft = `${newMargin}px`;
            }            

            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

            document.getElementById('rollagain').addEventListener('click', function() {
                throwDice();
            });

            document.getElementById('pass').addEventListener('click', function() {
                // switch player
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });
        }

        checkWinningCondition();
    }

    // check winning got the player that just went 
    function checkWinningCondition() {
        console.log("checking winning");
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            //display results to game div
            game.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML = '';
            /* gameControl.innerHTML = '<h2>The Game Has Ended</h2>'; */
            gameControl.className = 'show';
            gameControl.style.marginTop = '0';
            gameControl.innerHTML = '<button id="quit">Start a New Game?</button>';

            document.getElementById('quit').addEventListener('click', function() {
                location.reload();
            });
        } /* else {
            // show current score
            showCurrentScore();
        } */

        showCurrentScore();

        function showCurrentScore() {
            score1.innerHTML = `${gameData.score[0]}`
            score2.innerHTML = `${gameData.score[1]}`
        }
    }
}());