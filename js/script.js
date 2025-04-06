const VALID_SELECTIONS = ['rock', 'paper', 'scissors'];

// const FUN_WINNING_RESPONSES = []
// const FUN_LOSING_RESPONSES = []

function getComputerChoice() {
  const choiceSelection = Math.floor(Math.random() * 3);
  return VALID_SELECTIONS[choiceSelection];
}

function getHumanChoice() {
  let input = inputPrompt();
  while (!VALID_SELECTIONS.includes(input)) {
    input = inputPrompt();
  }
  return input;
}

function inputPrompt() {
  const userSelection = prompt("Please enter a selection of either 'rock', 'paper', or 'scissors': ").trim().toLowerCase();
  return userSelection;
}

function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  console.log(`Your choice is ${humanChoice}`);
  console.log(`The computer's choice is ${computerChoice}`);

  if (humanChoice === 'rock') {
    if (computerChoice === 'scissors') {
      responseStr('win');
      return 'win';
    } else if (computerChoice === 'paper') {
      responseStr('loss');
      return 'loss';
    } else {
      responseStr();
    }
  } else if (humanChoice === 'paper') {
    if (computerChoice === 'rock') {
      responseStr('win');
      return 'win';
    } else if (computerChoice === 'scissors') {
      responseStr('loss');
      return 'loss';
    } else {
      responseStr();
    }
  } else if (humanChoice === 'scissors') {
    if (computerChoice === 'paper') {
      responseStr('win');
      return 'win';
    } else if (computerChoice === 'rock') {
      responseStr('loss');
      return 'loss';
    } else {
      responseStr();
    }
  } else {
    console.log('There appears to be a problem here... Probably in the function playRound');
  }
  return 'tie';
}

function responseStr(outcome = 'tie') {
  if (outcome === 'win') {
    console.log("You won!");
  } else if (outcome === 'loss') {
    console.log("You lost... Have you seen The Terminator, you can do better than that");
  } else if (outcome === 'tie') {
    console.log("It's a tie, another round!");
  }
  return "There's been a problem sir... in function responseStr";
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // TODO: sanitize input here!
  let numberOfGames = Number(prompt("Please enter how many rounds of Tic Tac Toe you would like to play: ").trim());

  for (let i = 0; i < numberOfGames; i++) {
    const result = playRound();
    if (result === 'win') {
      humanScore++;
    } else if (result === 'loss') {
      computerScore++;
    }
    console.log(`The current score is \nHuman: ${humanScore} Computer: ${computerScore}`);
  }
  
  if (humanScore > computerScore) {
    console.log("You won this match good work!");
  } else if (humanScore < computerScore) {
    console.log("You lost this match, you can do better. Just keep trying!");
  }
}

function playAgainQ() {
  let userChoice;
  do {
    userChoice = prompt("Would you like to play again (pleaes enter 'yes' or 'no')").trim().toLowerCase();
  } while (!userChoice.includes(['yes', 'no']));
  
  if (userChoice === 'yes') {
    console.log("Another round, let's play!");
    playAgainQ();
  } else {
    console.log("It was fun while it lasted, adieu to you!");
  }
}

playGame();
playAgainQ();