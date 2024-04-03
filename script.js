// jogo de pedra papel tesoura



// um valor aleatorio apresentado pelo computador

function getcomputerchoice() {
    let computerchoice = '';
    number = Math.floor((Math.random() * 3) + 1);
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

function roundjokenpo(computerchoice, userchoice, score) {
    let result = '';
    if (computerchoice === userchoice) {
        return result = ('Foi um empate!');
    } else if ((computerchoice === 'ROCK' && userchoice === 'SCIZOR') 
    || (computerchoice === 'PAPER' && userchoice === 'ROCK') 
    || (computerchoice === 'SCIZOR' && userchoice === 'PAPER')) {
        score--;
        return result = (`Voce perdeu! ${computerchoice} vence ${userchoice}`);            
    } else {
        score++;
        return result = (`Voce ganhou ${userchoice} vence ${computerchoice}`);
    }
            
        

}

//jogar o jogo 5x

function playgame() {
    let score = 0;
    for (let cont = 0; let < 5; let++) {
        let computerSelection = getcomputerchoice();
        let userSelection = getuserchoice();
        let result = roundjokenpo(computerSelection, userSelection, score);
    }
    if (score > 0) {
        console.log(`Parabens, voce venceu`);
    } else {
        console.log(`Infelizmente voce perdeu :()`);
    }
}


//chama as funcoes

let computerSelection = getcomputerchoice();

let userSelection = getuserchoice();

// mostra quem venceu

let result = roundjokenpo(computerSelection, userSelection);



