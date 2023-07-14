let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let playerTurn = document.getElementById("playerTurn");
let errorMessage = document.getElementById("errorMessage");
let resetButton = document.getElementById("reset");

let polja = ["", "", "", "", "", "", "", "", ""];

let poljaX = [];
let poljaO = [];

let fields = document.getElementsByClassName("field");
fields = Array.from(fields);

fields.forEach(element => {
    element.addEventListener("click", () => {
        if (checkFilled(element)) {
            errorMessage.style.visibility = "visible";
            return;
        }
        if (checkPlayerTurn() === "X") {
            element.textContent = "X";
            playerTurn.textContent = playerTurn.textContent.slice(0, -1) + "O";

            poljaX.push(Number(element.getAttribute("id").charAt(element.getAttribute("id").length - 1)));
            
            if (proveriPobednika(poljaX) == true) {
                errorMessage.textContent = "PLAYER X WINS!";
                errorMessage.style.visibility = "visible";
            }
        }
        else {
            element.textContent = "O";
            playerTurn.textContent = playerTurn.textContent.slice(0, -1) + "X";

            poljaO.push(Number(element.getAttribute("id").charAt(element.getAttribute("id").length - 1)));

            if (proveriPobednika(poljaO) == true) {
                errorMessage.textContent = "PLAYER O WINS!";
                errorMessage.style.visibility = "visible";
            }
        }
        // if (isErrorFull())
        //     errorMessage.style.visibility = "hidden";
    })
});

resetButton.addEventListener("click", () => {
    fields.forEach(e => {
        e.textContent = "";
    });
    errorMessage.style.visibility = "hidden";
    poljaX = [];
    poljaO = [];
    errorMessage.textContent = "The field already contains a value!";
});

function checkPlayerTurn() {
    if (playerTurn.textContent.charAt(playerTurn.textContent.length - 1) === "X")
        return "X";
    else
        return "O";
};

function checkFilled(divElement) {
    if (divElement.textContent !== "")
        return true;
    return false;
};

function isErrorFull() {
    if (errorMessage.textContent !== "")
        return true;
    return false;
};

function proveriPobednika(nizZaProveru) {
    nizZaProveru.sort();
    let zaProveru = [];
    let brojac = 0;
    for (let i = 0; i < winConditions.length; i++) {
        brojac = 0;
        zaProveru = nizZaProveru.filter(e => winConditions[i].includes(e));
        for (let j = 0; j < winConditions[i].length; j++) {
            if (winConditions[i][j] == zaProveru[j]) {
                brojac++;
            }
            if (brojac == 3) {
                return true;
            }
        }
    }
    return false;
};


console.log(proveriPobednika(["2", 5, 10, 8, 10]));

// console.log(polja);
// https://bobbyhadz.com/blog/javascript-check-if-two-arrays-have-same-elements