const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorBtn = document.querySelector("#scissor-btn");

const allowedSelections = ['rock', 'paper', 'scissor'];

const anotherGameBtn = document.querySelector('#another-game-btn');

const NUMBER_OF_ROUNDS = 5;
let roundNumber = 0;

let humanScore = 0;
let cpuScore = 0;

rockBtn.addEventListener("click", () => {
  if (roundNumber < NUMBER_OF_ROUNDS) {
    roundCheck(allowedSelections[0]); // 'rock' choice from const def above
  }
});
paperBtn.addEventListener("click", () => {
  if (roundNumber < NUMBER_OF_ROUNDS) {
    roundCheck(allowedSelections[1]); // 'paper' choice from const def above
  }
});
scissorBtn.addEventListener("click", () => {
  if (roundNumber < NUMBER_OF_ROUNDS) {
    roundCheck(allowedSelections[2]); // 'scissor' choice from const def above
  }
});

anotherGameBtn.addEventListener("click", () => {
  humanScore = 0;
  cpuScore = 0;
  roundNumber = 0;

  updateDOM();

  anotherGameBtn.style.display = "none";
})

function roundCheck(humanDecision) {
  const cpuChoice = computerSelection();
  let result;

  if (humanDecision === 'rock') {
    if (cpuChoice === 'rock') {
      result = 'tie';
    } else if (cpuChoice === 'paper') {
      result = 'loss';
    } else if (cpuChoice === 'scissor') {
      result = 'win';
    }
  } else if (humanDecision === 'paper') {
    if (cpuChoice === 'rock') {
      result = 'win';
    } else if (cpuChoice === 'paper') {
      result = 'tie';
    } else if (cpuChoice === 'scissor') {
      result = 'loss';
    }
  } else if (humanDecision === 'scissor') {
    if (cpuChoice === 'rock') {
      result = 'loss';  
    } else if (cpuChoice === 'paper') {
      result = 'win';  
    } else if (cpuChoice === 'scissor') {
      result = 'tie';  
    }
  }
  updateRound(result);
}

function updateRound(result) {
  let outputDisplay = `It's a tie!`;
  if (result === 'win') {
    outputDisplay = `You won!!`;
    humanScore++;
  } else if (result === 'loss') {
    outputDisplay = `You lost :/`;
    cpuScore++;
  }
  roundNumber++
  updateDOM(outputDisplay);

  if (roundNumber >= NUMBER_OF_ROUNDS) {
    displayWinner();
    showPlayAgainBtn();
  }
}


const cpuScoreDisplay = document.querySelector('#cpu-score');
const userScoreDisplay = document.querySelector('#user-score');
const displayResult = document.querySelector('#display-result');
const displayRoundNumber = document.querySelector('#round-number');

function updateDOM(output) {
  if (!(roundNumber >= NUMBER_OF_ROUNDS)) {
    displayRoundNumber.textContent = `Round Number ${roundNumber + 1}`;
  }

  cpuScoreDisplay.textContent = cpuScore;
  userScoreDisplay.textContent = humanScore;

  displayResult.textContent = output;
}

function displayWinner() {
  let matchResult;
  if (humanScore > cpuScore) {
    matchResult = `You won the whole darn thing!`;
  } else if (humanScore < cpuScore) {
    matchResult = `You did good but you could do better.\nYou lost, you should practice some more...`;
  } else {
    matchResult = `It's a tie! All of your life's efforts mean nothing (or at least these did)\nTry again!`;
  }
  displayResult.textContent = matchResult;
}

function showPlayAgainBtn() {
  anotherGameBtn.style.display = 'block';
}

function computerSelection(){
  return allowedSelections[Math.floor(Math.random() * 3)];
}