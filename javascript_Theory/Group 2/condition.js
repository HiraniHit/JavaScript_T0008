console.log("1");

//Conditional Statements

console.log("1 : Conditional Statements");

//if

if (true) {
  console.log("1 : if :", "condition is true");
}

//if...else

if (false) {
  console.log("1 : if...else :", "condition is true");
} else {
  console.log("1 : if...else :", "condition is false so that else is executed");
}

//else...if

let num = 11;

if (num < 10) {
  console.log(`1 : else...if (num is = ${num}) :","num is less than 10`);
} else if (num == 10) {
  console.log(`1 : else...if (num is = ${num}):","num is equal to 10`);
} else {
  console.log(`1 : else...if (num is = ${num}):"," num is greter than 10`);
}

//switch..cash

let month = 2;

switch (month) {
  case 1:
    console.log("1 : switch-case :", "January");
    break;
  case 2:
    console.log("1 : switch-case :", "Fabruary");
    break;
  case 3:
    console.log("1 : switch-case :", "March");
    break;
  case 4:
    console.log("1 : switch-case :", "April");
    break;
  case 5:
    console.log("1 : switch-case :", "May");
    break;
  case 6:
    console.log("1 : switch-case :", "June");
    break;
  case 7:
    console.log("1 : switch-case :", "July");
    break;
  case 8:
    console.log("1 : switch-case :", "August");
    break;
  case 9:
    console.log("1 : switch-case :", "September");
    break;
  case 10:
    console.log("1 : switch-case :", "October");
    break;
  case 11:
    console.log("1 : switch-case :", "Navember");
    break;
  case 12:
    console.log("1 : switch-case :", "December");
    break;
}
