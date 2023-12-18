let roundCounter = 0;
let playerScore = 0;
let computerScore = 0;
let playerSelection;

let playerButtons = document.querySelector('.player-buttons')
let resultsDiv = document.querySelector('.results')
let playerScoreP = document.querySelector('.player')
let computerScoreP = document.querySelector('.computer')

playerButtons.addEventListener('click', (event) => {
	playerSelection = event.target.id;

	roundCounter < 5 ?
		game(playerSelection) :
		resultsDiv.textContent = endGame();
});



function playRound(playerSelection, computerSelection) {
	resultsDiv.style.backgroundColor = '#171717'
	playerSelection = capitalize(playerSelection);

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
};

function game(playerSelection) {
	let roundWinner;

	let computerSelection = getComputerChoice();
	playerSelection = capitalize(playerSelection);
	
	roundWinner = playRound(playerSelection, computerSelection);

	switch (roundWinner) {
		case 'ties':
			resultsDiv.textContent = `Ties! ${playerSelection} equals ${computerSelection.toLowerCase()}`;
		break;

		case 'player':
			playerScore++;
			resultsDiv.textContent = `You win! ${playerSelection} beats ${computerSelection.toLowerCase()}`;
			roundCounter++;
		break;

		case 'computer':
			computerScore++;
			resultsDiv.textContent = `You loose! ${computerSelection} beats ${playerSelection.toLowerCase()}`;
			roundCounter++;
		break;
	};

	playerScoreP.textContent = playerScore;
	computerScoreP.textContent = computerScore;
};

function endGame() {
	let result;

	if (playerScore > computerScore) {
		result = 'YOU WIN THE GAME';
		resultsDiv.style.backgroundColor = 'blue';
	} else {
		result = 'MACHINE WINS THE GAME';
		resultsDiv.style.backgroundColor = 'red';
	};

	roundCounter = 0;
	playerScore = 0;
	computerScore = 0;

	return result;
}

function getComputerChoice() {
	let computerChoice = Math.floor(Math.random() * 3);

	switch (computerChoice) {
		case 0:
			return 'Rock';
		case 1:
			return 'Paper';
		case 2:
			return 'Scissors';
	};
};

function capitalize(text) {
	return (
		text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
	)
};