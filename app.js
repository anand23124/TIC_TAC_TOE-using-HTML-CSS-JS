let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector("#rst-btn");
let nwbtn = document.querySelector("#nw-btn");
let msgcont = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");



let turnO = true; //playerO playerX

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame = () =>{
    turnO=true;
    enabledBoxes();
    msgcont.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;

        checkWinner();
    });
});
const disabledBoxes = () => {
    for (let box of boxes){
        box.disabled=true;
    }
}

const enabledBoxes = () => {
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner= (winner) =>{
    msg.innerText=`Congratulation , Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns){        
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;

            if (pos1val != "" && pos2val != "" && pos3val != ""){
                if(pos1val===pos2val&&pos2val===pos3val){
                    console.log("winner" ,pos1val);

                    showWinner(pos1val);

                }
            }
    }
};

nwbtn.addEventListener("click",resetGame);
rstbtn.addEventListener("click",resetGame)