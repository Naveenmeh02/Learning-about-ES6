const messageEl = document.getElementById("message-el");
const pickedEl = document.getElementById("cardsPicked");
const sumEl = document.getElementById("sum-el");

// global variables
let firstCard = 5;
let secondCard = 7;
let sum = firstCard + secondCard

const startGame = () => {
    messageEl.textContent = "Welcome!!" 
    renderGame();
}
const renderGame = () => {
    let current = pickedEl.textContent= ` Cards picked: ${firstCard} & ${secondCard}`
    message = sum < 21 ? "Pick another card?" : sum === 21 ? "You've won the BlackJack!" : "You're out TT";
    sumEl.textContent = ` The sum is ${sum}`
    messageEl.textContent = message
}
const NewCard = () =>{
    let fresh = 5
    sum+=fresh // sum =sum + fresh 
    pickedEl.textContent+= ` Cards picked: ${firstCard} & ${secondCard} & ${fresh}`
    renderGame()
}
const resetGame = () => {
    messageEl.textContent = "Play another?";
    sumEl.textContent = "";
    pickedEl.textContent = "";
};


// ---------this coded with vanilla javascript. Mentioned here for comparision of ES5 and ES6 

// let firstCard = 1
// let secondCard = 11
// let sum = firstCard + secondCard
// let message = " "
// let result = document.getElementById("start")
// let messageEl = document.getElementById("message-el")
// let sumEL = document.getElementById("sum-el")

// function startGame(){
//     renderGame()
// }


// function renderGame(){
//     messageEl.textContent = firstCard + " " +secondCard
//     if(sum<21){
//         message = "pick another card?"
//     }
//     else if ( sum == 21){
//         message = "you've won the BlackJack"
//     }
//     else {
//         message = "you're out TT"
//     }
//     sumEL.textContent = " "+ sum 
//     subEL.textContent = message
//     console.log(message + " " + sum)
// }

// function newCard(){
//     let card = 5
//     sum += card 
//     renderGame()

// }

// function resetGame(){
//     messageEl.textContent = "Play another?";
//     sumEl.textContent = "";
//     pickedEl.textContent = "";
// };