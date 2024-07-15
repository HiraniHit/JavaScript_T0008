console.log("2");

//for Loop

console.log("2 :","For Loop");
let arr = [1,2,3,4,5]
for (let i = 0; i < arr.length; i++) {
    console.log("2 :","index",i,",","array" ,arr);
}

//While Loop

console.log("2 :","While Loop","( first chack condition)");
let arr2 = [1,2,3,4,5]
let i =0;
while(i < 5){
    console.log("2 :","index", i ,);
    i++;
}

//do...while Loop

console.log("2 :","do..While Loop" , "(exicuted one time at list)");
let i1 =0;

do {
    console.log("2 :","index", i1 ,);
    i1++;
} while (i1 < 5);

//for...of

console.log("2 :","For...of Loop");



function forOf(){
    let arr3 = "hit"
    for (const i of arr3) {
        console.log("2 :",i);
    }
}
forOf()