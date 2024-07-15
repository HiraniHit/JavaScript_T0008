console.log("4");
console.log("passing in function argument in other function its called a callback function");

//----------------- task 1 -----------------

function func1(name,callback){
    console.log(`ex-callbacks: 1 :my name is ${name}`);
    callback()
}

function func2(){
    console.log("ex-callbacks: 1 :hii...i am callback");
}

func1("hit",func2)

//----------------- task 2 -----------------

function func3(){
    console.log("ex-callbacks: 2 :welcome");
}
function func4(age){
    console.log(`ex-callbacks: 2 :i am ${age}`);
}
setTimeout(func3,3000)
func4(20)

//----------------- task 3 -----------------

function func5(name, callback){
    console.log("ex-callbacks: 3 : hello");
    callback(name)
}
function func6(name){
    console.log(`ex-callbacks: 3 : i am ${name}`);
}
setTimeout(func5,10000,"hit",func6)