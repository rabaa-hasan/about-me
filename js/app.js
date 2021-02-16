'use strict';
let score= (0);
console.log(score);
alert('Welcome to OE Website 🎉');

let userName = prompt('Tell us your name please 😃');
//console.log(userName);
alert('Nice meeting you ' + userName + '😎');

let playGame = prompt('Are you Excited 🤩 ?  Do you want to play with us?');
playGame = playGame.toLowerCase();
//console.log(playGame);
if (playGame === 'yes' || playGame === 'y') {
  alert('You are on fire 🔥 let us start the game 😃 I will ask you 5 (yes or no) questions, & lets see how many points you will score.');
} else {
  alert('Duh You are boring 😪');
}

let backGround = prompt('Omar has Bsc degree in Aeronautical engineering ✈️ & Master degree in business administration 💰?');
backGround = backGround.toLowerCase();
//console.log(backGround);
if (backGround === 'yes' || backGround === 'y') {
  alert('Correct ' + userName + ' You scored the first point 🎆');
} else {
  alert('unfortunately wrong answer ⭕ ' + userName + ' 😔');
}
if (backGround==='yes' || backGround==='y'){
  score= score+1;
}

let workExperiance = prompt('Omar has experiance in business development & project management 🧑🏻‍💼?');
workExperiance = workExperiance.toLowerCase();
//console.log(workExperiance);
if (workExperiance === 'yes' || workExperiance === 'y') {
  alert('Well done ' + userName + ' You scored the second point 🎆');
} else {
  alert('unfortunately wrong answer ⭕ ' + userName + ' 😔');
}
if (workExperiance==='yes' || workExperiance==='y'){
  score= score+1;
}

let readBooks = prompt('Omar Loves reading books in his free time 📘?');
readBooks = readBooks.toLowerCase();
//console.log(readBooks);
if (readBooks === 'yes' || readBooks === 'y') {
  alert('Correct ' + userName + ' You scored the third point 🎆');
} else {
  alert('unfortunately wrong answer ⭕ ' + userName + ' 😔');
}
if (readBooks==='yes' || readBooks==='y'){
  score= score+1;
}

let loveProgramming = prompt('Omar"s new hobby is programming 💻?');
loveProgramming = loveProgramming.toLowerCase();
//console.log(loveProgramming);
if (loveProgramming === 'yes' || loveProgramming === 'y') {
  alert('Perfect ' + userName + ' You scored the fourth point 🎆');
} else {
  alert('unfortunately wrong answer ⭕ ' + userName + ' 😔');
}
if (loveProgramming==='yes' || loveProgramming==='y'){
  score= score+1;
}

let favTeam = prompt('Omar"s favourite football team is barcelona 🔴🔵?');
favTeam = favTeam.toLowerCase();
//console.log(favTeam);
if (favTeam === 'yes' || favTeam === 'y') {
  alert('Correct ' + userName + ' You scored the fifth point 🎆');
} else {
  alert('unfortunately wrong answer ⭕ ' + userName + ' 😔');
}
if (favTeam==='yes' || favTeam==='y'){
  score= score+1;
}
// let gameResult = prompt('How many correct answers you have?');
// //console.log(gameResult);
// if (gameResult >= 3) {
//   alert('Congrants ' + userName + ' you know omar well, Omar Looking forward to meeting you soon 😀');
// } else {
//   alert('Omar is looking forward to meeting you' + userName + ' so you will know each other more 😀');
// }

//Sixth Question (Omar Age)
let corAge = (26);
console.log(corAge);

let omarAge = prompt('How old is Omar?');
omarAge =Number(omarAge);
let i=1;

for ( i ; i < 4; i++) {
  if(omarAge <26) {
    prompt('unfortunately wrong answer ⭕ , it is too low ' + userName + ' 😔, Try one more time.');

  } else if (omarAge>26) {
    alert('unfortunately wrong answer ⭕ , it is too high ' + userName + ' 😔, Try one more time.');
  } else if (omarAge===corAge) {
    alert('Correct ' + userName + ' You scored the sixth point 🎆');
    break;
  }
}
if (i===4) {
  alert ('unfortunately wrong answer ⭕ ' + userName + ' 😔 The correct answer is 26');

} else if (omarAge===26){
  score= score+1;
}

let favFood=prompt('What is Omar Favorite Food ?');
console.log(favFood);
let omarFood=['pizza', 'burger' , 'indian' , 'Chinese' , 'mansaf' ];
console.log(omarFood);

for( let x=0; x<6; x++){

  if(favFood===omarFood[0] || favFood===omarFood[1] || favFood===omarFood[2] || favFood===omarFood[3])
  {
    alert('Correct ' + userName + ' You scored the seventh point 🎆');
    score++;
    break;
  }
  else{
    favFood=prompt('unfortunately wrong answer ⭕ , it is too high ' + userName + ' 😔, Try one more time.');
  }

}
alert('Omar Favorite food is '+ omarFood);

alert('Your Total Score is ' + score/7);























