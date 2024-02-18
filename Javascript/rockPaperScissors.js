const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput ==='bomb') {
        return userInput
    } else {
        console.log('Please type: rock, paper or scissors!')
    }
};

const getComputerChoice = () => {
   const randomNumber = Math.floor(Math.random() * 3);
switch (randomNumber) {
case 0:
    return 'rock';
case 1:
    return 'paper';
case 2:
    return 'scissors';
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice == 'bomb') {
        return "You won! Bomb always wins!"
    }

    if (userChoice === computerChoice) {
        return "It's a tie!"
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return "Sorry, computer won!"
        } else {
            return "Congratulations! You won!"
        }
    } 

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return "Sorry, computer won!"
        } else {
            return "Congratulations! You won!"
        }
    } 

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return "Sorry, computer won!"
        } else {
            return "Congratulations! You won!"
        }
    } 
};

const playGame = () => {
    const userChoice = getUserChoice('scissors');
    console.log("You played: " + userChoice);

    const computerChoice = getComputerChoice();
    console.log("Computer played: " + computerChoice);

    console.log(determineWinner(userChoice, computerChoice))
};

playGame();
