const VALID_INPUT = ['rock', 'paper', 'scissors', 'yes', 'no'];
const GAME_PLAY_SELECTIONS = VALID_INPUT.slice(0, 3);
const YES_OR_NO = VALID_INPUT.slice(3);

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorBtn = document.querySelector("#scissor-btn");

rockBtn.addEventListener("click", () => {
  console.log('rock was pressed')
  getHumanChoice('rock');
})
paperBtn.addEventListener("click", () => {
  console.log('paper was pressed')
  getHumanChoice('paper');
})
scissorBtn.addEventListener("click", () => {
  console.log('scissors was pressed')
  getHumanChoice('scissors');
})

const NUMBER_OF_ROUNDS = 5;
const OUTPUT = {
  'win': `You won! Good job\nPress "Ok" below to see the current score and go to the next round`, 
  'loss': `You lost! Do better next time\nPress "Ok" below to see the current score and go to the next round`,
  'tie': `It's a tie! Another round\nPress "Ok" below to see the current score and go to the next round`,
  'player_sel_prompt': `Please enter one of the following selections "rock", "paper", or "scissors"`,
  'welcome_greeting': `Welcome to Rock, Paper, Scissors! Press "Ok" below to play the best of five rounds!`,
  'play_again_q': `Would you like to play again? If so please enter 'yes'! If not please enter 'no'`,
  'goodbye': `It was fun while it lasted, have a good rest of your day!`,
  scoreDisplay(plySc, cpuSc) {
    return `The current score is,\n\nPlayer: ${plySc}\nComputer: ${cpuSc}\n\nPress "Ok" below to contiue`;
  },
  decideWinner(plySc, cpuSc) {
    return `The Winner is... \n\n${plySc > cpuSc ? "Yourself!" : "The computer :/"}`;
  }
}

playGame();

function playGame() {
  while (true) {
    gameLoop();
    if (!anotherGameQ()) break;
  }
}

function gameLoop() {
  let humanScore = 0;
  let computerScore = 0;

  let humanRoundChoice;
  let computerRoundChoice;
  let result;

  alert(OUTPUT['welcome_greeting']);

  while(highestScore(humanScore, computerScore) < gamesNeededToWin(NUMBER_OF_ROUNDS)) {
    humanRoundChoice = getHumanChoice();
    computerRoundChoice = getComputerChoice();
    
    // Results are either 'win', 'loss', or 'tie' in ref to the player
    result = playRound(humanRoundChoice, computerRoundChoice);

    if (result === 'win') {
      humanScore++;
      alert(OUTPUT['win']);
    } else if (result === 'loss') {
      computerScore++;
      alert(OUTPUT['loss']);
    } else {
      alert(OUTPUT['tie']);
    }
    alert(OUTPUT.scoreDisplay(humanScore, computerScore));
  }
  alert(OUTPUT.decideWinner(humanScore, computerScore));
}

// More accurately 'decide round'
function playRound(humanChoice, computerChoice) {
  if (humanChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return 'win';
    } else if (computerChoice === 'paper') {
      return 'loss';
    }
  } else if (humanChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'win';
    } else if (computerChoice === 'scissors') {
      return 'loss';
    }
  } else if (humanChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'win';
    } else if (computerChoice === 'rock') {
      return 'loss';
    }
  } else {
    return 'tie';
  }
}

function anotherGameQ() {
  let anotherGame;
  do {
    anotherGame = prompt(OUTPUT['play_again_q']).trim().toLowerCase();
  } while(!YES_OR_NO.includes(anotherGame));

  if (anotherGame === 'yes') {
    return true;
  } else if (anotherGame === 'no'){
    alert(OUTPUT['goodbye']);
    return false;
  }
}


function highestScore(score1, score2) {
  return score1 > score2 ? score1 : score2;
}

function gamesNeededToWin(numberOfRounds) {
  return Math.floor(numberOfRounds / 2) + 1;
}

function getComputerChoice() {
  return GAME_PLAY_SELECTIONS[Math.floor(Math.random() * GAME_PLAY_SELECTIONS.length)];
}

function getHumanChoice(btnPressed) {
  // let humanInput;
  // do {
  //   // TODO: input from buttons instead of typing
  //   humanInput = prompt(OUTPUT['player_sel_prompt']).trim().toLowerCase();
  // } while(!VALID_INPUT.includes(humanInput));


  return humanInput;
}