// JOKENPO

//cria botoes

const container = document.querySelector("body");

const botaoRock = document.createElement('button');
const botaoPaper = document.createElement('button');
const botaoScizor = document.createElement('button');

botaoRock.textContent = "ROCK";
botaoPaper.textContent = "PAPER";
botaoScizor.textContent = "SCIZOR";

container.appendChild(botaoPaper);
container.appendChild(botaoRock);
container.appendChild(botaoScizor);


//cria variaveis para contagem


let playerScore = 0;
let computerScore = 0;
let score = 0;

//ativacao dos botoes

    
botaoRock.addEventListener('click', () => {
    score = roundjokenpo(getcomputerchoice(), "ROCK")
    updateScore(score);
});
    

botaoPaper.addEventListener('click', () => {
    score = roundjokenpo(getcomputerchoice(), "PAPER")
    updateScore(score);
});

botaoScizor.addEventListener('click', () => {
    score = roundjokenpo(getcomputerchoice(), "SCIZOR")
    updateScore(score);
});
    



//atualiza o score

function updateScore(score) {
    if (score > 0) playerScore++;
    else if (score < 0) computerScore++;
    const div = document.createElement('div');
    div.textContent = `Voce ${playerScore} x ${computerScore} PC`; 
    container.appendChild(div);
}




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

function roundjokenpo(computerchoice, userchoice) {
    let score = 0;
    let div = document.createElement("div");

    if (computerchoice === userchoice) {
        div.textContent = 'Foi um empate!';        
    } else if ((computerchoice === 'ROCK' && userchoice === 'SCIZOR') 
    || (computerchoice === 'PAPER' && userchoice === 'ROCK') 
    || (computerchoice === 'SCIZOR' && userchoice === 'PAPER')) {
        score--;
        div.textContent = `Voce perdeu! ${computerchoice} vence ${userchoice}`;                  
    } else {
        score++;
        div.textContent = `Voce ganhou! ${userchoice} vence ${computerchoice}`;        
    }
    container.appendChild(div);
    return score;
}




//jogar o jogo 5x

// function playgame() {
//     let score = 0;
//     for (let cont = 0; cont < 5; cont++) {
//         let computerSelection = getcomputerchoice();
//         let userSelection = getuserchoice();
//         score += roundjokenpo(computerSelection, userSelection);
//         console.log(score);
//     }
//     if (score > 0) {
//         console.log(`Parabens, voce venceu!`);
//     } else if (score === 0){
//         console.log(`Temos um empate!`);
//     } else {
//         console.log(`Infelizmente voce perdeu :()`)
//     }
// }

//joga o jogo

//playgame();



