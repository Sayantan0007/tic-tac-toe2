let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let msgContainer = document.querySelector(".msg-container");
let showMsg = document.querySelector(".msg");
let newGameBtn = document.querySelector(".new-game");
let turn = true;

let winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]

const disableBtns = ()=> {
    for ( box of boxes){
        box.disabled = true;
    }
}
const enableBtns = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

//function for reseting
const newGame = () =>{
    turn = true;
    enableBtns();
    msgContainer.classList.add("msg-hide")
}
//for new game
newGameBtn.addEventListener("click",()=>{
    newGame();
})
//reset the game
reset.addEventListener("click", () => {
  newGame();
});

//function for play pattern
boxes.forEach((box)=>{
    box.addEventListener("click",(e)=>{
        if(turn === true){
            box.innerText = "X";
            turn = false;
        }
        else{
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

//to show the winner msg
const winnerMsg = (val) =>{
    showMsg.innerText = `Congratulation! winner is ${val}`;
    msgContainer.classList.remove("msg-hide");
    disableBtns();
}
const checkWinner = () =>{
    for (let pattern of winPattern){
        // console.log(pattern);
        console.log(pattern[0]);
        console.log(boxes[pattern[0]]);
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal3 !=""){
            if (posVal1 == posVal2 && posVal2 == posVal3) {
                winnerMsg(posVal1);
                // timer();
            }
        } 
    }
}

// const timer = () =>{
//     msgContainer.style.display ="none";

//     setTimeout(() =>{
//         msgContainer.style.display="block"
//     },500);
//     newGame();
//     timer();
// }