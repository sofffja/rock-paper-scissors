let playerSelection = prompt('choose your fighter: rock, paper or scissors', '')
alert(playRound(playerSelection, getComputerChoice()))


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
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);

    if (playerSelection === computerSelection) {
        return `Ties! ${playerSelection} equals ${computerSelection.toLowerCase()}`
    } else if (
        playerSelection === 'Rock' && computerSelection === 'Scissors' ||
        playerSelection === 'Paper' && computerSelection === 'Rock' ||
        playerSelection === 'Scissors' && computerSelection === 'Paper'
    ) {
        return `You win! ${playerSelection} beats ${computerSelection.toLowerCase()}`
    } else {
        return `You loose! ${computerSelection} beats ${playerSelection.toLowerCase()}`
    }
}

function capitalize(text) {
    return (
        text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    )
}