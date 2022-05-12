//function to randomly choose between the three choices
function computerPlay(){
  let options = ['rock', 'paper', 'scissors'];

  let num = Math.floor(Math.random() *3);

  return options[num]
}

//Assigning both player and computer choices to variables

const computerSelection = computerPlay(); 
let playerSelection = prompt('Choose Either of Rock, Pepper or Scissors')


//The Game function
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


console.log(playRound(playerSelection, computerSelection));






















