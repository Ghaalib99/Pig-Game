var scores, roundScores, activePlayer, dice, gameOn;

init();

document.querySelector('.roll').addEventListener('click', function() {

        //Get a random number
        dice = Math.floor(Math.random() * 6) + 1;

        //Display result
        var diceVal = document.querySelector('.dice-img');
        diceVal.style.display = 'block';
        diceVal.src = 'img/dice-' + dice +'.png';

        //Update round score if number gotten is not 1
        if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#score-' + activePlayer).textContent = roundScore;
        } else {
        //Next player
        nextPlayer();
      }
});

document.querySelector('.hold').addEventListener('click', function() {

        //Add current score to global score
        scores[activePlayer] += roundScore;

        //Update the UI
        document.querySelector('#globalScore-' + activePlayer).textContent = scores[activePlayer];

        //Check if player wins game
        if (scores[activePlayer] >= 100) {
            document.getElementById('name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice-img').style.display = 'none';
            document.querySelector('.player-' + activePlayer).classList.add('winner');
            document.querySelector('.player-' + activePlayer).classList.remove('active');
            gameStop();
        } else {
            //Next player
            nextPlayer();
        }  
    }
);

function gameStop() {
    document.querySelector('.roll').style.display = 'none';
    document.querySelector('.hold').style.display = 'none';
};

function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.querySelector('.player-0').classList.toggle('active');
    document.querySelector('.player-1').classList.toggle('active');

    //Hide dice
    document.querySelector('.dice-img').style.display = 'none';
};

document.querySelector('.new').addEventListener('click', init );

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('.roll').style.display = 'block';
    document.querySelector('.hold').style.display = 'block';
    document.querySelector('.dice-img').style.display = 'none';
    document.getElementById('globalScore-0').textContent = '0';
    document.getElementById('globalScore-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0').classList.remove('winner');
    document.querySelector('.player-1').classList.remove('winner');
    document.querySelector('.player-0').classList.remove('active');
    document.querySelector('.player-1').classList.remove('active');
    document.querySelector('.player-0').classList.add('active');

};


