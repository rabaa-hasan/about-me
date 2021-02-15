'use strict';
alert('Welcome to OE Website 🎉');

let userName = prompt('Tell us your name please 😃');
//console.log(userName);
alert('Nice meeting you ' + userName + '😎');

let playGame = prompt('Are you Excited 🤩 ?  Do you want to play with us?');
playGame = playGame.toLowerCase();
//console.log(playGame);
if(playGame==='yes'){
  alert('You are on fire 🔥 let us start the game 😃 I will ask you 5 (yes or no) questions, & lets see how many points you will score.');
} else{
  alert('Duh You are boring 😪');
}

let backGround= prompt('Omar has Bsc degree in Aeronautical engineering ✈️ & Master degree in business administration 💰?');
backGround = backGround.toLowerCase();
//console.log(backGround);
if(backGround==='yes'){
  alert('Correct '+ userName +' You scored the first point 🎆');
} else{
  alert('unfortunately wrong answer ⭕ ' + userName + ' 😔');
}

let workExperiance = prompt('Omar has experiance in business development & project management 🧑🏻‍💼?');
workExperiance = workExperiance.toLowerCase();
//console.log(workExperiance);
if(workExperiance==='yes'){
  alert('Well done '+ userName +' You scored the second point 🎆');
} else{
  alert('unfortunately wrong answer ⭕ ' + userName + ' 😔');
}

let readBooks = prompt('Omar Loves reading books in his free time 📘?');
readBooks = readBooks.toLowerCase();
//console.log(readBooks);
if(readBooks==='yes'){
  alert('Correct '+ userName +' You scored the third point 🎆');
} else{
  alert('unfortunately wrong answer ⭕ ' + userName + ' 😔');
}

let loveProgramming = prompt('Omar"s new hobby is programming 💻?');
loveProgramming = loveProgramming.toLowerCase();
//console.log(loveProgramming);
if(loveProgramming==='yes'){
  alert('Perfect '+ userName +' You scored the fourth point 🎆');
} else{
  alert('unfortunately wrong answer ⭕ ' + userName + ' 😔');
}

let favTeam = prompt('Omar"s favourite football team is barcelona 🔴🔵?');
favTeam = favTeam.toLowerCase();
//console.log(favTeam);
if(favTeam==='yes'){
  alert('Correct '+ userName +' You scored the fifth point 🎆');
} else{
  alert('unfortunately wrong answer ⭕ ' + userName + ' 😔');
}
let gameResult= prompt('How many correct answers you have?');
//console.log(gameResult);
if(gameResult>=3){
  alert('Congrants ' + userName + ' you know omar well, Omar Looking forward to meeting you soon 😀');
} else {
  alert('Omar is looking forward to meeting you' + userName + ' so you will know each other more 😀');
}












