let userScore = 0;
let robotScore = 0;
let DrawScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorep = document.querySelector("#userScore");
const robotScorep = document.querySelector("#robotScore");
const DrawScorep = document.querySelector("#drawScore");

const genrateRobotChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
};
const drawGame = (DrawScore) => {
    console.log("Game was draw.");
    msg.innerText = "Game was Draw, Play again."
    msg.style.backgroundColor = "#081b31";
   
};

const showWinner = (userWin, userChoice, robotChoice) => {
    if(userWin){
        userScore++;
        userScorep.innerText =  userScore;
        msg.innerText = `You won !Your Choice ${userChoice} beats ${robotChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        robotScore++;
        robotScorep.innerText = robotScore;
        msg.innerText = `You Lost ! ${robotChoice} beats Your Choice ${userChoice}`;
        msg.style.backgroundColor = "red";
        
    }
    
       
    
};
const pliayGame2 = (userChoice) => {
    const robotChoice = genrateRobotChoice();
   
    
  if(userChoice === robotChoice){
   
    drawGame();
    if(drawGame){
        DrawScore++;
        DrawScorep.innerText = DrawScore;
        }


   
  }else {
    let userWin = true;
    if(userChoice === "rock"){
        userWin = robotChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
        userWin = robotChoice === "scissors" ? false : true;
    }else{
        userWin = robotChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, robotChoice);
  }
  
};
    
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        
        pliayGame2(userChoice);
    });
    
});

// const draws=()=>{
//     if (drawGame()){
//         DrawScore++;
//         DrawScorep.innerText = DrawScore;
//     }
// };

// const plyGame = (userChoice) => {
//     // console.log("user choice = ", userChoice);
//     const robotChoice = genrateRobotChoice();
//     // console.log("Robot choice = ", robotChoice);
    
//     if (userChoice === robotChoice) {
//         //draw Game
//         drawGame();
                
        
        
//     } else {
//         let draws = true;
//         draws =  drawGame();
//         draws = DrawScore;
//         let userWin = true;
//         if(userChoice === "rock") {
//             //scissors, paper
//             userWin = robotChoice === "paper" ? false : true;
//         } else if (userChoice === "paper") {
//             // rock, scissors
//             userWin = robotChoice === "scissors" ? false : true;
//         } else {
//             //rock paper
//             userWin = robotChoice === "rock" ? false : true;
//         }
//         showWinner(userWin, DrawScore, userChoice, robotChoice,);

//     }
// };
// const choices = document.querySelectorAll(".choice");
// choices.forEach((choice) => {
//     console.log(choice);
//     choice.addEventListener("click", () => {
//         const userChoice = choice.getAttribute("id");
//         console.log("choice was clicked", userChoice);

//     })
    
// });