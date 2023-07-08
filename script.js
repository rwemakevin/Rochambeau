const rock = document.getElementById("user-rock");
const paper = document.getElementById("user-paper");
const scisscors = document.getElementById("user-scissors")
const roundWinner = document.getElementById("round-winner");
const showUserWin = document.getElementById("user-win");
const showComputerWin = document.getElementById("computer-win");
const showUserPlay = document.getElementById("user-play");
const showComputerPlay = document.getElementById("computer-play");
const finalWinner = document.getElementById("final-winner");
const playContent = document.querySelector(".play-content");
const showReset = document.getElementById("reset");
const showGameCount = document.getElementById("game-count");
let userWinCount = 0;
let computerWinCount = 0;
let userPlay = "";
let gameCount = 5;





const computerChoice = () => {

    //all possible play
    const possibleChoice = ["rock", "paper", "scissors"];

    //randomIndex
    const randomIndex = Math.floor(Math.random() * possibleChoice.length);

    //random Choice for Computer
    let computerPlay = possibleChoice[randomIndex];
    return computerPlay;

}

//Display winner of the round, between user and computer
const winnerMessage = (winner) => {
    roundWinner.innerHTML = `: ${winner}`;
}

const gameCountDecrement = () => {
    gameCount -= 1;
    showGameCount.textContent = `Total Play Left: ${gameCount}`
}


// user Play Rock
const userRockPlay = () => {
    let winner ="";
    let message = "";
    let computer = computerChoice();
    if(computer === "rock"){
        message = "Draw";
        }else if(computer === "paper"){
        message = "You Lost";
        }else if (computer === "scissors") {
        message = "You win";
        }else {
        message = "Error";
        }

        //Set Winner
        if(message === "You Lost") {
            winner = "Computer"
        }else if(message === "You win" ) {
            winner = "You"
        }else if (message === "Draw") {
            winner = "Draw"
        }else {
            winner = "Error"
        }

        if(winner !== "Draw"){
            if(winner === "You") {
                userWinCount += 1;
                showUserWin.textContent = `  ${userWinCount}`;
            }else {
                computerWinCount +=1;
                showComputerWin.textContent = ` ${computerWinCount}`
            }

            
        }

        
        userPlay = "Rock";
        showUserPlay.textContent = ` : ${userPlay}`
        showComputerPlay.textContent = `: ${computer}`
        console.log(  ` user Choice: ROCK  \n Computer Choice: ${computer}\nResult: ${message}`);
        winnerMessage(winner);
        gameCountDecrement();
        
       
    
}

//User play Paper
const userPaperPlay = () => {
    let winner ="";
    let message ="";
    
    let computer = computerChoice();
    if(computer === "paper"){
        message ="Draw";
        }else if(computer === "scissors"){
        message = "You Lost";
        } else if (computer === "rock") {
        message = "You win";
        }else {
        message = "Error";
        }

        //Set winner
        if(message === "You Lost") {
            winner = "Computer"
        }else if(message === "You win" ) {
            winner = "You"
        }else if (message === "Draw") {
            winner = "Draw"
        }else {
            winner = "Error"
        }

        if(winner !== "Draw"){
            if(winner === "You") {
                userWinCount += 1;
                showUserWin.textContent = `  ${userWinCount}`
            }else {
                computerWinCount +=1;
                showComputerWin.textContent = ` ${computerWinCount}`
            }
        }

    
    userPlay = "Paper";
    showUserPlay.textContent = ` : ${userPlay}`
    showComputerPlay.textContent = `: ${computer}`
    console.log(` user Choice: PAPER \n Computer Choice: ${computer} \n Result: ${message}`);
    winnerMessage(winner);
    gameCountDecrement();
    
    
}

//User play Scisscors
const userScissorsPlay = ()=> {
    let winner ="";
    let message ="";
    let computer = computerChoice();
    if(computer === "scissors"){
        message ="Draw";
        }else if(computer === "paper"){
        message = "You Win";
        } else if (computer === "rock") {
         message = "You Lost";
        }else {
     message = "Error";
        }

    //Set winner
    if(message === "You Lost") {
        winner = "Computer"
    }else if(message === "You Win" ) {
        winner = "You"
    }else if (message === "Draw") {
        winner = "Draw"
    }else {
        winner = "Error"
    }

    if(winner !== "Draw"){
        if(winner === "You") {
            userWinCount += 1;
            showUserWin.textContent = `  ${userWinCount}`;
        }else {
            computerWinCount +=1;
            showComputerWin.textContent = ` ${computerWinCount}`
        }
    }

   
    userPlay = "Scissor";
    showUserPlay.textContent = ` : ${userPlay}`
    showComputerPlay.textContent = `: ${computer}`
    console.log(` user Choice: SCISSORS \n Computer Choice: ${computer} \n Result: ${message} `);
    winnerMessage(winner);
    gameCountDecrement();
    
    

}

rock.addEventListener("click", userRockPlay);
paper.addEventListener("click", userPaperPlay);
scisscors.addEventListener("click",userScissorsPlay);

let totalCount = 0;
let winMessage ="";
const finalScore = (x,y) => {
    if(x === y){
        winMessage = " ❌ Draw ❌"
        finalWinner.textContent = winMessage
        
    }else if(x > y){
        winMessage = " 🙌🏆 You win the Game! 🏆🙌"
        finalWinner.textContent = winMessage
        
    }else if(x < y){
        winMessage = " 😞 You Lost the Game 😞"
        finalWinner.textContent = winMessage
        
    }else {
        winMessage = " something went wrong"
        finalWinner.textContent = winMessage
        

    }
    
}
function gameOver(){
    // alert("GameOver")
    finalScore(userWinCount,computerWinCount)
    
    

    
}

function resetGame(){
    playContent.style.display = "none";
    showReset.style.display = "block";
}

function reload(){
    location.reload();
}

rock.addEventListener("click",function(){
    totalCount += 1;
    console.log(totalCount)
    if(totalCount === 5){
        gameOver();
        resetGame();
        
    }

})

paper.addEventListener("click",function(){
    totalCount += 1;
    console.log(totalCount)
    if(totalCount === 5){
        gameOver();
        resetGame()
       
    }
})

scisscors.addEventListener("click",function(){
    totalCount += 1;
    console.log(totalCount)
    if(totalCount === 5){
        gameOver();
        resetGame()
        
    }
})

















