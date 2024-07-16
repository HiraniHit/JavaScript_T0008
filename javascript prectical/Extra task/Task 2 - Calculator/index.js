let result_fild = document.querySelector(".result");

function addition() {
    let num_1 = Number(document.querySelector("#num-1").value);
    let num_2 = Number(document.querySelector("#num-2").value);

    if (num_1 >= 0 && num_2 >= 0) {
        let result = num_1 + num_2;
        result_fild.innerHTML = `Sum : ${result}`;
    }
}

function subtraction() {
    let num_1 = Number(document.querySelector("#num-1").value);
    let num_2 = Number(document.querySelector("#num-2").value);

    if (num_1 >= 0 && num_2 >= 0) {
        let result = num_1 - num_2;
        result_fild.innerHTML = `Subtraction : ${result}`;
    }
}

function multiplication() {
    let num_1 = Number(document.querySelector("#num-1").value);
    let num_2 = Number(document.querySelector("#num-2").value);

    if (num_1 >= 0 && num_2 >= 0) {
        let result = num_1 * num_2;
        result_fild.innerHTML = `Multiplication : ${result}`;
    }
}

function division() {
    let num_1 = Number(document.querySelector("#num-1").value);
    let num_2 = Number(document.querySelector("#num-2").value);
    console.log(num_2);

    if (num_1 >= 0 && num_2 >= 0) {
        let result = num_1 / num_2;
        result_fild.innerHTML = `Multiplication : ${result}`;
    }
}
