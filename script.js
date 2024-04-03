// jogo de pedra papel tesoura



// um valor aleatorio apresentado pelo computador

function getcomputerchoice() {
    let computerchoice = '';
    number = Math.floor((Math.random() * 3) + 1);
    console.log(number);
    if (number === 1) {
        computerchoice = 'ROCK';
    } else if (number === 2) {
        computerchoice = 'PAPER';
    } else {
        computerchoice = 'SCIZOR';
    }
    return computerchoice;
}

// um valor apresentado pelo usuario

function getuserchoice() {
    keepgoing = true;
    let userchoice = '';
    while (keepgoing) {
        userchoice = prompt('Digite sua opcao: ROCK, PAPER OR SCIZOR');
        userchoice = userchoice.toUpperCase();
        if (userchoice === 'PAPER' || userchoice === 'SCIZOR' || userchoice === 'ROCK')
            return userchoice;
        else
            alert('Digite uma opcao valida. Tente novamente.')
            keepgoing = true;

    }
}

// compara os dois valores

function roundjokenpo(computerchoice, userchoice) {
    let result = '';
    if (computerchoice === userchoice) {
        return result = ('Foi um empate!');
    } else if ((computerchoice === 'ROCK' && userchoice === 'SCIZOR') 
    || (computerchoice === 'PAPER' && userchoice === 'ROCK') 
    || (computerchoice === 'SCIZOR' && userchoice === 'PAPER')) {
        return result = (`Voce perdeu! ${computerchoice} vence ${userchoice}`);            
    } else return result = (`Voce ganhou ${userchoice} vence ${computerchoice}`);
            
        

}

// anota quem venceu

// mostra quem venceu

let computerSelection = getcomputerchoice();

let userSelection = getuserchoice();

console.log(userSelection);

console.log(computerSelection);

let result = roundjokenpo(computerSelection, userSelection);

console.log (result);