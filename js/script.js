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
        default:
            return 'Error, computer made a bad choice';
        break;
    }
}

console.log(getComputerChoice())

//get player selection
//compare computer choice to player selection
//declare winner of the round