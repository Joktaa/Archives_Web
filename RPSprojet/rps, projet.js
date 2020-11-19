//ENGLISH TOO EASY
function getUserChoiceETE() {
  var userInput = prompt('Rock, Paper, or Scissors');
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput ===  'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('NOP SORRY');
  }
}

function getComputerChoiceETE() {
  var randomNumber = Math.floor(Math.random()*2);
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else if (randomNumber === 2) {
    return 'scissors';
  } else {
    alert('there is a bug !')
  }
}

function determineWinnerETE(userChoice,computerChoice) {
  if (userChoice === computerChoice) {
    return 'tie';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return 'YOU WIN';
    } else {
      return 'YOU LOOSE';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'YOU WIN';
    } else {
      return 'YOU LOOSE';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'YOU WIN';
    } else {
      return 'YOU LOOSE';
    }
  }
}

function determineNextComputerChoiceETE (userChoice, computerChoice){
  if (userChoice === 'rock'){
    if (determineWinnerETE(userChoice, computerChoice) === 'YOU WIN'){
      return 'paper';
    } else {
      return 'scissors';
    }
  }
 if (userChoice === 'paper'){
  if(determineWinnerETE(userChoice, computerChoice) === 'YOU WIN'){
    return 'scissors';
  } else {
    return 'rock';
  }
 }
 if (userChoice === 'scissors'){
   if (determineWinnerETE(userChoice, computerChoice) === 'YOU WIN'){
     return 'rock'
   } else {
     return 'paper';
   }
 }
}

function startGameETE() {
  var userChoice = getUserChoiceETE();
  var computerChoice = getComputerChoiceETE();
   if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
    alert('You threw: ' + userChoice + '   The computer threw:  ' + computerChoice + '    ' + determineWinnerETE(userChoice, computerChoice));
  }
}

function restartGameETE() {
 var userChoice = getUserChoiceETE();
 var computerChoice = determineNextComputerChoiceETE(userChoice);
  if(userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
    alert('You threw: ' + userChoice + '   The computer threw:  ' + computerChoice + '    ' + determineWinnerETE(userChoice, computerChoice));
  }
}

function playGameEnglishTooEasy(){
 for (var i = 0; i < 1; i++) {
   alert('Good Luck and Have Fun');
   startGameETE();
 }
 for (var i = 1; i < 1000; i++){
   var restart = prompt('Do you want retry the game ? If you want back to menu press m');
    if (restart === 'yes') {
      restartGameETE();
    } else if (restart === 'm') {
      menu();
    }
 }
}


// ENGLISH NORMAL
function getUserChoiceEN() {
  var userInput = prompt('Rock, Paper, or Scissors');
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput ===  'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    alert('NOP SORRY');
  }
}

function getComputerChoiceEN() {
  var randomNumber = Math.floor(Math.random()*2);
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else if (randomNumber === 2) {
    return 'scissors';
  } else {
    alert('there is a bug !')
  }
}

function determineWinnerEN(userChoice,computerChoice) {
  if (userChoice === computerChoice) {
    alert('tie');
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return ('YOU WIN');
    } else {
      alert('YOU LOOSE');
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      alert('YOU WIN');
    } else {
      alert('YOU LOOSE');
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      alert('YOU WIN');
    } else {
      alert('YOU LOOSE');
    }
  }
}

function startGameEN() {
  var userChoice = getUserChoiceEN();
  var computerChoice = getComputerChoiceEN();
   if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
    alert('You threw: ' + userChoice + '   The computer threw:  ' + computerChoice + '    ' + determineWinner(userChoice, computerChoice));
  }
}

function restartGameEN() {
 var userChoice = getUserChoiceEN();
 var computerChoice = determineNextComputerChoiceEN(userChoice);
  if(userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
    alert('You threw: ' + userChoice + '   The computer threw:  ' + computerChoice + '    ' + determineWinner(userChoice, computerChoice));
  }
}

function playGameEnglishNormal(){
 for (var i = 0; i < 1; i++) {
   alert('Good Luck and Have Fun');
   startGameEN();
 }
 for (var i = 1; i < 1000; i++){
   var restart = prompt('Do you want restart the game ? If you want back to menu press m');
    if (restart === 'yes') {
      restartGameEN();
    } else if (restart ==='m') {
      menu();
    }
 }
}


// ENGLISH IMPOSSIBLE
function getUserChoice() {
  var userInput = prompt('Rock, Paper, or Scissors');
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput ===  'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('NOP SORRY');
  }
}

function getComputerChoiceEI() {
  var randomNumber = Math.floor(Math.random()*2);
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else if (randomNumber === 2) {
    return 'scissors';
  } else {
    alert('there is a bug !')
  }
}

function determineWinnerEI(userChoice,computerChoice) {
  if (userChoice === computerChoice) {
    return 'tie';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return 'YOU WIN';
    } else {
      return 'YOU LOOSE';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'YOU WIN';
    } else {
      return 'YOU LOOSE';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'YOU WIN';
    } else {
      return 'YOU LOOSE';
    }
  }
}

function determineNextComputerChoiceEI(userChoice, computerChoice){
  if (userChoice === 'rock'){
    if (determineWinnerEI(userChoice, computerChoice) === 'YOU LOOSE'){
      return 'paper';
    } else {
      return 'scissors';
    }
  }
 if (userChoice === 'paper'){
  if(determineWinnerEI(userChoice, computerChoice) === 'YOU LOOSE'){
    return 'scissors';
  } else {
    return 'rock';
  }
 }
 if (userChoice === 'scissors'){
   if (determineWinnerEI(userChoice, computerChoice) === 'YOU LOOSE'){
     return 'rock'
   } else {
     return 'paper';
   }
 }
}

function startGameEI() {
  var userChoice = getUserChoiceEI();
  var computerChoice = getComputerChoiceEI();
   if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
    alert('You threw: ' + userChoice + '   The computer threw:  ' + computerChoice + '    ' + determineWinnerEI(userChoice, computerChoice));
  }
}

function restartGameEI() {
 var userChoice = getUserChoiceEI();
 var computerChoice = determineNextComputerChoiceEI(userChoice);
  if(userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
    alert('You threw: ' + userChoice + '   The computer threw:  ' + computerChoice + '    ' + determineWinnerEI(userChoice, computerChoice));
  }
}

function playGameEnglishImpossible(){
 for (var i = 0; i < 1; i++) {
   alert('Good Luck and Have Fun');
   startGameEI();
 }
 for (var i = 1; i < 1000; i++){
   var restart = prompt('Do you want restart the game ? If you want back to menu press m');
    if (restart === 'yes') {
      restartGameEI();
    } else if (restart ==='m') {
      menu();
    }
 }
}



//FRANCAIS TROP FACILE
function getUserChoiceFTF() {
  var userInput = prompt('Pierre, Feuille, Ciseaux');
  userInput = userInput.toLowerCase();
  if (userInput === 'pierre' || userInput ===  'feuille' || userInput === 'ciseaux') {
    return userInput;
  } else {
    console.log('NOP SORRY');
  }
}

function getComputerChoiceFTF() {
  var randomNumber = Math.floor(Math.random()*2);
  if (randomNumber === 0) {
    return 'pierre';
  } else if (randomNumber === 1) {
    return 'feuille';
  } else if (randomNumber === 2) {
    return 'ciseaux';
  } else {
    alert('there is a bug !')
  }
}

function determineWinnerFTF(userChoice,computerChoice) {
  if (userChoice === computerChoice) {
    return 'egalite';
  }
  if (userChoice === 'pierre') {
    if (computerChoice === 'ciseaux') {
      return 'GAGNE';
    } else {
      return 'PERDU';
    }
  }
  if (userChoice === 'feuille') {
    if (computerChoice === 'pierre') {
      return 'GAGNE';
    } else {
      return 'PERDU';
    }
  }
  if (userChoice === 'ciseaux') {
    if (computerChoice === 'feuille') {
      return 'GAGNE';
    } else {
      return 'PERDU';
    }
  }
}

function determineNextComputerChoiceFTF(userChoice, computerChoice){
  if (userChoice === 'pierre'){
    if (determineWinnerFTF(userChoice, computerChoice) === 'GAGNE'){
      return 'feuille';
    } else {
      return 'ciseaux';
    }
  }
 if (userChoice === 'feuille'){
  if(determineWinnerFTF(userChoice, computerChoice) === 'GAGNE'){
    return 'ciseaux';
  } else {
    return 'pierre';
  }
 }
 if (userChoice === 'ciseaux'){
   if (determineWinnerFTF(userChoice, computerChoice) === 'GAGNE'){
     return 'pierre'
   } else {
     return 'feuille';
   }
 }
}

function startGameFTF() {
  var userChoice = getUserChoiceFTF();
  var computerChoice = getComputerChoiceFTF();
   if (userChoice === 'pierre' || userChoice === 'feuille' || userChoice === 'ciseaux') {
    alert('Tu as choisi : ' + userChoice + '   L ordinateur a choisi :  ' + computerChoice + '    ' + determineWinnerFTF(userChoice, computerChoice));
  }
}

function restartGameFTF() {
 var userChoice = getUserChoiceFTF();
 var computerChoice = determineNextComputerChoiceFTF(userChoice);
  if(userChoice === 'pierre' || userChoice === 'feuille' || userChoice === 'ciseaux') {
    alert('Tu as choisi : ' + userChoice + '       L ordinateur a choisi :  ' + computerChoice + '    ' + determineWinnerFTF(userChoice, computerChoice));
  }
}

function playGameFrancaisTropFacile(){
 for (var i = 0; i < 1; i++) {
   alert('Good Luck and Have Fun');
   startGameFTF();
 }
 for (var i = 1; i < 1000; i++){
   var restart = prompt('Veut tu recommencer ? Si tu veux retourner au menu appuie sur m');
    if (restart === 'oui') {
      restartGameFTF();
    } else if (restart ==='m') {
      menu();
    }
 }
}


// FRANCAIS NORMAL
function getUserChoiceFRN() {
  var userInput = prompt('Pierre, Feuille, Ciseaux');
  userInput = userInput.toLowerCase();
  if (userInput === 'pierre' || userInput ===  'feuille' || userInput === 'ciseaux') {
    return userInput;
  } else {
    alert('NOP SORRY');
  }
}

function getComputerChoiceFRN() {
  var randomNumber = Math.floor(Math.random()*2);
  if (randomNumber === 0) {
    return 'pierre';
  } else if (randomNumber === 1) {
    return 'feuille';
  } else if (randomNumber === 2) {
    return 'ciseaux';
  } else {
    alert('there is a bug !')
  }
}

function determineWinnerFRN(userChoice,computerChoice) {
  if (userChoice === computerChoice) {
    alert('egalite');
  }
  if (userChoice === 'pierre') {
    if (computerChoice === 'ciseaux') {
      return ('GAGNE');
    } else {
      alert('PERDU');
    }
  }
  if (userChoice === 'feuille') {
    if (computerChoice === 'pierre') {
      alert('GAGNE');
    } else {
      alert('PERDU');
    }
  }
  if (userChoice === 'ciseaux') {
    if (computerChoice === 'feuille') {
      alert('GAGNE');
    } else {
      alert('PERDU');
    }
  }
}

function startGameFRN() {
  var userChoice = getUserChoiceFRN();
  var computerChoice = getComputerChoiceFRN();
   if (userChoice === 'pierre' || userChoice === 'feuille' || userChoice === 'ciseaux') {
    alert('Tu as choisi : ' + userChoice + '   L ordinateur a choisi :  ' + computerChoice + '    ' + determineWinnerFRN(userChoice, computerChoice));
  }
}

function restartGameFRN() {
 var userChoice = getUserChoiceFRN();
 var computerChoice = determineNextComputerChoiceFRN(userChoice);
  if(userChoice === 'pierre' || userChoice === 'feuille' || userChoice === 'ciseaux') {
    alert('Tu as choisi : ' + userChoice + '      L ordinateur a choisi :  ' + computerChoice + '    ' + determineWinnerFRN(userChoice, computerChoice));
  }
}

function playGameFrancaisNormal(){
 for (var i = 0; i < 1; i++) {
   alert('Good Luck and Have Fun');
   startGameFRN();
 }
 for (var i = 1; i < 1000; i++){
   var restart = prompt('Veut tu recommencer ? Si tu veux retourner au menu appuie sur m');
    if (restart === 'oui') {
      restartGameFRN();
    } else if (restart === 'm') {
      menu();
    }
 }
}


// FRANCAIS IMPOSSIBLE
function getUserChoiceFI() {
  var userInput = prompt('Pierre, Feuille, Ciseaux');
  userInput = userInput.toLowerCase();
  if (userInput === 'pierre' || userInput ===  'feuille' || userInput === 'ciseaux') {
    return userInput;
  } else {
    console.log('NOP SORRY');
  }
}

function getComputerChoiceFI() {
  var randomNumber = Math.floor(Math.random()*2);
  if (randomNumber === 0) {
    return 'pierre';
  } else if (randomNumber === 1) {
    return 'feuille';
  } else if (randomNumber === 2) {
    return 'ciseaux';
  } else {
    alert('there is a bug !')
  }
}

function determineWinnerFI(userChoice,computerChoice) {
  if (userChoice === computerChoice) {
    return 'egalite';
  }
  if (userChoice === 'pierre') {
    if (computerChoice === 'ciseaux') {
      return 'GAGNE';
    } else {
      return 'PERDU';
    }
  }
  if (userChoice === 'feuille') {
    if (computerChoice === 'pierre') {
      return 'GAGNE';
    } else {
      return 'PERDU';
    }
  }
  if (userChoice === 'ciseaux') {
    if (computerChoice === 'feuille') {
      return 'GAGNE';
    } else {
      return 'PERDU';
    }
  }
}

function determineNextComputerChoiceFI(userChoice, computerChoice){
  if (userChoice === 'pierre'){
    if (determineWinnerFI(userChoice, computerChoice) === 'PERDU'){
      return 'feuille';
    } else {
      return 'ciseaux';
    }
  }
 if (userChoice === 'feuille'){
  if(determineWinnerFI(userChoice, computerChoice) === 'PERDU'){
    return 'ciseaux';
  } else {
    return 'pierre';
  }
 }
 if (userChoice === 'ciseaux'){
   if (determineWinnerFI(userChoice, computerChoice) === 'PERDU'){
     return 'pierre'
   } else {
     return 'feuille';
   }
 }
}

function startGameFI() {
  var userChoice = getUserChoiceFI();
  var computerChoice = getComputerChoiceFI();
   if (userChoice === 'pierre' || userChoice === 'feuille' || userChoice === 'ciseaux') {
    alert('Tu as choisi : ' + userChoice + '       L ordinateur a choisi :  ' + computerChoice + '    ' + determineWinnerFI(userChoice, computerChoice));
  }
}

function restartGameFI() {
 var userChoice = getUserChoiceFI();
 var computerChoice = determineNextComputerChoiceFI(userChoice);
  if(userChoice === 'pierre' || userChoice === 'feuille' || userChoice === 'ciseaux') {
    alert('Tu as choisi : ' + userChoice + '   L ordinateur a choisi :  ' + computerChoice + '    ' + determineWinnerFI(userChoice, computerChoice));
  }
}

function playGameFrancaisImpossible(){
 for (var i = 0; i < 1; i++) {
   alert('Good Luck and Have Fun');
   startGameFI();
 }
 for (var i = 1; i < 1000; i++){
   var restart = prompt('Veut tu recommencer ? Si tu veux retourner au menu appuie sur m');
    if (restart === 'oui') {
      restartGameFI();
    } else if (restart === 'm') {
      menu();
    }
 }
}




function menu() {
  var whatLanguage = prompt('FRANCAIS, ENGLISH ?');
   whatLanguage = whatLanguage.toLowerCase();
  if (whatLanguage === 'english') {
    var whatGame = prompt('TOO EASY, NORMAL, OR IMPOSSIBLE');
     whatGame = whatGame.toLowerCase();
    if (whatGame === 'too easy') {
      playGameEnglishTooEasy();
    } else if (whatGame === 'normal') {
       playGameEnglishNormal();
    } else if (whatGame === 'impossible') {
      playGameEnglishImpossible();
    }
  }
  if (whatLanguage === 'francais') {
    var whatGame = prompt('TROP FACILE, NORMAL, IMPOSSIBLE');
     whatGame = whatGame.toLowerCase();
    if(whatGame === 'trop facile'){
      playGameFrancaisTropFacile();
     } else if (whatGame === 'normal') {
       playGameFrancaisNormal();
     } else if (whatGame === 'impossible') {
       playGameFrancaisImpossible();
     }
  }
}

menu();
