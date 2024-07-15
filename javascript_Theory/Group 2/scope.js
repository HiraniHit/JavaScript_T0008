console.log("4");

console.log("4 : there are many scope in js ");


//global scope

let scope1= 'global'

function global(){
    console.log("4 :",`in the ${scope1} scope`);
}
global()


//local scope


let scope2 = 'local'

function local(){
    console.log(`4 :in the ${scope2} scope`);
}
local()

//Block Scope
//block scope = inside the this {} bracket

function block(){
    if(true){
        let scope3 = "block"
        console.log("4 :",`in the ${scope3} scope`);
    }
    //console.log(scope3); not a block scope // error
}
block()

//Function Scope
//Function declare with the var variable


function func(){
    if(true){
        var scope4 = "Function"
    }
    console.log("4 :",`in the ${scope4} scope`);
}
func()

// console.log(scope4); error
