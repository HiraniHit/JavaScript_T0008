console.log("5");

//JSON

console.log("5 : JSON :","javascript object notation");

//jasn.stringify

let jsonStr = {
    name : "hit",
    age : 20,
}
let convertIntoString = JSON.stringify(jsonStr)
console.log("5 : JSONStringify :",convertIntoString);

//jsonParse

let convertedString = '{"name":"hit","age":20}'
let convertInobject = JSON.parse(convertedString)
console.log("5 : JSONparse :",convertInobject);

