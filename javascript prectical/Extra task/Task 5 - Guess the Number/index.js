//pick rendom number

let numberGame = document.querySelector(".guess-number");
let numDispalyDiv = document.querySelector(".num-main");
let attempt = document.querySelector("#atempt");
let count = 0;
let ganrateaRendomNumber = Math.floor(Math.random() * 101);
function getNumber() {
    if (numberGame.value == ganrateaRendomNumber) {
        numDispalyDiv.innerHTML = "Congretulation...You Guess Right Number";
        count = 0;
    } else if (ganrateaRendomNumber > numberGame.value) {
        numDispalyDiv.innerHTML = `Opps!!! Too Low`;
        count += 1;
    } else if (ganrateaRendomNumber < numberGame.value) {
        numDispalyDiv.innerHTML = `Opps!!! Too Big`;
        count += 1;
    } else {
        numDispalyDiv.innerHTML = `Enter A number`;
    }
    attempt.textContent = `Attempt : ${count}`;
}

function playAgain() {
    document.querySelector(".guess-number").value = "";
    let newganrateaRendomNumber = Math.floor(Math.random() * 101);
    ganrateaRendomNumber = newganrateaRendomNumber;
    count = 0;
    getNumber();
}
