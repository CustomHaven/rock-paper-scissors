// Collecting the Users choice with this function:
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
      return userInput;
    } else {
      console.log("Error!");
    }
}
  

// Collecting the Computers choice with this function:  
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()*3)
    switch (randomNumber) {
      case 0:
        return "rock";
        break;
      case 1:
        return "paper";
        break;
      case 2:
        return "scissors"
        break;
      default:
        return "Error!"
        break;
    }
}
      
  
// Determining the Winner with this function:
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === "bomb") {
      return "BOOOMB INSTANT WIN GAME OVER"
    }
    if (userChoice === computerChoice) {
      return "Draw"
    } else if (userChoice === "paper" && computerChoice === "rock") {
      return "User Win, You win!"
    } else if (userChoice === "rock" && computerChoice === "scissors") {
      return "User Win, You win!"
    } else if (userChoice === "scissors" && computerChoice === "paper") {
      return "User Win, You win!"
    } else {
      return "Computer wins, you have lost!"
    }
}

 
 // Starting the game off with this function: 
function playGame() {
    const user = prompt("Choice between: 'rock', 'paper' or 'scissors'");
    const userChoice = getUserChoice(user);
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}


// Invoking the game
playGame();