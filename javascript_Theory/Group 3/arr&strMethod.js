console.log("3");

console.log("3 :", "Array Method");
console.log("3 :");

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//length

console.log("3 : length :" , array.length);

//Push

console.log("3 : Push :" , array.push(2) , array);

//unshift

console.log("3 : unshift :" , array.unshift(0) ,array);

//pop

console.log("3 : pop :" , array.pop(),array);

//shift

console.log("3 : shift :" , array.shift(),array);

//at

console.log("3 : at :" , array.at(2),array);

//indexof

console.log("3 : indxof :" , array.indexOf(3) ,array);

//include

console.log("3 : include :" , array.includes(10) ,array);

//filter

let result = array.filter((value)=>{
    return value > 5
})
console.log("3 : filter :" , result ,array);

//map

let result2 = array.map((value) => {
    return value *2
})
console.log("3 : map :" , result2 ,array);

//every

console.log("3 : every :" , array.every((value)=>value < 7) ,array);

//some

console.log("3 : some :" , array.some((value)=>value < 4) ,array);

//fill

console.log("3 : fill :" , array.fill(5,7) ,array);

//reduce

console.log("3 : reduce :" , array.reduce((first , secound)=> first+secound) ,array);

//concat

let arr2 = [11,12,13,14,15]
console.log("3 : concat :" , array.concat(arr2));

//reverse

console.log("3 : every :" , array.reverse(),array);

//sort

let arr3 = ["banana", "apple" , 'orange']
console.log("3 : sort :" , arr3.sort() ,arr3);

//join

console.log("3 : join :" , array.join('-') ,array);

//flat

let arr4 = [1,2,3,[4,5,6],7,8,9]
console.log("3 : flat :" , arr4.flat(1) ,arr4);

//find

console.log("3 : find :" , array.find((value)=> value===5) ,array);

//findindex

console.log("3 : findindex :" , array.findIndex((value)=>value == 4) ,array);

//tosting

console.log("3 : tostring :" , array.toString() ,array);

//splice

console.log("3 : splice :" , array.splice(2,4) ,array);

//slice

console.log("3 : slice :" , array.slice(3) ,array);

//Array.isArray

console.log("3 : every :" , Array.isArray([1,2,3]));

//Array.from

let arrfrom = "hit hirani"
console.log("3 : Array.from :",Array.from(arrfrom) , arrfrom);

console.log("3 :");
console.log("3 :","String Methods");
console.log("3 :");

//charat

let str = "hirani-hit";
let str2 = "himanshu";
let str3 = " my name is hit"

console.log("3 : chatAt :",str.charAt(1),str);

//concat

console.log("3 : concat :",str.concat(str2),str);

//indexof

console.log("3 : indexof :",str3.indexOf("is"),str3);

//lastindexof

console.log("3 : lastindexof :",str3.lastIndexOf("hit"),str3);

//replace

console.log("3 : replace :",str.replace("hit","prit"),str);

//search

console.log("3 : search :",str.search("hit"),str);

//slice

console.log("3 : slice :",str.slice(2,8),str);

//substr

console.log("3 : substr :",str.substr(1,2),str);

//substring

console.log("3 : substring :",str.substring(1,3),str);

//toupperCase

console.log("3 : toupperCase :",str.toUpperCase(),str);

//trim

let str4 = "    welcome     "
console.log("3 : trim :",str4.trim(),str4);

//tostring

let str5 = 1200
console.log("3 : tostring :",str5.toString(),str5);

//include

console.log("3 : include :",str.includes("hit"),str);

//charCodeAt

console.log("3 : chatCodeAt :",str.charCodeAt("h"),str);

//match

let match = "hirani-hit";
console.log("3 : match :",match.match("/[a-z]/g"),match);

//split

console.log("3 : split :",str.split(""),str);

//tolowercase

let str6 = "HIRANI-HIT"
console.log("3 : tolowercase :",str6.toLowerCase(),str6);

//value of

let value = new String("hit")
console.log("3 : valueof :",value.toString(),value ,"type of : ",typeof value);
