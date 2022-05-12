// function game (player1, player2){

//   if(player1 == 'scissors' && player2 == 'paper'){
//     return 'Player 1 won!';
//   }else if(player1 == 'scissors' && player2 == 'rock'){
//     return 'Player 1 won!';
//   }else if(player1 == 'paper' && player2 == 'paper' || player1 == 'rock' && player2 == 'rock' || player1 == 'scissors' && player2 == 'scissors'){
//     return 'Draw!';
//   }
// }

// console.log(game('rock', 'rock'));

//const num = Math.floor(Math.random() *3);

// console.log(num);

function computerPlay(){
  let options = ['rock', 'paper', 'scissors'];

  let num = Math.floor(Math.random() *3);

  return options[num]
}


function playRound(playerSelection, computerSelection){
  if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper'){
    return 'You WIN! Scissors beats Paper';
  }else if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock'){
    return 'You LOSE! Rock beats Scissors';
  }else if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors'){
    return 'You WIN! Rock beats Scissors!';
  }else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors'){
    return 'You LOSE! Scissors beats Paper';
  }else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock'){
    return 'You Win! Paper beats Rock';
  }else if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper'){
    return 'You LOSE! Paper beats Rock';
  }else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'paper' || playerSelection.toLowerCase() == 'rock' && computerSelection == 'rock' || playerSelection.toLowerCase() == 'scissors' && computerSelection == 'scissors'){
    return 'Draw!';
  }

}

const computerSelection = computerPlay(); 
let playerSelection = prompt('Choose Either of Rock, Pepper or Scissors')


console.log(playRound(playerSelection, computerSelection));






















