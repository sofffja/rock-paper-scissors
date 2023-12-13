console.log(game())


function getComputerChoice() {
    //return either rock, paper or scissors
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    switch (computerChoice) {
        case 1:
            return 'Rock';
        break;
        case 2:
            return 'Paper';
        break;
        case 3:
            return 'Scissors';
        break;
    }
}

function playRound(playerSelection, computerSelection) {
    //compare computer choice to player selection
    //declare winner of the round
    if (playerSelection === computerSelection) {
        return 'ties';
    } else if (
        playerSelection === 'Rock' && computerSelection === 'Scissors' ||
        playerSelection === 'Paper' && computerSelection === 'Rock' ||
        playerSelection === 'Scissors' && computerSelection === 'Paper'
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function game() {
    let playerCounter = 0;
    let computerCounter = 0;
    let roundWinner;

    for (i = 1; i <= 5; i++) {
        console.log('round ' + i);

        let playerSelection = capitalize(prompt('choose your fighter: rock, paper or scissors', ''))
        let computerSelection = getComputerChoice();
        roundWinner = playRound(playerSelection, computerSelection);

        switch (roundWinner) {
            case 'ties':
                console.log(`Ties! ${playerSelection} equals ${computerSelection.toLowerCase()}. YOU ${playerCounter} - MACHINE ${computerCounter}`);
                i--;
            break;
    
            case 'player':
                playerCounter++;
                console.log(`You win! ${playerSelection} beats ${computerSelection.toLowerCase()}. YOU ${playerCounter} - MACHINE ${computerCounter}`)
            break;
    
            case 'computer':
                computerCounter++;
                console.log(`You loose! ${computerSelection} beats ${playerSelection.toLowerCase()}. YOU ${playerCounter} - MACHINE ${computerCounter}`)
        }
    }

    if (playerCounter > computerCounter) {
        return 'YOU WIN THE GAME';
    } else {
        return 'MACHINE WINS THE GAME';
    }
}

function capitalize(text) {
    return (
        text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    )
}