let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const  msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const option=["rock","paper","scissor"];
    const index = Math.floor(Math.random()*3);
    return option[index];
}

const drawgame = () => {
    msg.innerText = "game was draw. play again";
    msg.style.backgroundColor = "rgb(23, 23, 54)";
}

const showwinner = (userwin) => {
    if(userwin)
    {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = "You lose.";
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
    const compchoice = gencompchoice();
    let userwin;
    if(userchoice===compchoice){
        // draw game
       drawgame(); 
       return;
    }
    else {
        if(userchoice==="rock") {
            // scissor , paper
          userwin = compchoice === "paper" ?  false : true;
        }
        else if(userchoice==="paper") {
            // scissor , rock
            userwin = compchoice === "scissor" ?  false : true;
        }
        else if(userchoice==="scissor") {
            // paper , rock
          userwin = compchoice === "rock" ?  false : true;
      }
    }

    showwinner(userwin);
}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>
    {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})


    