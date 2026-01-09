let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#RESET");
let turnO = true;
let gameActive = true; 

const winpattern = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (!gameActive || box.innerText !== "") return; 
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.style.pointerEvents = "none";  
        checkwinner();
    });
});

const checkwinner = () => {
    for (let pattern of winpattern) { 
        let [pos1, pos2, pos3] = pattern; 
        let pos1val = boxes[pos1].innerText;
        let pos2val = boxes[pos2].innerText;
        let pos3val = boxes[pos3].innerText;
        if (pos1val !== "" && pos2val !== "" && pos3val !== "" && pos1val === pos2val && pos2val === pos3val) {
            console.log(pos1val + " WINNER");
            gameActive = false;
            return; 
        }
    }
    
    if ([...boxes].every(box => box.innerText !== "")) {
        console.log("DRAW");
        gameActive = false;
    }
};
