"use strict";
let player1 = "Paper";
let player2 = "Scissor";
if (player1 === player2) {
    console.log("Its A Tie!");
}
else if ((player1 === "Rock" && player2 === "Scissor") ||
    (player1 === "Scissor" && player2 === "Paper") ||
    (player1 === "Paper" && player2 === "Rock")) {
    console.log("Player 1 Wins!");
}
else {
    console.log("Player 2 Wins!");
}
