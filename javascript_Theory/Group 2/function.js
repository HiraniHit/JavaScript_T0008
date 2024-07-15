console.log("3");

//Function Declaration

console.log("3 :","Function Declaration");

function hit(){
    //statement
}
hit()
console.log("3 :","function hit(){statement}  hit()");

//Function Expression

console.log("3 :","Function Expression");
const exp = function(){
    console.log("3 :","inside the function exprssion");
}
exp()


//Arrow Functions

console.log("3 :","Arrow Functions");

const exp1 = () => {
    console.log("3 :","inside the arrow function");
}
exp1()

//Return Statement

console.log("3 :", "Return Statement");


const returnSte = (a) => {
    return a
}
console.log("3 :",returnSte(4));

