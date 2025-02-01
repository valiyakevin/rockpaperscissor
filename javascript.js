let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");

const drowgame = () => {
    console.log("game was drow");
    msg.innerText = "game is drow ";
    msg.style.backgroundColor = "brown";

}



const showwinner = (usrwin) => {
    if (usrwin) {
        userscore++;
        user.innerText = userscore;
        console.log("you win");
        msg.innerText = "you win";
        msg.style.backgroundColor = "green";

    } else {
        compscore++;
        comp.innerText = compscore;
        console.log("you loose");
        msg.innerText = "you loose";
        msg.style.backgroundColor = "red";

    }
}



const gencompchoice = () => {

    const option = ["rock","paper","scissore"];
    const ranridx = Math.floor(Math.random() * 3 );
    return option [ranridx];
}



const playgame = (userchoice) => {
        console.log("user choice",userchoice)
        // to generate  computer choice
        const compchoice = gencompchoice();
        console.log("computer choice",compchoice);

        if (userchoice === compchoice){
            //drow 
            drowgame();
        }else {
            let usrwin = true;
            if (userchoice === "rock"){
                usrwin = compchoice === "paper" ? false : true;
            } else if (userchoice === "paper"){
                usrwin = compchoice === "scissore" ? false : true;
            } else {
                usrwin = compchoice === "rock" ? false : true;
            }
           showwinner( usrwin); 

        }

};



choices.forEach((choice) => {
    choice.addEventListener("click", () => {

        const userchoice = choice.getAttribute("id")
        //console.log("choice was clicked",userchoice)
        playgame(userchoice);
    });
});