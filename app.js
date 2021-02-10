const game = () => {
    let pScore = 0;
    let cScore = 0;
    let newGame;
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        const playerSc = document.querySelector('.player-score');
        const computerSc = document.querySelector('.computer-score');
        newGame = document.querySelector('.New-game');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
            playerSc.classList.add('fadeIn');
            computerSc.classList.add('fadeIn');
        });
    };
    const playMatch = () => {
        const options = document.querySelectorAll('.option button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', () => hand.style.animation = "");
        });

        const computerOptions = ["rock", "paper", "scissors"];
        options.forEach(element => {
            element.addEventListener('click', () => {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    computerHands(element.textContent, computerChoice);
                    if (pScore != 0 || cScore != 0)
                        newGame.classList.add('fadeInBtn');
                    newGame.addEventListener('click', () => { 
                        cScore = 0;
                         pScore = 0;
                          updateScore(); 
                          newGame.classList.remove('fadeInBtn');
                          playerHand.src = `./assets/rock.png`;
                    computerHand.src = `./assets/rock.png`;
                           });
                    playerHand.src = `./assets/${element.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const computerHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');

        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie';
            return;
        }
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'Computer wins';
                cScore++; updateScore();
                return;
            }
        }
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Computer wins';
                cScore++; updateScore();
                return;
            }
            else {
                winner.textContent = 'Player wins';
                pScore++; updateScore();
                return;
            }
        }
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Computer wins';
                cScore++; updateScore();
                return;
            }
            else {
                winner.textContent = 'Player wins';
                pScore++; updateScore();
                return;
            }
        }
    }

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    playMatch();
    startGame();

}

game();