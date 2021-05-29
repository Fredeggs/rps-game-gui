let options = ['rock', 'paper', 'scissors'];
let pScore = 0;
let cScore = 0;

const playerVScomp = document.querySelector('#playerVScomp');
const whoWinsGame = document.querySelector('#whoWinsGame');
const whoWinsRound = document.querySelector('#whoWinsRound');
const gestureResult = document.createElement('div');
const declareWinGame = document.createElement('div');
const declareWinRound = document.createElement('div');

const playAgain = document.createElement('button');
playAgain.textContent = 'Play Again?';
playAgain.addEventListener('click', function() {
    document.getElementById("rockBtn").disabled = false;
    document.getElementById("paperBtn").disabled = false;
    document.getElementById("scissorsBtn").disabled = false;
    pScore = 0;
    cScore = 0;
    playerScore.textContent= 'Player Score: ' + pScore;
    computerScore.textContent= 'Computer Score: ' + cScore;
    whoWinsGame.removeChild(declareWinGame);
    whoWinsRound.removeChild(declareWinRound);
    whoWinsGame.removeChild(playAgain);
})

//Function that selects a pick for the computer
function computerPlay() {
    let computerPick = options[Math.floor(Math.random() * (options.length))]
    return computerPick;
}

function playRound(selection) {
    let computerSel = computerPlay();
    if (selection == computerSel) {
        gestureResult.textContent = ' ';
        playerVScomp.appendChild(gestureResult);
        declareWinRound.className = '';
        declareWinRound.classList.add('tieRound');
        declareWinRound.textContent = 'It\'s a Tie. No One Wins This Round!';
        whoWinsRound.appendChild(declareWinRound);
        console.log('tie');

    // Display the User won the round
    } else if (selection == 'scissors' && computerSel == 'paper' ||
               selection == 'rock' && computerSel == 'scissors' ||
               selection == 'paper' && computerSel == 'rock'){
        pScore++;
        declareWinRound.className = '';
        declareWinRound.classList.add('winRound');
        declareWinRound.textContent = 'You Won This Round!';
        whoWinsRound.appendChild(declareWinRound);
        playerScore.textContent= 'Player Score: ' + pScore;

        // Display which pick beat the other one (if there was a winner)
        if (selection == 'scissors' && computerSel == 'paper') {
            gestureResult.textContent = 'Scissors Beats Paper!';
            playerVScomp.appendChild(gestureResult);
        } else if (selection == 'rock' && computerSel == 'scissors') {
            gestureResult.textContent = 'Rock Beats Scissors!!';
            playerVScomp.appendChild(gestureResult);
        } else if (selection == 'paper' && computerSel == 'rock') {
            gestureResult.textContent = 'Paper Beats Rock!!';
            playerVScomp.appendChild(gestureResult);
        }

        // Display the User won the game
        if (pScore == 5) {
            gestureResult.textContent = ' ';
            playerVScomp.appendChild(gestureResult);
            declareWinGame.className = '';
            declareWinGame.classList.add('winGame');
            declareWinGame.textContent = 'You Won The Game!!!';
            whoWinsGame.appendChild(declareWinGame);
            whoWinsGame.appendChild(playAgain);
            document.getElementById("rockBtn").disabled = true;
            document.getElementById("paperBtn").disabled = true;
            document.getElementById("scissorsBtn").disabled = true;
        }
    
    // Display the User lost the round
    } else if (selection == 'paper' && computerSel == 'scissors' ||
            selection == 'scissors' && computerSel == 'rock' ||
            selection == 'rock' && computerSel == 'paper'){
        cScore++;
        declareWinRound.className = '';
        declareWinRound.classList.add('loseRound');
        declareWinRound.textContent = 'You Lose This Round!';
        whoWinsRound.appendChild(declareWinRound);
        computerScore.textContent= 'Computer Score: ' + cScore;

        // Display which pick beat the other one (if there was a winner)
        if (selection == 'paper' && computerSel == 'scissors' ) {
            gestureResult.textContent = 'Scissors Beats Paper!';
            playerVScomp.appendChild(gestureResult);
        } else if (selection == 'scissors' && computerSel == 'rock') {
            gestureResult.textContent = 'Rock Beats Scissors!!';
            playerVScomp.appendChild(gestureResult);
        } else if (selection == 'rock' && computerSel == 'paper') {
            gestureResult.textContent = 'Paper Beats Rock!!';
            playerVScomp.appendChild(gestureResult);
        }

        // Display the User lost the game
        if (cScore == 5) {
            gestureResult.textContent = ' ';
            playerVScomp.appendChild(gestureResult);
            declareWinGame.className = '';
            declareWinGame.classList.add('loseGame');
            declareWinGame.textContent = 'You Lose The Game Douchebag!!!';
            whoWinsGame.appendChild(declareWinGame);
            whoWinsGame.appendChild(playAgain);
            document.getElementById("rockBtn").disabled = true;
            document.getElementById("paperBtn").disabled = true;
            document.getElementById("scissorsBtn").disabled = true;
        }
    } else console.log('Something went wrong');
}

document.getElementById("rockBtn").addEventListener("click", function() {
    playRound('rock');
});
document.getElementById("paperBtn").addEventListener("click", function() {
    playRound('paper');
});
document.getElementById("scissorsBtn").addEventListener("click", function() {
    playRound('scissors');
});

const playerScore = document.querySelector('#pScore');
playerScore.textContent = 'Player Score: ' + pScore;

const computerScore = document.querySelector('#cScore');
computerScore.textContent ='Computer Score: ' + cScore;
