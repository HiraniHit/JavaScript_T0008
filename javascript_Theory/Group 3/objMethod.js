console.log("4");

console.log("4 : Object Method");


//object

let obj1 ={
    name : "hit",
    age: 20
}

console.log("4 : object :",obj1);

//keys

console.log("4 : keys : ",Object.keys(obj1));

//values

console.log("4 : value : ",Object.values(obj1));

//entries

console.log("4 : entries :",Object.entries(obj1));

//assign

let assign = {
    num:2,
    name:"prit"
}
console.log("4 : assign :" ,Object.assign(obj1,assign) );// property name is override by sencond object

//freeze

let obj2 = {name: "drashti"}
obj2.age = 20
console.log("4 :",obj2 , "before freeze");
Object.freeze(obj2)
obj2.proffession = "CA"
console.log("4 :",obj2 , "after freeze");

