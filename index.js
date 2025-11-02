const min = 1;
const max = 100;
const secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let attempts = 10;

alert(`I have chosen a number between ${min} and ${max}. You have ${attempts} tries to guess it!`);

while (attempts > 0) {
  const guess = prompt(`Enter the number (${attempts} tries left):`);

  if (guess === null) {
    alert("The game is stopped");
    break;
  }

  const userNumber = Number(guess);

  if (isNaN(userNumber)) {
    alert("Please enter the correct number!");
    continue;
  }

  if (userNumber < min || userNumber > max) {
    alert(`The number must be between ${min} and ${max}.`);
    continue;
  }


  if (userNumber === secretNumber) {
    alert(`Congartulations! You guessed the number ${secretNumber}!`);
    break;
  } else if (userNumber < secretNumber) {
    alert("The hidden number is higher!");
  } else {
    alert("The hidden number is lesser!");
  }

  attempts--;

  if (attempts === 0) {
    alert(`The attempts are over! The guessed number is ${secretNumber}.`);
  }
}