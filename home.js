const array1 = ['rock', 'paper', 'scissors'];


function computerPlay() {
    return array1[Math.floor(Math.random() * array1.length)]; 
}

function playerPlayer() {
   return array1[Math.floor(Math.random() * array1.length)]; 
}

// let textValue = computerPlay.toString();

// const playerSelection = 'rock'
// const computerSelection = computerPlay();


function playRound() {

   const playerSelection = playerPlayer()
   const computerSelection = computerPlay()


 if (playerSelection === 'rock' && computerSelection === 'rock' ||
     playerSelection === 'paper' && computerSelection === 'paper' ||
     playerSelection === 'paper' && computerSelection === 'paper' )
    return 'sorry draw'  
 else if 
    (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper' )
    return 'you win!!'
 else if
 (playerSelection === 'rock' && computerSelection === 'paper' ||
 playerSelection === 'paper' && computerSelection === 'scissors' ||
 playerSelection === 'scissors' && computerSelection === 'rock' )
    return 'you lose :('
}


// console.log(playRound(playerSelection, computerSelection));

function game() {
   console.log(playRound())
   console.log(playRound())
   console.log(playRound())
   console.log(playRound())
   console.log(playRound())
     
}

console.log(game())